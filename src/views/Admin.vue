<template>
    <main class="page cv-page">
        <div class="d-flex flex-column h-100 w-100 " v-if="loading">
            <div class="d-flex justify-content-center text-center py-5">
                <loading style="color: white; height: 6rem;" class=""></loading>
            </div>
        </div>

        <div v-else class="overflow-auto scroll-light h-100">

            <div class="d-flex pt-lg-4 px-3 flex-wrap">

                <div class="mb-3 col-md-6 col-12 my-md-0 my-md-3 px-md-3 px-0">
                    <div class="bg-white d-flex flex-column border-radius-10 block-height"
                         style="height:80vh!important; border: solid #EAE7E7 1px">

                        <div
                            class="d-flex px-4 flex-lg-row pt-3 justify-content-between py-lg-3 pb-4 border-bottom">
                            <h4 class="my-auto ">Orders</h4>
                            <div class="border-radius-10 bg-light px-3 py-2">
                                <span id="">x{{ totalSales.quantity }} - {{ totalSales.total }}€</span>
                            </div>
                        </div>

                        <div class="bg-light-dashboard h-100 overflow-auto scroll-light">
                            <div v-if="loadingOrders==true"
                                 class="d-flex w-100 h-100 flex-column justify-content-center">

                                <div class="w-25 mx-auto">
                                    <loading class="w-100"></loading>
                                </div>
                            </div>
                            <div class="h-100" v-else-if="orders.length>0">

                                <div class="d-flex flex-column h-100 text-grey w-100 overflow-auto">
                                    <div @click="expandOrder(order)" v-for="(order,indexOrder) in orders" :key="order.id" class="border-bottom block-hover">

                                    <div class=" px-0 mb-3 mx-2 pt-2 position-relative">

                                        <div class="d-flex py-3 pl-2 border-radius-10">

                                            <div class="d-flex flex-column font-weight-normal justify-content-start pr-2 ">
                                                <div class="text-left font-size-medium font-weight-bold pb-1 ">
                                                    <span> {{order.customer.name}} - </span> {{orderDate(order)}}
                                                </div>
                                                <div class="font-size-small text-muted text-left">
                                                    {{ translateAdress(order.customer.address) }}
                                                </div>
                                                <div class="font-size-small text-muted text-left">
                                                    Nb of products : {{ order.products.length }} - Amount :
                                                    {{Number(order.amount/100).toFixed(2)}}€
                                                </div>
                                            </div>

                                            <div class="px-1 d-flex flex-row justify-content-end ml-auto">
                                                <button @click="openParcelSentModal(order)" :class="{'bg-green': order.parcelSent}" class="my-auto btn btn-svg bg-white px-3 py-2 mr-1 ml-2">
                                                    <loading v-if="order.loading && order.loading === true"></loading>
                                                    <parcel-sent-icon style="height:1.2rem;color : black"  v-else></parcel-sent-icon>
                                                </button>
                                            </div>

                                        </div>
                                        <transition-group v-if="order.expanded" name="fade" tag="div" class="order-details">
                                            <div v-for="(product, indexProduct) in order.products" :key="indexProduct" class="product">
                                                <div class="product-image my-auto">
                                                    <img :src="product.img" alt="Product Image">
                                                </div>
                                                <div class="product-name my-auto">
                                                    {{ product.text }}
                                                </div>
                                                <div class="product-quantity my-auto">
                                                    {{ Number(product.price/100).toFixed(2) }}€ - {{ product.quantity }}
                                                </div>
                                            </div>
                                        </transition-group>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="h-100 d-flex flex-column justify-content-center" v-else>
                                <div class="text-center d-flex mx-auto">
                                    <h4>No orders</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-12 my-md-0 my-md-3 px-md-3 px-0">
                    <div class="bg-white d-flex flex-column border-radius-10 block-height mb-3"
                         style="height: 40vh!important;border: solid #EAE7E7 1px">

                        <div
                            class="d-flex px-4 flex-lg-row pt-3 justify-content-between py-lg-3 pb-4 border-bottom">
                            <h4 class="my-auto ">To Prepare</h4>
                            <div class="border-radius-10 bg-light px-3 py-2">
                                <span id="">✉️ {{totalEnvelopestoPrep}} - 🏞️ {{totalPrintsToPrep}}</span>
                            </div>
                        </div>

                        <div class="bg-light-dashboard h-100 overflow-auto scroll-light">
                            <div v-if="loadingPrepare==true"
                                 class="d-flex w-100 h-100 flex-column justify-content-center">

                                <div class="w-25 mx-auto">
                                    <loading class="w-100"></loading>
                                </div>
                            </div>
                            <div v-else-if="!toPrepare" class="d-flex w-100 h-100 flex-column justify-content-center">

                                <div class="mx-auto">
                                    <h4>Nothing to prepare</h4>
                                </div>
                            </div>
                            <div class="h-100" v-else>

                                <div class="d-flex flex-column h-100 text-grey w-100 overflow-auto scroll-primary">

                                        <!-- Display Envelopes -->
                                        <div class="d-flex border-bottom block-hover px-2 py-3" v-for="(envelope, indexEnvelopes) in toPrepare.envelopes" :key="indexEnvelopes">

                                            <div class="product-image border-radius-10" style="border: 1px solid black;">
                                                <parcel-sent-icon class="p-2"></parcel-sent-icon>
                                            </div>

                                            <div class="product-name my-auto">
                                                Enveloppe - {{ translateType(envelope.type) }} - Quantity: {{ envelope.quantity }}
                                            </div>

                                        </div>

                                        <!-- Display Prints -->
                                        <div class="d-flex border-bottom block-hover px-2 py-3" v-for="product in toPrepare.products" :key="product.name">
                                            <div class="product-image">
                                                <img :src="product.img" alt="Product Image">
                                            </div>

                                            <div class="product-name my-auto">
                                                {{ product.name }} - {{ translateType(product.type) }} - Quantity: {{ product.quantity }}
                                            </div>

                                            <div class="ml-auto">
                                                <button @click="addToStorage(product)" class="btn my-auto border-radius-10 svg-bloc pointer">
                                                    <parcel-sent-icon  v-if="!preparedLoading"></parcel-sent-icon>
                                                    <loading v-else></loading>
                                                </button>
                                            </div>
                                        </div>


                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="bg-white d-flex flex-column border-radius-10 block-height mb-3"
                         style="height: 40vh!important;border: solid #EAE7E7 1px">

                        <div
                            class="d-flex px-4 flex-lg-row pt-3 justify-content-between py-lg-3 pb-4 border-bottom">
                            <h4 class="my-auto ">Storage</h4>
                        </div>

                        <div class="bg-light-dashboard h-100 overflow-auto scroll-light">
                            <div v-if="loadingStorage == true"
                                 class="d-flex w-100 h-100 flex-column justify-content-center">

                                <div class="w-25 mx-auto">
                                    <loading class="w-100"></loading>
                                </div>
                            </div>
                            <div class="h-100" v-else-if="storage.length>0">
                                <div class="d-flex flex-column h-100 text-grey w-100 overflow-auto scroll-primary">

                                    <div class="d-flex border-bottom block-hover px-2 py-3" v-for="(envelopeType, indexEnvelopes) in storedEnvelopes" :key="indexEnvelopes">
                                        <div class="product-image border-radius-10" style="border: 1px solid black;">
                                            <parcel-sent-icon class="p-2"></parcel-sent-icon>
                                        </div>

                                        <div class="d-flex justify-content-between align-items-center flex-grow-1">

                                            <span class="product-name my-auto">
                                              Enveloppe - {{ translateType(envelopeType.type) }}
                                            </span>

                                            <div>
                                                <input type="text" class="input-smaller input-blend" v-model="storage.find(item=>item.id==='envelopes').envelopesTypes[indexEnvelopes].quantity"
                                                       :disabled="!envelopeType.inputEnabled">

                                                <button @click="toggleInputEnabled(indexEnvelopes)" class="btn btn-svg bg-white px-3 py-2 mr-1 ml-2">
                                                    <gear-icon style="height:1.2rem;color : black"></gear-icon>
                                                </button>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="product-category block-hover px-2 py-3"
                                        v-for="type in Object.keys(storedProductsByType)"
                                        :key="type">

                                        <div class="d-flex justify-content-between">
                                            <h5 class="my-auto title">{{ translateType(type) }}</h5>
                                            <h5 class="my-auto title mr-2"> Total Quantity : {{calculateTotalQuantity(type)}} </h5>
                                        </div>

                                            <div class="d-flex justify-content-start product" v-for="product in storedProductsByType[type]" :key="product.id">
                                                <div class="product-image">
                                                    <img v-if="product.img" :src="product.img" alt="Product Image">
                                                </div>

                                                <div class="d-flex">
                                                    <div class="product-name my-auto">
                                                        {{ product.name }} -
                                                        Quantity: {{ product.quantity }}
                                                    </div>
                                                </div>
                                            </div>
                                    </div>




                                </div>
                            </div>
                            <div v-else class="d-flex w-100 h-100 flex-column justify-content-center">
                                <div class="mx-auto">
                                    <h4>Nothing in the storage</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
        <parcel-sent v-if="parcelSentModal" :data="parcelSentModal" :close="parcelSentModal == false" @close="parcelSentModal = false" ></parcel-sent>
    </main>
</template>

<script>

import {db} from "@/main";
import {collection, doc, getDoc, query,orderBy, getDocs, setDoc, updateDoc} from "firebase/firestore";
import {formatTimestamp, getFormattedAddress} from "@/utils/utils";

import Loading from "@/assets/icon/loading.svg";
import ParcelSentIcon from "@/assets/icon/mail.svg";
import GearIcon from "@/assets/icon/gear.svg";
import OrderPrepared from "@/assets/icon/order-prepared.svg";

import ParcelSent from "@/components/ParcelSentModal.vue";

export default {
    name: "Admin",
    data() {
        return {
            orders : [],
            storage : [],
            loading : false,
            loadingPrepare : false,
            loadingStorage : false,
            loadingOrders : false,
            preparedLoading : false,
            parcelSentModal : false,
        };
    },
    components: {
        Loading,
        ParcelSentIcon,
        GearIcon,
        ParcelSent,
    },
    computed: {
        /*
        toPrepare2: function() {
            const orders = this.orders;

            const productsContent = [];
            const envelopesContent = [];

            const imageMap = new Map();

            // Loop through the orders
            for (const order of orders.filter(order => !order.parcelSent || order.parcelSent === false)) {
                // Loop through the products in each order
                for (const product of order.products) {
                    const { img, quantity, type, name } = product;

                    if (imageMap.has(img)) {
                        const existingProduct = imageMap.get(img);
                        existingProduct.quantity += quantity;
                    } else {
                        const newProduct = { img, quantity, type, name };
                        productsContent.push(newProduct);
                        imageMap.set(img, newProduct);
                    }
                }

                // Calculate the envelope quantities for the current order
                const envelopeQuantities = this.calculateOrderEnvelopes(order);

                for (const type in envelopeQuantities) {
                    const envelopeIndex = envelopesContent.findIndex(
                        (envelope) => envelope.type === type
                    );

                    if (envelopeIndex !== -1) {
                        envelopesContent[envelopeIndex].quantity += envelopeQuantities[type];
                    } else {
                        const envelope = {
                            name: 'Enveloppe',
                            type: type,
                            additionnalData: '',
                            quantity: envelopeQuantities[type]
                        };

                        envelopesContent.push(envelope);
                    }
                }
            }

            return {
                products: productsContent,
                envelopes: envelopesContent
            };
        },
         */
        toPrepare: function() {
            const orders = this.orders;
            const storage = this.storage;

            const productsContent = [];
            const envelopesContent = [];

            const nameMap = new Map(); // Use name as the key instead of image URL

            // Loop through the orders
            for (const order of orders.filter(order => !order.parcelSent || order.parcelSent === false)) {
                // Loop through the products in each order
                for (const product of order.products) {
                    const { img, quantity, type, name } = product;

                    if (nameMap.has(name)) {
                        const existingProduct = nameMap.get(name);
                        existingProduct.quantity += quantity;
                    } else {
                        const newProduct = { img, quantity, type, name };
                        productsContent.push(newProduct);
                        nameMap.set(name, newProduct);
                    }
                }

                // Calculate the envelope quantities for the current order
                const envelopeQuantities = this.calculateOrderEnvelopes(order);

                for (const type in envelopeQuantities) {
                    const envelopeIndex = envelopesContent.findIndex(
                        (envelope) => envelope.type === type
                    );

                    if (envelopeIndex !== -1) {
                        envelopesContent[envelopeIndex].quantity += envelopeQuantities[type];
                    } else {
                        const envelope = {
                            name: 'Enveloppe',
                            type: type,
                            additionnalData: '',
                            quantity: envelopeQuantities[type]
                        };

                        envelopesContent.push(envelope);
                    }
                }
            }

            // Update quantities based on the storage content
            const envelopesStorage = storage.find(item => item.id === 'envelopes');
            const productsStorage = storage.find(item => item.id === 'products');

            if (envelopesStorage && envelopesStorage.envelopesTypes) {
                for (const envelope of envelopesContent) {
                    const envelopeType = envelope.type;
                    const storedEnvelope = envelopesStorage.envelopesTypes.find(
                        item => item.type === envelopeType
                    );

                    if (storedEnvelope) {
                        envelope.quantity -= storedEnvelope.quantity;
                    }
                }
            }

            if (productsStorage) {
                for (const productType in productsStorage) {
                    if (
                        productType === 'types' ||
                        productType === 'id' ||
                        productType === 'modifiedAt' ||
                        productType === 'ref'
                    ) {
                        continue; // Skip the irrelevant fields
                    }

                    const productArray = productsStorage[productType];
                    if (Array.isArray(productArray)) {
                        for (const product of productArray) {
                            const { name, quantity } = product;
                            const storedProduct = productsContent.find(
                                item => item.name === name
                            );

                            if (storedProduct) {
                                storedProduct.quantity -= quantity;
                            }
                        }
                    }
                }
            }

            return {
                products: productsContent.filter(product => product.quantity > 0).sort((a, b) => b.quantity - a.quantity),
                envelopes: envelopesContent.filter(envelope => envelope.quantity > 0).sort((a, b) => b.quantity - a.quantity)
            };
        },
        storedEnvelopes : function(){
            return this.storage.find((product) => product.id === 'envelopes').envelopesTypes.map((envelope) => {
                return {
                    ...envelope,
                };
            });
        },
        storedProductsByType: function() {
            const products = this.storage.find((item) => item.id === 'products');
            const productTypes = Object.keys(products.types).filter((key) => products.types[key]);

            const storageProducts = {};

            for (const type of productTypes) {
                const subCollection = products[type] || [];
                const filteredSubCollection = subCollection.filter((product) => product.quantity > 0);

                if (filteredSubCollection.length > 0) {
                    storageProducts[type] = [...filteredSubCollection];
                }
            }

            return storageProducts;
        },
        totalSales : function() {
            if(this.orders.length > 0)
            {
                return {
                    total : this.orders.reduce((total, order) => {
                        return total + order.amount/100;
                    }, 0),
                    quantity : this.orders.reduce((total, order) => {
                        return total + order.products.length;
                    }, 0),
                }
            }
            else
            {
                return {
                    total : 0,
                    quantity : 0,
                };
            }
        },
        totalEnvelopestoPrep: function() {
            if(this.toPrepare && this.toPrepare['envelopes'])
            {
                return this.toPrepare['envelopes'].reduce((total, envelope) => total + envelope.quantity, 0);
            }
            else
            {
                return 0;
            }
        },
        totalPrintsToPrep: function() {
            if(this.toPrepare && this.toPrepare['products'])
            {
                return this.toPrepare['products'].reduce((total, product) => total + product.quantity, 0);
            }
            else
            {
                return 0;
            }
        }
    },
    methods : {
        translateType(type) {
            switch (type) {
                case 'postalCard':
                    return 'Postal Card';
                default:
                    return type;
            }
        },
        translateAdress(address) {
            return getFormattedAddress(address);
        },
        openParcelSentModal(order){
            this.parcelSentModal = {
                order : order,
            };
        },
        toggleInputEnabled : function(index) {
            if (this.storedEnvelopes[index].inputEnabled == true) {
                this.updateQuantity();
            } else {
                this.storage.find(item=>item.id==='envelopes').envelopesTypes[index].inputEnabled = true;
            }
        },
        updateQuantity() {

            // Update the quantity in the database (implement your Firebase update logic here)
            const envelopeRef = this.storage.find(item=>item.id==='envelopes').ref;
            const envelopeTypes = this.storage.find(item=>item.id==='envelopes').envelopesTypes;
            envelopeTypes.forEach((envelopeType) => {
                envelopeType.inputEnabled = false;
            });
            updateDoc(envelopeRef, {
                envelopesTypes : envelopeTypes
            })
                .then(() => {
                    // Update successful
                    console.log('Envelopes quantity updated successfully');
                })
                .catch((error) => {
                    // Error updating
                    console.error('Error updating envelopes quantity:', error);
                });


            // Disable the input after updating
            this.isInputEnabled = false;
        },
        calculateOrderEnvelopes: function(order) {
            const envelopeQuantities = {};
            for (const product of order.products) {
                const { type, quantity } = product;

                if (type in envelopeQuantities) {
                    envelopeQuantities[type] += quantity;
                } else {
                    envelopeQuantities[type] = quantity;
                }
            }

            for (const type in envelopeQuantities) {
                envelopeQuantities[type] = Math.ceil(envelopeQuantities[type] / 3);
            }

            return envelopeQuantities;
        },
        calculateTotalQuantity: function(type) {
            let totalQuantity = 0;

            if (this.storedProductsByType[type]) {
                const products = this.storedProductsByType[type];

                for (const product of products) {
                    totalQuantity += product.quantity;
                }
            }

            return totalQuantity;
        },
        getTotalQuantity : function (quantities) {
            return Object.values(quantities).reduce((total, quantity) => total + quantity, 0);
        },
        getOrders : function () {
            let q = query(collection(db, "orders"), orderBy("created", "desc"));
            return getDocs(q).then((collection)=>{
                return collection.docs.map((doc) => {
                    let val = doc.data();
                    val["expanded"] = false;
                    val["ref"] = doc.ref;
                    val["loading"] = false;
                    val["id"] = doc.id;
                    return val
                });
            });
        },
        getStorage : function () {

            return getDocs(collection(db, "storage")).then((collection)=>{
                return collection.docs.map((doc) => {
                    let val = doc.data();
                    val.ref = doc.ref;
                    val["id"] = doc.id;
                    if(val.id === "products")
                    {
                        for (const [key, value] of Object.entries(val.types)) {
                            if(value === true)
                            {
                                val[key] = [];
                            }
                        }
                    }
                    if(val.id === "envelopes")
                    {
                        val.envelopesTypes.forEach((envelopeType) => {
                            envelopeType.inputEnabled = false;
                        });
                    }
                    return val
                });
            });
        },
        getSubCollection: function (productRef, subCollectionName) {
            const subCollectionRef = collection(productRef, subCollectionName);

            return getDocs(subCollectionRef)
                .then((querySnapshot) => {
                    const subCollectionData = querySnapshot.docs.map((doc) => {
                        const val = doc.data();
                        val.ref = doc.ref;
                        val["id"] = doc.id;
                        return val;
                    });
                    return subCollectionData;
                });
        },
        orderDate : function (order) {
            return formatTimestamp(order.created,0, "en-US");
        },
        expandOrder: function(order) {
            order.expanded = !order.expanded;
        },
        addToStorage: function(product) {
            //check if productCollection contains a key with the productType.
            //if yes, check inside the array if the product exists, by using the productId
            //If not we need to create the product, which will also create the collection
            //if the productType exists but not the product, we create it.
            // if both exists just update the quantity
            let promises = [];
            const productType = product.type;
            const productId = product.name.replace(/\s/g, '');

            const productCollection = this.storage.find((item) => item.id === 'products');

            if(Object.hasOwn(productCollection, productType))
            {
                const productTypeCollection = productCollection[productType];
                const productIndex = productTypeCollection.findIndex((item) => item.id === productId);

                if(productIndex !== -1)
                {
                    productTypeCollection[productIndex].quantity += product.quantity;
                    const docRef = productTypeCollection[productIndex].ref;
                    const docData = { quantity: productTypeCollection[productIndex].quantity };
                    promises.push(updateDoc(docRef, docData));
                }
                else
                {
                    productTypeCollection.push(product);
                    const docRef = doc(db, "storage", "products", productType, productId);
                    const docData = { ...product };
                    delete docData.type;
                    promises.push(setDoc(docRef, docData));
                }
            }
            else
            {
                productCollection[productType] = [product];
                const docRef = doc(db, "storage", "products", productType, productId);
                const docData = { ...product };
                delete docData.type;
                promises.push(setDoc(docRef, docData));
            }

        }

    },
    mounted () {
        this.loadingOrders = true;
        this.loadingPrepare = true;
        this.loadingStorage = true;
        this.getOrders().then((ordersDoc)=>{
            this.orders = ordersDoc;
            this.loadingOrders = false;
        }).catch((error)=>{
            console.log(error);
            this.loadingOrders = false;
        });

        this.getStorage().then((storage)=>{
            let promises = [];
            this.storage = storage;
            let i = this.storage.findIndex((item)=>item.id === "products");
                for (const [key, value] of Object.entries(storage[i].types)) {
                    if(value === true)
                    {
                        const subCollectionPromise = this.getSubCollection(storage[i].ref, key)
                            .then((subCollection) => {
                                this.storage[i][key] = subCollection;
                            })
                            .catch((error) => {
                                console.log(error);
                            });

                        promises.push(subCollectionPromise);
                    }
                }
            return Promise.all(promises);
        })
            .then(()=>{
                this.loadingStorage = false;
                this.loadingPrepare = false;
        })
            .catch((error)=>{
            console.log(error);
            this.loadingStorage = false;
            this.loadingPrepare = false;
        });
    }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.avatar {
    margin-bottom: 20px;
}

.title {
    font-size: 24px;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 18px;
    margin-bottom: 10px;
}

.about-me {
    color: white;
}

.bg-light-dashboard{
    background-color: #F7F7F7!important;
}

@media (min-width: 576px) {
    .scroll-light::-webkit-scrollbar {
        width: 6px;
    }

    .scroll-light::-webkit-scrollbar-thumb {
        background: #bdbdbe !important;
        border-radius: 3px;
    }

    .scroll-light::-webkit-scrollbar-track {
        background: #dededebf;
        border-radius: 20px;
    }
}

.svg-bloc {
    width: 3rem;
    height: 3rem;
    min-width: 3rem;
    min-height: 3rem;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #eeeeee;
    svg {
        margin: auto;
        color: black;
        height: 1.7rem;
    }
}

.order-details-enter-active,
.order-details-leave-active {
    transition: max-height 0.3s ease;
}

.order-details-enter,
.order-details-leave-to {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}

.product{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #e5e4e4;
    &:last-child {
        border-bottom: none;
        padding-bottom: 0!important;
    }
    .product-name {
        font-weight: 600;
        font-size: 1rem;
    }
    .product-quantity {
        font-size: 0.8rem;
        color: #a0a0a0;
    }
}
.product-category{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #e5e4e4;
    &:last-child {
        border-bottom: none;
        padding-bottom: 0!important;
    }
    .title{
        font-weight: 600;
        font-size: 1rem;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.input-smaller {
    width: 3rem;
    text-align: center;
    font-size: 12px; /* Adjust the font size as needed */
}

.input-blend {
    flex: 1;
    text-align: center;
    background-color: #eeeeee;
    border: none;
    padding: 0;
}

.btn-svg{
    background-color: #eeeeee;
    border-radius: 10px;
    height: 2.5rem;
}

.bg-green {
    background-color: green !important;
}


</style>

