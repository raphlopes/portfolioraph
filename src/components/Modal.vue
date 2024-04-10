<template>

    <transition name="modal-fade" appear>
        <div v-if="toDisplay" class="modal-backdrop d-flex flex-column justify-content-center text-center align-items-center" @click.self="close()" :class="{'lowBackdrop' : lowBackdrop}">
            <transition appear name="modal-slide" v-if="!isMobile && notDestroyed">
                <div class="modal-custom modal-custom-usable mx-auto border-radius-10 modal-dialog-scrollable"
                     :class="{'modal-custom-fixed-width' : fixedWidth, 'bg-light-modal' : bgLight, 'modal-custom-large' :large, 'modal-custom-very-large' :veryLarge, 'modal-custom-medium' :medium, 'modal-custom-small' :small }"
                     role="dialog"
                     aria-labelledby="modalTitle"
                     aria-describedby="modalDescription"
                >
                    <header
                        id="modalTitle" :class="{'bg-dark-modal' : bgDark, 'bg-white' : !bgDark}"
                        :style="{'--bg-color': bgDark ? '#000000' : '#eeeeee'}" class="modal-header">

                        <slot name="header">
                            <div class="w-100 d-flex justify-content-center my-auto">

                            </div>


                        </slot>
                    </header>
                    <section
                        class="modal-body d-flex flex-column scroll-light" :class="{'p-0' : noPadding, 'bg-dark-modal' : bgDark}"
                        id="modalDescription"
                    >
                        <slot name="body">

                        </slot>
                    </section>
                    <footer
                        class="py-4"
                        id="modalFooter"
                        :class="{'bg-white shadow-new-sm' : whiteFooter, 'bg-dark-modal' : bgDark }"
                    >
                        <slot name="footer">


                        </slot>
                    </footer>
                </div>
            </transition>
            <transition appear name="modal-slide-from-bottom"  v-else-if="isMobile && notDestroyed">
                <div class="modal-custom-mobile w-100"
                     :class="{'modal-custom-fixed-height' : fixedWidth, 'bg-light-modal' : bgLight, 'bg-dark-modal' : bgDark}"
                >
                    <div class="d-flex justify-content-center w-100 mb-3 position-absolute mt-3">
                        <div style="height:0.5rem; width: 4.3rem; border-radius: 30rem" class="bg-black" @click="close">

                        </div>
                    </div>
                    <section
                        class="modal-body d-flex flex-column pb-0 pt-5 overflow-auto"
                        :style="(bigFooter?'margin-bottom: 16vh': 'margin-bottom: 10vh' )" :class="{'px-0' : noPadding, 'px-4' : !noPadding}"
                        id="modalDescriptionMobile" :key="reloadOnUpdate"
                    >

                        <slot name="header">

                        </slot>
                        <slot name="body">

                        </slot>
                    </section>
                    <footer
                        class="py-4 w-100 shadow-new-sm bg-white"
                        id="modalFooterMobile"
                        :class="{'bg-white shadow-new-sm mt-4' : whiteFooter, 'big-footer' : bigFooter, 'bg-dark-modal' : bgDark }"
                    >
                        <slot name="footer">


                        </slot>
                    </footer>
                </div>
            </transition>

        </div>
    </transition>
</template>

<script>
export default {
    name: "ModalCustom",
    props : {
        'fixedWidth' : {
            type : Boolean,
            default : false
        },
        'bgLight' : {
            type : Boolean,
            default : false
        },
        'bgDark' : {
            type : Boolean,
            default : false
        },
        'large' : {
            type : Boolean,
            default : false
        },
        'veryLarge' : {
            type : Boolean,
            default : false
        },
        'medium':{
            type : Boolean,
            default : false
        },
        'small':{
            type : Boolean,
            default : false
        },
        'whiteFooter':{
            type : Boolean,
            default : false
        },
        "toClose": {
            type : Boolean,
            default : false
        },
        "bigFooter": {
            type : Boolean,
            default : false
        },
        "toDisplay" : {

            type : Boolean,
            default : true
        },
        "lowBackdrop" : {
            type : Boolean,
            default : false
        },
        "noPadding" : {
            type : Boolean,
            default : false
        },
        "reloadOnUpdate" : {
            default: 0
        },
    },
    watch :{
        "toClose" : function (val) {
            if(val){
                this.close();
            }

        },
        "toDisplay" : function (val) {
            if(val){
                this.notDestroyed = true;
            }

        }
    },
    data() {
        return {

            isMobile: window.innerWidth < 768,
            notDestroyed : true,
        }
    },
    components : {
    },
    methods: {
        close() {
            this.notDestroyed = false;
            if(this.isMobile){
                setTimeout(() => {

                    this.$emit('close');
                }, 300);
            }else{
                this.$emit('close');
            }

        },
        escapeHandler(e) {
            if (e.key === 'Escape' && this.toDisplay) {
                this.close()

                e.preventDefault()

            }
        },
    },
    mounted() {
        this.notDestroyed = true;
        window.addEventListener('resize', () => {
            this.isMobile = window.innerWidth < 768;
        })
    },
    created() {

        document.addEventListener('keydown', this.escapeHandler);

    },
    destroyed() {

        document.removeEventListener('keydown', this.escapeHandler);
    }
}
</script>

<style lang="scss" >
.border-radius-10{
    border-radius: 10px;
}
.border-radius-20{
    border-radius: 20px;
}
.border-radius-25{
    border-radius: 25px;
}
.bg-light-modal{
    background-color: #F7F7F7!important;
}
.bg-dark-modal{
    background-color: rgb(34,34,34)!important;
}
.bg-light-dark-modal{
    background-color: rgb(53,53,53)!important;
}



.text-gris-modal{
    color: #707070!important;
}
.text-gris-modal-2{
    color : #969696!important;
}
.modal-custom-usable {

    background: #FFFFFF;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    max-width: 700px;
    .modal-content{
        border-radius: 25px;

    }

}
.modal-custom-fixed-height{
    min-height: 80%;
    max-height: 95%!important;
}
.modal-custom-mobile {
    max-height: 95%!important;

    width: 100%;
    border-radius: 25px 25px 0 0;
    position: absolute;
    bottom: 0;

    background: #FFFFFF;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    transition: height 0.3s ease-out;
    will-change: height;


    .modal-content{
        border-radius: 25px;

    }
    #modalFooterMobile{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10vh;
        button{
            border-radius: 10px!important;

        }
        button.button-white:not(.bg-success2){
            background-color: #F7F7F7!important;
        }
    }
    .big-footer{
        height: 16vh !important;

    }

}
.modal-custom-fixed-width{
    width: 700px;
}
@media (min-width: 1100px) {
    .modal-custom-fixed-width.modal-custom-very-large{
        width: 1100px;
    }
}
@media (min-width: 700px) {
    .modal-custom-fixed-width.modal-custom-very-large{
        width: 100%;
    }
}

.modal-custom-large{
    max-width: 1100px;
}
.modal-custom-very-large{
    max-width: 1100px;
}
.modal-custom-medium{
    max-width: 900px;
    min-width: 450px;
}
.modal-custom-small{
    max-width: 600px;
}
.modal-backdrop {

    width: 100%!important;
    height: 100%!important;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-backdrop.lowBackdrop{
    background-color: rgba(0, 0, 0, 0.5);
}


.modal-header,
{
    padding: 15px;
    display: flex;
    button{
        border-radius: 1px!important;

    }
    .h3,.h2{
        margin: 0;
    }
}
.modal-footer {
    padding: 15px;
    display: flex;
}

#modalFooter {

    button{
        border-radius: 10px!important;

    }
}


.modal-header {
    border-bottom: 1px solid var(--bg-color);
    justify-content: center;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}


.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .3s ease
}

.modal-slide-enter,
.modal-slide-leave-active {
    opacity: 0;
    transform: translateY(20px);

}

.modal-slide-enter-active,
.modal-slide-leave-active {
    transition: opacity 0.7s ease, transform 0.3s ease;
}
.modal-slide-from-bottom-enter,
.modal-slide-from-bottom-leave-active {
    transform: translateY(100%);

}

.modal-slide-from-bottom-enter-active,
.modal-slide-from-bottom-leave-active {
    transition: transform 0.3s ease-in-out;
}
</style>