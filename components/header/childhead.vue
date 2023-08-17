<template>
    <header>
        <!-- <div class="navigation-menu"> -->
        <a class="logo fs-4">PreventCell</a>

        <nav class="navigation" v-if="layout === 'default'" :class="{ open: activeMenu }">
            <button id="btn-mobile" type="button" @click="changeActive">
                <span id="hamburger"></span>
            </button>

            <ul class="menu">
                <button type="button" @click.prevent="activeMenu = !activeMenu" class="closeMenu">
                    <img src="~assets/img/close-menu-mobile.svg" alt="close menu" />
                </button>

                <li class="item fs-6" v-if="route.path === '/'">
                    <a class="myaccount" @click.prevent="$emit('open-child-modal', true)">Minha Conta</a>
                </li>

                <li class="item fs-6">
                    <!-- <a href="/#ComoFunciona">Como Funciona</a> -->
                    <NuxtLink :to="{ path: '/', hash: '#ComoFunciona' }">Como Funciona</NuxtLink>
                </li>
                <li class="item fs-6">
                    <!-- <a href="#SobreNos">Sobre Nós</a> -->
                    <NuxtLink :to="{ path: '/', hash: '#duvidas' }">Dúvidas</NuxtLink>
                </li>
                <li class="item fs-6">
                    <!-- <a href="#Contato">Contato</a> -->
                    <NuxtLink :to="{ path: '/', hash: '#contato' }">Contato</NuxtLink>
                </li>
            </ul>
            <button class="btn-login fs-6" type="button" @click.prevent="$emit('open-child-modal', true)">
                Minha Conta
            </button>
        </nav>

        <nav class="navigation-desktop navigation-mobile" v-else-if="layout !== 'custom-layout'"
            :class="{ open: activeMenu }">
            <button id="btn-mobile" type="button" @click="changeActive">
                <span id="hamburger"></span>
            </button>
            <ul class="menu">
                <button type="button" @click.prevent="activeMenu = !activeMenu" class="closeMenu">
                    <img src="~assets/img/close-menu-mobile.svg" alt="close menu" />
                </button>

                <li class="item fs-6">
                    <!-- <a href="/#ComoFunciona">Como Funciona</a> -->
                    <LazyCustomLinksPreventLinks :mobile="true" to="/dashboard/config" :title="'Configurações'"
                        :className="'linkActive'">
                    </LazyCustomLinksPreventLinks>
                </li>

                <li class="item fs-6">
                    <!-- <a href="/#ComoFunciona">Como Funciona</a> -->
                    <LazyCustomLinksPreventLinks :mobile="true" to="/dashboard/help" :title="'Ajuda'"
                        :className="'linkActive'">
                    </LazyCustomLinksPreventLinks>
                </li>

                <li class="item fs-6">
                    <!-- <a href="/#ComoFunciona">Como Funciona</a> -->
                    <LazyCustomLinksPreventLinks :mobile="true" to="" :title="'Sair'" :className="'linkActive'">
                    </LazyCustomLinksPreventLinks>
                </li>
            </ul>

            <a class="notifications">
                <img src="~/assets/img/notifications.svg" alt="notificação" />
            </a>

            <a class="icon-user">
                <img src="~/assets/img/welcome-user.svg" alt="icon" />
                <span>{{ customerName }}</span>
            </a>

            <div class="logout">
                <hr />
                <button class="btn-login exit fs-6" type="button" @click.prevent="close">
                    Sair
                </button>
            </div>

        </nav>

        <!-- </div> -->
    </header>
</template>

<script lang="ts" setup>
import { useStore } from "~/store/auth";

//route
const route = useRoute();
const router = useRouter()
defineProps({
    layout: { type: String, required: true, default: "default" },
    styleTypeRouter: { type: Object, required: true, default: "88px" },
});
const activeMenu = ref<boolean>(false);

//pinia store
const { actionAuthen, getUserLogged, getUserCustomer, closeDashboard } = useStore();

//computed
const tokenValid = computed(() => {
    return useCookie('token').value ? true : false;
})

const customerName = computed(() => getUserCustomer?.customerName)
// ending computet

//functions
const changeActive = () => {
    !activeMenu.value ? (activeMenu.value = true) : (activeMenu.value = false);
}

const close = () => {
    // sessionStorage.clear()
    // localStorage.clear();
    // useCookie('customer').value = null;
    // useCookie('token').value = null;
    // useCookie('email').value = null;
    // useCookie('cpf').value = null;
    // setTimeout(() => {
    //     router.go(-1)
    // }, 800)
    closeDashboard(router)

}


</script>

<style lang="scss" scoped>
.closeMenu {
    display: none;
}

.myaccount {
    display: none;
    cursor: pointer;

}

header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: v-bind("styleTypeRouter.height");
    font-size: 1.5rem;
    line-height: 27px;
    padding: 0 88px;
    background: v-bind("styleTypeRouter.background");

    .logo {
        color: v-bind("styleTypeRouter.colorLogo");
        line-height: 27px;
        font-weight: 500;
    }

    .menu {
        display: none;
    }

    .navigation-desktop {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;

        .logout {
            display: flex;
            gap: 20px;
            align-items: center;

            hr {
                width: 1px;
                height: 57px;
                margin: 0 5px;
                border: 1px solid #4B4B4B;
            }

            .exit {
                width: 76px;
                height: 41px;
            }
        }

        .notifications {
            background: transparent;
            color: transparent;
            padding: 0 12px;
            cursor: pointer;

            img {
                width: 24px;
                height: 24px;
            }

            &:hover {
                img {
                    content: url("~/assets/img/notifi-hover.svg");
                    background-size: cover;
                    width: 24px;
                    height: 24px;
                }
            }
        }

        .icon-user {
            display: flex;
            align-items: center;
            gap: 13px;
            width: 100%;
            height: auto;
            cursor: pointer;

            span {
                font-size: 14px;
                font-weight: 600;
                line-height: normal;
                letter-spacing: 0.8px;
                color: white;
            }
        }
    }

    .navigation {
        display: flex;
        gap: 40px;
        align-items: center;

        .menu {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 0;
            gap: 24px;
            flex-grow: 0;

            li.item {
                position: relative;
                list-style: none;
                font-weight: 400;
                line-height: 27px;
                letter-spacing: 0.1em;
                text-transform: uppercase;

                // &:nth-child(2) {
                //     display: none;
                // }

                a {
                    text-decoration: none;
                    color: #fbfbfb;

                    &:hover {
                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }
                }
            }
        }


    }

    .btn-login {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 14px;
        gap: 10px;
        width: 147px;
        height: 48px;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
        background: transparent;
        color: $btnOutline;
        border: 0.75px solid $btnOutline;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: rgba(244, 197, 39, 0.10);
            // box-shadow: 1px 1px $btnOutline;
        }
    }

    .navigation-menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 3rem 0 5rem;
        height: 100%;
    }
}

#btn-mobile {
    display: none;
}

@media (max-width: 600px) {
    .logout {
        display: none !important;
    }

    .myaccount {
        display: flex;
    }

    header {
        height: 100px;
        padding: 20px;

        .navigation,
        .navigation-desktop {
            margin-left: auto;

            .menu {
                display: flex;
            }

            &>#btn-mobile {
                display: flex;
                align-items: center;
                padding: 0.5rem 1rem;
                font-size: 1rem;
                border: none;
                background: none;
                cursor: pointer;
                color: white;
                gap: 0.5rem;

                #hamburger {
                    border-top: 2px solid;
                    width: 20px;
                }

                #hamburger::after,
                #hamburger::before {
                    content: "";
                    display: block;
                    width: 20px;
                    height: 2px;
                    background: currentColor;
                    margin-top: 5px;
                    transition: 0.3s;
                    position: relative;
                }
            }

            &>.btn-login {
                display: none !important;
            }

            &.open {
                .menu {
                    height: 420px;
                    visibility: visible;
                    overflow-y: hidden;
                    padding: 24px 16px;
                }
            }

            .menu {
                display: inline-flex;
                flex-direction: column;
                position: fixed;
                width: 100%;
                top: 0;
                right: 0;
                left: 0;
                padding: 0px 16px;
                background: $modelsMobile;
                transition: 0.5s;
                animation-delay: 1s;
                animation: 0.5s;
                z-index: 9999;
                height: 0;
                visibility: hidden;
                overflow-y: hidden;

                li.item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 0;
                    border-bottom: 1px solid #4f4f4f;
                    width: 100%;

                    a {
                        text-decoration: none;
                        color: #fff;
                        text-align: center;
                        font-family: Inter;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 44px;
                        /* 314.286% */
                        letter-spacing: 1.25px;

                        &:hover {
                            color: $colorTextPrimary;
                        }
                    }

                    &:nth-child(5) {
                        border-bottom: none;
                    }
                }

                .closeMenu {
                    display: flex !important;
                    align-self: flex-end;
                    background: transparent;
                    padding: 12px;
                    cursor: pointer;

                    &>img {
                        width: 16px;
                        height: 16px;
                    }
                }
            }
        }

        .navigation-desktop {
            .notifications {
                display: none;
            }

            .icon-user {
                display: none;
            }
        }
    }
}
</style>
