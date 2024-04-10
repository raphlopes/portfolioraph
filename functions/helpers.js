// Helper function to format the address
const countryList = require('country-list');

const admin = require ( "firebase-admin" );
const fsdb = admin.firestore();

const stripe = require('stripe')('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');
const stripeTest = require('stripe')('sk_test_51Mp37oFyDIBgBPAqu9WJ96VYkKZJyU5fVbBZxJwtVXljtHTR61QF4YezQUwFozVT9da2kgaFkSgGUzsYEhUCOKyk00O3bXbzGh');

function formatAmount(amount, currency) {
    const formattedAmount = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0, // Set minimum fraction digits to 0
        maximumFractionDigits: 2 // Set maximum fraction digits to 2
    }).format(amount / 100);

    return formattedAmount;
}
function mergeAddressDetails(customerDetails, shippingDetails) {
    const mergedAddress = {};

    // Set name and email from shipping details
    mergedAddress.name = shippingDetails.name || customerDetails.name;
    mergedAddress.email = customerDetails.email;

    // Set phone from customer details (if available)
    mergedAddress.phone = customerDetails.phone || null;

    // Create the address object
    mergedAddress.address = {
        line1: shippingDetails.address.line1 || customerDetails.address.line1,
        line2: shippingDetails.address.line2 || customerDetails.address.line2,
        city: shippingDetails.address.city || customerDetails.address.city,
        state: shippingDetails.address.state || customerDetails.address.state,
        postal_code: shippingDetails.address.postal_code || customerDetails.address.postal_code,
        country: shippingDetails.address.country || customerDetails.address.country,
    };

    if(customerDetails.tax_exempt!="none"){
        mergedAddress.tax_exempt = customerDetails.tax_exempt;
    }
    if(customerDetails.tax_ids.length>0){
        mergedAddress.tax_ids = customerDetails.tax_ids;
    }

    return mergedAddress;
}

function getFormattedAddress(address) {
    const { line1, line2, city, postal_code, state, country } = address;
    let formattedAddress = line1;
    if (line2) {
        formattedAddress += ", " + line2;
    }
    formattedAddress += ", " + city + ", " + postal_code;
    if (state) {
        formattedAddress += ", " + state;
    }

    const countryName = countryList.getName(country);
    formattedAddress += ", " + countryName;

    return formattedAddress;
}
// Helper function to format the order details
function getOrderDetailsText(products, shop) {
    let orderDetailsText = "";
    if(shop===true)
    {
        products.forEach((product) => {
            orderDetailsText += `- Name: ${product.name}, Type: ${product.type}, Quantity: ${product.quantity}\n`;
        });
    }
    else{
        products.forEach((product) => {
            orderDetailsText += `- Name: ${product.text}, Quantity: ${product.quantity}\n`;
        });
    }

    return orderDetailsText;
}
async function getStripeLineItemID(product){
    try {
        return await fsdb.collection('products').doc(product).get().then(doc => {
            if(!doc.exists){
                console.log('No such document!');
            } else {
                console.log('Document data:', doc.data());
                return doc.data().stripe_id;
            }
        });
    }
    catch (error) {
        console.error(`Error fetching Stripe line item ID for product '${product}':`, error);
        throw error;
    }
}
async function fetchStripePrice(lineItemID) {
    try {
        // Use the Stripe API to retrieve the price based on the line item ID
        const price = await stripe.prices.retrieve(lineItemID);

        // Convert the price from cents to the desired currency format
        const formattedPrice = {
            amount : price.unit_amount,
            currency : price.currency,
        };

        return formattedPrice;
    } catch (error) {
        console.error(`Error fetching price from Stripe for line item ID '${lineItemID}':`, error);
        throw error;
    }
}

exports.getFormattedAddress = getFormattedAddress;
exports.fetchStripePrice = fetchStripePrice;
exports.getStripeLineItemID = getStripeLineItemID;
exports.getOrderDetailsText = getOrderDetailsText;
exports.formatAmount = formatAmount;
exports.mergeAddressDetails = mergeAddressDetails;

