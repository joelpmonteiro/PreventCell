<template>
    <div class="blur">
        <div class="background_img">
            <div class="backdrop"></div>
            <LazyHeaderChildhead class="header-p" :layout="'default'" :styleTypeRouter="styleTypeRouter"
                @open-child-modal="$emit('open-modal-login', true)">
            </LazyHeaderChildhead>
            <div class="description">
                <div class="text">
                    <h1 class="title fs-0">
                        Proteção reforçada para seus acessos
                    </h1>

                    <h5 class="subtitle fs-5">
                        Previna-se de golpes e acessos indesejados com o bloqueio imediato em caso de roubo ou perda de seus
                        dispositivos
                    </h5>
                </div>

                <div class="btn-protect">
                    <button type="button" class="btn-primary text-uppercase" @click="$emit('open-btn', true)">
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
const route = useRoute();

const styleTypeRouter = computed(() => {
    return route.name === 'register-id' ? { height: '96px', colorLogo: 'black', background: 'transparent' } : { height: '88px', colorLogo: 'white', background: 'rgba(7, 22, 32, 0.7)' };
})
</script>
<style lang="scss">
.backdrop {
    position: absolute;
    background-color: rgb(255 255 255 / 0.15);
    backdrop-filter: blur(1px);
    height: 100vh;
    width: 100%;
}

.blur {
    width: 100%;
    height: 100%;
    background: rgba(0, 4, 3, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .background_img {
        background-image: url('../../assets/img/background-prevent-cell.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        width: 100%;
        height: 100dvh;
        //height: 50rem;

    }

}

.header-p {
    padding: 0 88px;
}

.description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 27px;
    width: 100%;
    height: calc(100vh - 100px);
    color: #FFFFFF;
    padding: 0 6rem;

    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: auto;
        gap: 27px;
        margin-bottom: 2.5rem;

        h1.title {
            width: 100%;
            font-style: normal;
            font-weight: 800;
            line-height: 91px;
        }

        h5.subtitle {
            width: 100%;
            font-size: 31.651px;
            line-height: 47.476px;
            font-style: normal;
            font-weight: 500;
            color: $subtitleColor;

            letter-spacing: 0.237px;

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
        height: auto;

        .btn-primary {
            font-family: Inter-Medium;
            font-weight: 500;
            line-height: 27.134px;
            color: black;

        }



    }


}

@media (max-width: 600px) {


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

@media (max-width: 1199.98px) {
    .description {
        .text {
            h1.title {
                width: 60%;

            }

            h5.subtitle {
                width: calc(68% - 100px);
            }


        }

    }
}

@media (max-width: 1399.98px) {
    .description {
        .text {
            h1.title {
                width: 90%;
                line-height: 70px;
            }

            h5.subtitle {
                width: calc(95% - 200px);
                font-size: calc(.5vw + 16px + .2rem);
                line-height: 37px;
            }


        }

    }
}

@media (min-width: 1400px) and (max-width: 1919.98px) {
    .description {
        .text {
            h1.title {
                width: calc(72vw - 115px);
                line-height: 70px;
            }

            h5.subtitle {
                width: calc(59vw - 130px);
                font-size: calc(.5vw + 16px + .2rem);
                line-height: 37px;
            }


        }

    }
}


@media (min-width: 1920px) and (max-width: 2560px) {
    .description {
        .text {
            h1.title {
                width: calc(64vw - 135px);
                line-height: 100px;
                font-family: Inter-ExtraBold;
            }

            h5.subtitle {
                width: calc(50vw - 130px);
                font-size: calc(.5vw + 16px + .2rem);
            }


        }

    }
}
</style>