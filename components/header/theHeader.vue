<template>
    <div class="blur">
        <div class="background_img">
            <header>
                <div class="navigation-menu">
                    <a class="logo fs-4">PreventCell</a>

                    <nav class="navigation">
                        <ul class="menu">
                            <li class="item fs-6">
                                <a href="">Home</a>
                            </li>
                            <li class="item fs-6">
                                <a href="">Como Funciona</a>
                            </li>
                            <li class="item fs-6">
                                <a href="">Sobre Nós</a>
                            </li>
                            <li class="item fs-6">
                                <a href="">Contato</a>
                            </li>


                        </ul>
                        <button class="btn-login fs-6" type="button">Minha Conta</button>
                    </nav>


                </div>

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
                    <button type="button" class="btn-primary">
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

<script lang="ts">
</script>

<style lang="scss" scoped>
.blur {
    width: 100%;
    height: 100%;
    background: rgba(0, 4, 3, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);

    .background_img {
        background-image: url('../../assets/img/Hero.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        width: 100%;
        height: 50rem;
        backdrop-filter: blur(10px);

    }

}

header {
    width: 100%;
    height: 100px;
    border: 1px solid red;
    font-size: 1.5rem;
    line-height: 27px;
    padding: 1.25rem 0;

    .logo {
        color: white;
        line-height: 27px;
        font-weight: 500;
    }

    .navigation-menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 3rem 0 5rem;
        height: 100%;

        nav.navigation {
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

                    a {
                        text-decoration: none;
                        color: #FBFBFB;

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
                color: white;
                border: 0.75px solid $btnOutline;
                box-shadow: #FBFBFB;
                border-radius: 4px;
                cursor: pointer;

                &:hover {
                    background-color: $btnOutline;
                    // box-shadow: 2px 2px $btnOutline;
                    color: black;
                }
            }
        }
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
            background: linear-gradient(180deg, #F4CB2B 0%, #F4A513 100%);
            border-radius: 4px;
            padding: 12px 16px;
            width: 206px;
            height: 52px;
            cursor: pointer;
        }
    }

    // .aboutMore {
    //     display: flex;
    //     flex-direction: row;
    //     align-items: flex-end;
    //     justify-content: center;
    //     padding: 0px 16px;
    //     margin-top: auto;
    //     width: 100%;
    //     height: auto;
    //     margin: 1rem 0;

    //     a {
    //         display: flex;
    //         align-items: center;
    //         justify-content: center;
    //         gap: 16px;
    //         letter-spacing: 0.05em;
    //         color: #F4C527;
    //         text-decoration: none;
    //         text-align: center;
    //         width: 179px;
    //         height: 48px;
    //     }

    // }
}
</style>