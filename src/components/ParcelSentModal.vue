<template>

    <modal-custom medium bg-dark :to-close="toClose" @close="$emit('close')" >

        <template slot="header">
            <div class="d-flex justify-content-center w-100 pt-md-2 pb-md-2 pb-5 pt-1 my-auto text-white h4 font-weight-bold">
                {{title}}
            </div>
        </template>

        <template slot="body">
            <div class="d-flex flex-column h-100 w-100 " v-if="loading">
                <div class="d-flex justify-content-center text-center bg-white py-5">
                    <loading style="color: black; height: 3rem;" class=""></loading>
                </div>
            </div>

            <div v-else-if="step == 1" class="pt-2">

                <div class="d-flex flex-column h-100 w-100 ">
                    <h3 class="text-center text-white mt-3 font-weight-bold mb-5 mx-n1">Mail to copy </h3>

                    <div class="mx-md-5 mx-4 text-left font-weight-normal font-size-medium mb-4" >

                        <p class="text-white mb-4">
                            Here is the mail to copy to send to the customer.
                        </p>

                        <div class="d-flex">
                            <span class="text-white mb-3 my-auto"> Email of the customer : {{order.customer.email}} </span>
                            <button class="btn bg-white ml-2 my-auto  d-flex border-radius-10 justify-content-center shadow-new-sm"
                                    style="transition: all 0.5s ease"
                                    @click="copyText(order.customer.email,0)">
                                <message-icon style="height: 1rem" class="m-auto"></message-icon>
                            </button>
                        </div>

                        <textarea v-model="textToCopy" class="mt-3 form-control" rows="8" readonly>
                        </textarea>

                    </div>

                    <div class="w-100 py-4 d-flex px-md-5 px-4 justify-content-center">
                        <button class="btn bg-white  d-flex border-radius-10 justify-content-center shadow-new-sm"
                                :class="{'text-white bg-success' : copied, 'text-black' : !copied}"
                                style="transition: all 0.5s ease"
                                @click="copyText(textToCopy,1)">

                            <div class="px-3 my-auto " v-if="copied">
                                Message copied
                            </div>
                            <message-icon style="height: 2.3rem" class="mr-md-4 mr-0 px-md-0 px-2 " v-if="!copied"></message-icon>
                            <check-rounded-icon style="height: 2.3rem" class="ml-md-4 ml-0 text-white" v-else></check-rounded-icon>

                            <div class="my-auto px-md-3 px-1" v-if="!copied">
                                Copy the message
                            </div>

                        </button>
                    </div>

                </div>

            </div>
            <div v-else-if="step === 2" class="pt-2">
                <div class="d-flex flex-column h-100 w-100">
                    <div class="mx-md-5 mx-4 text-center font-weight-normal font-size-medium mb-4">
                        <p class="text-white">
                            The parcel has been sent and validated successfully.
                        </p>
                    </div>
                </div>
            </div>
        </template>

        <template slot="footer">
            <div class="d-flex justify-content-between mx-5">
                <button class="clear-cart-btn" @click="toClose=true">Cancel</button>
                <button class="checkout-btn" @click="updateParcel">Parcel Sent</button>
            </div>
        </template>

    </modal-custom>

</template>

<script>
import ModalCustom from "@/components/Modal.vue";
import Loading from "@/assets/icon/loading.svg";

import MessageIcon from "@/assets/icon/message.svg";
import CheckRoundedIcon from "@/assets/icon/check.svg";

import {db} from "@/main";
import {getDoc, updateDoc, doc} from "firebase/firestore";

export default {
    name : "ParcelSentModal",
    components: {
        ModalCustom,
        Loading,
        MessageIcon,
        CheckRoundedIcon
    },
    data() {
        return {
            toClose: false,
            loading: false,
            copied : false,
            step : 1
        };
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    computed: {
        title : function()
        {
            if(this.step === 1)
                return "Validate the sending of the parcel ?";
            else if(this.step === 2)
                return "Parcel Sent Validated";
            else
                return "Parcel Infos";
        },
        order : function()
        {
            return this.data.order;
        },
        textToCopy :function() {

            const { customer, products } = this.order;

            // Thank you message
            let copyText = "Merci " + customer.name + " pour ta commande ! \n";

            // Order recap
            copyText += "Voici le récapitulatif de ta commande :\n";
            products.forEach((product) => {
                copyText += product.text + " - " + product.quantity + " exemplaire"+ (product.quantity>1?"s ":" ") + "\n";
            });

            // Parcel sent message
            copyText += "\nJe m'occupe de poster ta commande aujourd'hui. En attentant voici un lien WeTransfer pour télécharger tes photos :";

            // WeTransfer link message
            copyText += "\n[Insérer le lien WeTransfer ici].";

            // Goodbye message
            copyText += "\n\nMerci encore pour ta confiance. À bientôt 🥳 !";

            return copyText;
        },
    },

    methods: {
        copyText: function (text, type) {
                let str = text;
                let el = document.createElement('textarea');
                // Set value (string to be copied)
                el.value = str;
                // Set non-editable to avoid focus and move outside of view
                el.setAttribute('readonly', '');
                el.style = {position: 'absolute', left: '-9999px'};
                document.body.appendChild(el);
                // Select text inside element
                el.select();
                // Copy text to clipboard
                document.execCommand('copy');
                // Remove temporary element
                document.body.removeChild(el);
                if(type == 1)
                {
                    this.copied = true;
                }
        },
        removeShippedPrints : function() {
            const promises = [];

            this.order.products.forEach((product) => {
                const productType = product.type;
                const productId = product.name.replace(/\s/g, '');

                const docRef = doc(db, "storage", "products", productType, productId);

                // Fetch the document to get the current quantity
                promises.push(
                    getDoc(docRef).then((docSnapshot) => {
                        if (docSnapshot.exists()) {
                            const currentQuantity = docSnapshot.data().quantity;

                            // Calculate the updated quantity by subtracting the shipped quantity
                            const updatedQuantity = currentQuantity - product.quantity;

                            // Update the quantity field in the document
                            promises.push(updateDoc(docRef, { quantity: updatedQuantity }));
                        }
                    })
                );
            });

            // Wait for all promises to resolve
            return Promise.all(promises);
        },
        removeShippedEnvelopes : async function (){

            const envelopesRef = doc(db, 'storage', 'envelopes');

            try {
                // Create a set to store the unique product types
                const productTypes = new Map();

                // Iterate through the order products and add the product types to the set
                this.order.products.forEach((product) => {
                    const type = product.type;
                    const quantity = product.quantity;
                    if (productTypes.has(type)) {
                        productTypes.set(type, productTypes.get(type) + quantity);
                    } else {
                        productTypes.set(type, quantity);
                    }
                });

                // divide value by 5 but round up to the next upper integer
                for(let [key, value] of productTypes){
                    productTypes.set(key, Math.ceil(value/5));
                }

                // Get the envelopes data from the database
                const envelopesSnapshot = await getDoc(envelopesRef);
                const envelopesData = envelopesSnapshot.data();


                envelopesData.envelopesTypes.forEach((envelopeType) => {
                    // Check if the envelope type is in the order
                    if (productTypes.has(envelopeType.type)) {
                        envelopeType.quantity -= productTypes.get(envelopeType.type);
                    }
                });

                await updateDoc(envelopesRef, {
                    envelopesTypes : envelopesData.envelopesTypes
                })
                console.log('Envelopes quantity updated successfully');
            } catch (error) {
                console.error('Error updating envelopes quantity:', error);
            }
        },

        updateParcel : function(){
            if(this.step === 1){
                this.loading = true;
                this.removeShippedPrints().then(() => {
                    this.removeShippedEnvelopes().then(() => {
                        this.loading = false;
                        updateDoc(this.order.ref, {parcelSent : true})
                        this.step = 2;
                    }).catch((error) => {
                        console.error("Error updating envelopes:", error);
                        this.loading = false;
                    });
                }).catch((error) => {
                    console.error("Error updating prints:", error);
                    this.loading = false;
                });
            }
            else if(this.step === 2){
                this.$emit("close");
            }
        }
    },
};
</script>

<style>
.cart-item {
    margin-bottom: 10px;
}

.product-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 5px;
}

.product-name {
    font-size: 16px;
    font-weight: bold;
}

.quantity-container {
    display: flex;
    align-items: center;
}

.quantity-btn {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
}

.quantity-btn svg {
    width: 18px;
    height: 18px;
}

.quantity {
    background-color: #eee;
    border-radius: 5px;
    padding: 5px;
    margin: 0 5px;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.clear-cart-btn {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}

.clear-cart-btn:hover {
    background-color: #d32f2f;
}

.checkout-btn {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}

.checkout-btn:hover {
    background-color: #43a047;
}

.product-image {
    width: 50px; /* Adjust the width as per your preference */
    height: 50px; /* Adjust the height as per your preference */
    margin-right: 10px; /* Adjust the margin as per your preference */
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Adjust the object-fit property as per your preference */
    border-radius: 5px; /* Adjust the border-radius as per your preference */
}

</style>
