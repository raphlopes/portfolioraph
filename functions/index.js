"use strict";
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const fsdb = admin.firestore();

const helpers = require("./helpers");

const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const stripeTest = require('stripe')('sk_test_51Mp37oFyDIBgBPAqu9WJ96VYkKZJyU5fVbBZxJwtVXljtHTR61QF4YezQUwFozVT9da2kgaFkSgGUzsYEhUCOKyk00O3bXbzGh');

const websiteURL = "https://portfolio-raphael.web.app";

const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;
// Configure API key authorization: api-key
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.MAILER_API_KEY;

function sendMail(newOrder) {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    console.log("send Mail...");

    // Email content for the shop
    const shopEmailContent = `A new order has been placed!\n\n
    Customer Name: ${newOrder.customer.name}\n
    Customer Email: ${newOrder.customer.email}\n
    Shipping Address: ${helpers.getFormattedAddress(newOrder.customer.address)}\n\n
    Order Details:\n${helpers.getOrderDetailsText(newOrder.products,true)}\n\n
    Total Amount: ${helpers.formatAmount(newOrder.amount, newOrder.currency)}`;

    // Email content for the buyer
    const buyerEmailContent = `Thank you for your order, ${newOrder.customer.name}!\n\n
    Your shipping address: ${helpers.getFormattedAddress(newOrder.customer.address)}\n\n
    Order Details:\n${helpers.getOrderDetailsText(newOrder.products,false)}\n\n
    Total Amount: ${helpers.formatAmount(newOrder.amount, newOrder.currency)}`;

    const shopEmail = new SibApiV3Sdk.SendSmtpEmail();
    shopEmail.sender = { email: "lopesraphael94@gmail.com" };
    shopEmail.to = [{ email: "lopesraphael94@gmail.com", name: "Print Shop" }];
    shopEmail.subject = "New Order!";
    shopEmail.textContent = shopEmailContent;

    const buyerEmail = new SibApiV3Sdk.SendSmtpEmail();
    buyerEmail.sender = { email: "lopesraphael94@gmail.com" };
    buyerEmail.to = [{ email: newOrder.customer.email, name: newOrder.customer.name }];
    buyerEmail.subject = "Thank you for your order!";
    buyerEmail.textContent = buyerEmailContent;

    apiInstance.sendTransacEmail(shopEmail).then(
        function(data) {
            console.log("Shop email sent successfully. Returned data: " + data);
        },
        function(error) {
            console.error("Error sending shop email: ", error);
        }
    );

    apiInstance.sendTransacEmail(buyerEmail).then(
        function(data) {
            console.log("Buyer email sent successfully. Returned data: " + data);
        },
        function(error) {
            console.error("Error sending buyer email: ", error);
        }
    );
}
async function fulfillOrder(orderDetails, lineItems) {

    let promiseProducts = [];

    let uniqueTypes = new Set();

    orderDetails.products.forEach((product) => {
        uniqueTypes.add(product.type);
    });

    uniqueTypes.forEach((type) => {
        promiseProducts.push(admin.firestore().collection("products").doc(type).get());
    });

    console.log("unique Types in this order : ", uniqueTypes);

    return Promise.all(promiseProducts).then(async (productDocs) => {

        const updatedProducts = orderDetails.products.map((product) => {

            const matchingProductDoc = productDocs.find(
                (doc) => doc.id === product.type
            );

            if(!matchingProductDoc)
            {
                return product;
            }

            let matchingProductData = matchingProductDoc.data();

            const matchingLineItem = lineItems.find(
                (item) => item.price.id === matchingProductData.stripe_id
            );

            if (matchingProductData && matchingLineItem) {
                return {
                    ...product,
                    stripe_id: matchingProductData.stripe_id,
                    price: matchingLineItem.price.unit_amount,
                };
            }

            return product;
        });

        try {
            // Create a document in your Firestore database with the data and address
            const newOrder = {
                customer: orderDetails.customer,
                payment_intent : orderDetails.payment_intent,
                parcelSent : false,
                products: updatedProducts,
                amount: lineItems.reduce((acc, item) => acc + item.amount_total, 0),
                currency : lineItems[0].currency,
                created: admin.firestore.FieldValue.serverTimestamp(),
            };

            console.log("newOrder : ", newOrder);

            let promises = [];
            promises.push(fsdb.collection('orders').add(newOrder));
            promises.push(sendMail(newOrder));

            return Promise.all(promises).then(() => {
                return true;
            });

        } catch (error) {
            console.error('Order Fulfillment Error:', error);
            throw error;
        }

    });
}
async function getLineItems(sessionId) {
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ['line_items'],
        });

        return session.line_items.data;
    } catch (error) {
        console.error('Error retrieving line items:', error);
        throw error;
    }
}
async function fetchAndSetPrices(uniqueTypes) {

    const typePriceMap = {};

    for (const type of uniqueTypes) {

        const lineItemID = await helpers.getStripeLineItemID(type); // Fetch the Stripe line item ID from the database based on the type
        const price = await helpers.fetchStripePrice(lineItemID); // Fetch the price from the Stripe API using the line item ID

        typePriceMap[type] = price;
    }
    return typePriceMap;
}

exports.initializePrices = functions.https.onCall(async (data, context) => {

    const prices = await fetchAndSetPrices(data.uniqueTypes);
    console.log(prices);
    return prices;

});

exports.successfulPayment = functions.https.onCall(async (data, context) => {

    const session = await stripe.checkout.sessions.retrieve(data.session_id);
    return session.customer_details;

});

exports.createCheckoutSession = functions.https.onCall(async (data, context) => {

    let products = data.products;
    let promisesProducts = [];

    const uniqueTypes = new Set();

    products.forEach((product) => {
        uniqueTypes.add(product.type);
    });

    let orderData = {
        products: products,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
    }

    uniqueTypes.forEach((type) => {
        promisesProducts.push(admin.firestore().collection("products").doc(type).get());
    });

    return Promise.all(promisesProducts)
        .then(async (values) => {
            const lineItemsMap = {};

            products.forEach((item) => {
                const foundProduct = values.find((snapshot) => snapshot.id === item.type);

                if (foundProduct) {
                    const priceId = foundProduct.data().stripe_id;
                    if (lineItemsMap[priceId]) {
                        lineItemsMap[priceId].quantity += item.quantity;
                    } else {
                        lineItemsMap[priceId] = {
                            price: priceId,
                            quantity: item.quantity,
                        };
                    }
                }
            });

            const lineItems = Object.values(lineItemsMap);

            //put orderData in a doc in the collection "pendingOrders"
            // then get the id of the created doc
            return fsdb.collection('pendingOrders').add(orderData).then(async (docRef) => {

                const session = await stripe.checkout.sessions.create({
                    shipping_address_collection: {
                        allowed_countries: ['FR', 'US', 'JP', 'DE', 'GB', 'PT', 'KR', 'ES', 'CH', 'CN', 'HK', 'TW'],
                    },
                    shipping_options: [
                        {
                            shipping_rate_data: {
                                type: 'fixed_amount',
                                fixed_amount: {
                                    amount: 0,
                                    currency: 'eur',
                                },
                                display_name: 'Free shipping',
                                delivery_estimate: {
                                    minimum: {
                                        unit: 'business_day',
                                        value: 5,
                                    },
                                    maximum: {
                                        unit: 'business_day',
                                        value: 7,
                                    },
                                },
                                tax_behavior: 'inclusive',
                            },
                        },
                        {
                            shipping_rate_data: {
                                type: 'fixed_amount',
                                fixed_amount: {
                                    amount: 300,
                                    currency: 'eur',
                                },
                                display_name: 'Tracked shipping',
                                delivery_estimate: {
                                    minimum: {
                                        unit: 'business_day',
                                        value: 5,
                                    },
                                    maximum: {
                                        unit: 'business_day',
                                        value: 7,
                                    },
                                },
                                tax_behavior: 'inclusive',
                            },
                        },
                    ],
                    line_items: lineItems,
                    custom_text: {
                        shipping_address: {
                            message : 'Please note that with regular shipping we won\'t be able to know if your order is lost or not.'
                        }
                    },
                    mode: "payment",
                    success_url: websiteURL + "/success/{CHECKOUT_SESSION_ID}",
                    cancel_url: websiteURL+'/cancel',
                    client_reference_id: docRef.id,
                    automatic_tax: { enabled: true },
                });
                console.log("orderData", orderData);

                return session.url;
            });


        })
        .catch((error) => {
            console.error(error);
        });


});

exports.payment_succeeded = functions.https.onRequest(async (req, res) => {

    const endpointSecretTest = 'whsec_fd1abbba6f4252528c21dc0bd30c5bc403defcf92dc5cf9a7c10b9c785c06ecc';
    const endpointSecret = 'whsec_GFbaQhjaOIFoSOnmeJwhyvIF96dh4VEm';

    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
    } catch (err) {
        console.log(`Webhook Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        console.log('Payment successful.');
        // Retrieve the data from the checkout session
        const session = event.data.object;
        const customer_details = session.customer_details || {};
        const shipping_details = session.shipping_details || {};
        let orderDetails;

        const pendingOrderDoc = await fsdb.collection('pendingOrders').doc(session.client_reference_id).get();

        if(!pendingOrderDoc.exists) {
            return res.sendStatus ( 200 ).send("Order already treated");
        }

        orderDetails = pendingOrderDoc.data();

        const lineItems = await getLineItems(session.id);

        orderDetails.customer = helpers.mergeAddressDetails(customer_details, shipping_details);
        orderDetails.payment_intent = session.payment_intent;

        console.log("orderDetails", orderDetails);

        try {
            await fulfillOrder(orderDetails,lineItems);
            await fsdb.collection('pendingOrders').doc(session.client_reference_id).delete();
            // Return a success response
            console.log('Order fulfillment successful.');
            return res.sendStatus ( 200 );
        }
        catch (error) {
            console.error('Order Fulfillment Error:', error);
            return res.sendStatus ( 500 );
        }
    }
});

exports.checkAdminPassword = functions.https.onCall((data, context) => {

    const password = data.password;
    console.log("entered password", password);
    const adminPassword = 'DIablo94.'; // Replace with your actual admin password

    if (password === adminPassword) {
        return true;
    } else {
        return false;
    }
});

exports.test = functions.https.onRequest(async (req, res) => {

    return await fsdb.collection('pendingOrdersTest').doc("0eS04Ch0ab1YmXBRzD5L").get()
        .then((doc) => {
            let orderDetails = doc.data();
            console.log(orderDetails);
        });

});

