<template>
    <div class="blur">
        <div class="background_img">
            <header>
                <!-- <div class="navigation-menu"> -->
                <a class="logo fs-4">PreventCell</a>

                <nav class="navigation" :class="{ 'open': activeMenu }">
                    <button id="btn-mobile" type="button" @click="changeActive">
                        Menu
                        <span id="hamburger"></span>
                    </button>
                    <ul class="menu">
                        <button type="button" @click.prevent="activeMenu = !activeMenu" class="closeMenu">
                            <img src="~assets/img/close-menu-mobile.svg" alt="close menu" />
                        </button>
                        <li class="item fs-6">
                            <!-- <a href="/#ComoFunciona">Como Funciona</a> -->
                            <a href="">Minha Conta</a>
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
                            <NuxtLink :to="{ path: '/', hash: '#Contato' }">Contato</NuxtLink>

                        </li>


                    </ul>
                    <button class="btn-login fs-6" type="button" @click.prevent="$emit('open-modal-login', true)">Minha
                        Conta</button>
                </nav>


                <!-- </div> -->

            </header>

            <div class="description">
                <div class="text">
                    <h1 class="title fs-2">
                        Proteção reforçada para seus acessos
                    </h1>

                    <h5 class="subtitle fs-5">
                        Previna-se de golpes e acessos indesejados com o bloqueio imediato em caso de roubo ou perda de seus
                        dispositivos
                    </h5>
                </div>

                <div class="btn-protect">
                    <button type="button" class="btn-primary" @click="$emit('open-btn', true)">
                        Quero me Proteger
                    </button>

                </div>

                <!-- <div class="aboutMore">
                    <a href="#">
                        Saiba mais
                        <LazyIconsSetUpIcons></LazyIconsSetUpIcons>
                    </a>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const activeMenu = ref<boolean>(false);

//functions
const changeActive = () => {
    !activeMenu.value ? activeMenu.value = true : activeMenu.value = false;
}
</script>

<style lang="scss" scoped>
.closeMenu {
    display: none;

}

.blur {
    width: 100%;
    height: 100%;
    background: rgba(0, 4, 3, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(1px);

    .background_img {
        background-image: url('../../assets/img/background-prevent-cell.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100vh;
        //height: 50rem;
        backdrop-filter: blur(1px);

    }

}

header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem;
    width: 100%;
    height: 100px;
    font-size: 1.5rem;
    line-height: 27px;

    .logo {
        color: white;
        line-height: 27px;
        font-weight: 500;
    }

    .navigation {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 40px;

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

                &:nth-child(1) {
                    display: none;
                }

                a {
                    text-decoration: none;
                    color: #FBFBFB;

                    &:hover {
                        text-decoration: underline;
                        text-underline-offset: 3px;

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
                background-color: rgba(244, 197, 39, 0.05);
                // box-shadow: 1px 1px $btnOutline;
            }
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

.description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 27px;
    width: 100%;
    height: 44rem;
    color: #FFFFFF;
    padding: 0 6rem;

    .text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        gap: 27px;
        margin-bottom: 2.5rem;

        h1.title {
            width: 50%;
            font-style: normal;
            font-weight: 800;
            line-height: 53px;
        }

        h5.subtitle {
            width: calc(55% - 100px);
            font-size: 20px;
            line-height: 22px;
            font-style: normal;
            font-weight: 400;
            color: $subtitleColor;

        }
    }

    .btn-protect {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        margin-right: auto;
        gap: 10px;
        width: 100%;
        height: 100%;

        .btn-primary {
            font-family: Inter-Medium;
            font-weight: 500;
            line-height: 27.134px;
            color: black;

        }



    }


}

#btn-mobile {
    display: none;
}

@media (max-width: 600px) {



    #btn-mobile {
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
            content: '';
            display: block;
            width: 20px;
            height: 2px;
            background: currentColor;
            margin-top: 5px;
            transition: 0.3s;
            position: relative;
        }
    }

    .btn-login {
        display: none !important;
    }

    header {
        padding: 16px;

        .navigation {
            margin-left: auto;

            &.open {
                .menu {

                    height: 390px;
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
                animation: .5s;
                z-index: 9999;
                height: 0;
                visibility: hidden;
                overflow-y: hidden;

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

    }

    .description {
        padding: 0 43px 0 16px;
        height: 100% !important;

        &>.text {
            &>h1 {
                width: 100% !important;
                font-size: 32px;
                font-weight: 700 !important;
                line-height: 35px !important;
                letter-spacing: 0.25px;
            }

            &>h5 {
                width: 100% !important;
            }
        }

        &>.btn-protect {
            justify-content: center;
        }

    }
}
</style>