<template>
    <div id="modalProtect" class="modal">
        <section class="modal-content" :class="typeModal">

            <div class="modal-close">
                <button type="button" name="close" class="btn-close-modal" @click="$emit('close-modal', false)">
                    <img src="~/assets/img/close-menu-mobile-1.svg" alt="sair">
                </button>
                <button type="button" name="close" class="btn-close" @click="$emit('close-modal', false)">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.9844 1.42188L8.40625 7L13.9844 12.5781L12.5781 13.9844L7 8.40625L1.42188 13.9844L0.015625 12.5781L5.59375 7L0.015625 1.42188L1.42188 0.015625L7 5.59375L12.5781 0.015625L13.9844 1.42188Z"
                            fill="#6E6E6E" />
                    </svg>
                </button>
            </div>

            <div class="content-padding">

                <div class="modal-header mb-4">
                    <slot name="header"></slot>

                </div>

                <div class="body">
                    <form action="post" @submit.prevent="$emit('form-action', form)" ref="form" class="mb-2"
                        v-if="!actionBtn">
                        <slot name="body"></slot>

                        <div class="btnBody" v-if="!actionBtn">
                            <LazyIconsSpinner v-if="spinner" :className="className"></LazyIconsSpinner>
                            <button type="submit" class="btnModal btn-primary text-uppercase" :disabled="!checkBtnValid"> {{
                                nameBtn }}</button>
                        </div>
                    </form>

                    <slot name="body" v-else></slot>

                </div>



                <div class="modal-footer mb-4">
                    <slot name="footer"></slot>

                </div>

                <slot name="mini_footer"></slot>

            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    nameBtn: { type: String, required: true },
    actionBtn: { type: Boolean, required: true },
    typeModal: { type: String, required: true },
    checkBtnValid: { type: Boolean, default: false },
    spinner: { type: Boolean, required: true },
    className: { type: String, default: '' },

})



//define emits
defineEmits(['form-action', 'close-modal']);

//ref for empty Form
const form = ref()
</script>

<style lang="scss" scoped>
.modal {
    display: none;
    position: fixed;
    z-index: 2;
    padding: 10px 0;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100dvh;
    overflow-x: hidden;
    overflow-y: overlay;
    background-color: rgba(0, 0, 0, 0.4);


    .modal-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;
        margin: auto;
        padding: 0;
        // width: 50%;
        width: 100%;
        max-width: 694px;
        height: 746px;

        border-radius: 8px;
        background-color: $modelsMobile;

        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);

        -webkit-animation-name: animatetop;
        -webkit-animation-duration: 1s;
        animation-name: animatetop;
        animation-duration: 1s;

        .modal-close {
            display: flex;
            width: 100%;
            height: 52.56px;
            padding: 24px 64px 14.56px 12px;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;

            button {
                background: transparent;
                color: #6E6E6E;
                text-align: center;
                font-size: 24px;

                cursor: pointer;

                &:nth-child(1) {
                    display: none;
                }
            }
        }

        .content-padding {
            padding: 0 64px 32px 64px;

        }

        .modal-header {
            display: flex;
        }

        .body {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .btnBody {
            margin-top: 24px;
        }

        .btnModal {
            width: 100%;
            font-family: Inter-Medium;
            font-weight: 500;
            line-height: 27.134px;
        }

        .modal-footer {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

    }

    @-webkit-keyframes animatetop {
        from {
            top: 0;
            opacity: 0
        }

        to {
            top: 0;
            opacity: 1
        }
    }

    @keyframes animatetop {
        from {
            top: -10px;
            opacity: 0
        }

        to {
            top: 0;
            opacity: 1
        }
    }
}

.login-content {
    height: 594px !important;
}

.confirmAccount {
    max-width: 690px !important;
    height: 634px !important;
}

@media screen and (max-width: 600px) {
    .modal {
        padding-top: 0px;

        .modal-content {
            height: 100dvh !important;

            .modal-close {
                flex-direction: row;
                justify-content: space-between;
                padding: 25px 50px 14.56px 30px;
                height: auto;

                button {
                    align-self: center;
                }

                .btn-close-modal {
                    display: flex !important;
                    font-size: 40px;
                    font-weight: 400;
                }
            }

            .content-padding {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
            }
        }

    }
}
</style>