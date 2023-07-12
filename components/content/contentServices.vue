<template>
    <section class="content mb-5" id="ComoFunciona">

        <div class="titleWork">
            <div class="titleContent">
                <h3 class="fs-5">Nossos serviços</h3>

                <h2 class="fs-4">Como Funciona</h2>
            </div>

            <span class="fs-5 word-break">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
            </span>
        </div>

        <div class="video">
            <img class="img-fluid" src="../../assets/img/Video.svg" alt="video sobre PreventCell">
        </div>

        <div class="security">
            <div class="security_description">
                <h2 class="fs-5">Nós aumentamos a segurança de seus dispositivos móveis</h2>

                <span class="">
                    Ao emitir um alerta, o dispositivo é imediatamente bloqueado para acesso às suas contas impedindo
                    redefinição de senhas e golpes bancários.
                </span>
            </div>


            <div class="gridModelsMobile">
                <div class="ios">
                    <img src="~assets/img/ios.svg" alt="modelo ios">

                    <div class="body">
                        <span class="models_header">iOS</span>

                        <div class="models_content word-break">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                        </div>
                    </div>
                </div>
                <div class="android">
                    <img src="~assets/img/android.svg" alt="modelo android">

                    <div class="body">
                        <span class="models_header">Android</span>

                        <div class="models_content word-break">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
.content {
    gap: 5rem;

    .titleWork {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        width: 100%;
        height: 100%;

        .titleContent {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 18px;
            width: 100%;
            height: 92px;

            h2 {
                font-style: normal;
                font-weight: 700;
                line-height: 35px;
                text-transform: uppercase;

            }

            h3 {
                font-style: normal;
                font-weight: 400;
                line-height: 26px;
                font-variant: small-caps;

            }

        }

        span,
        h2,
        h3 {
            color: white;
        }

        span {
            width: 65%;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 22px;
            color: $subtitleColor;
            text-align: center;
        }



    }

    .video {
        opacity: 0.7;
        border-radius: 10px;
        // margin-top: 2rem;
    }

    .security {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 81px;

        .security_description {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 32px;
            width: 100%;
            height: auto;

            h2 {
                width: 50%;
                color: $btnOutline;
                font-style: normal;
                font-weight: 600;
                line-height: 26px;
                text-transform: uppercase;
                text-align: center;
            }

            span {
                width: 60%;
                color: white;
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 22px;
                text-align: center;
            }
        }

        .gridModelsMobile {
            display: flex;
            flex-wrap: wrap;
            //grid-template-columns: repeat(2, 405px);
            align-items: center;
            justify-content: center;
            gap: 15px;
            width: 100%;
            height: auto;
            margin: 0;

            .ios {
                display: flex;
                flex: 1 2 50%;
                align-items: flex-end;
                gap: 32px;
                background-color: $modelsMobile;
                border-radius: 8px;
                padding: 48px;
                max-width: 405px;
            }

            .android {
                display: flex;
                flex: 1 2 50%;
                gap: 32px;
                background-color: $modelsMobile;
                border-radius: 8px;
                padding: 48px;
                max-width: 405px;


            }

            .body {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 0px 6px 0px 0px;
                gap: 16px;

                .models_header {
                    color: $btnOutline;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 22px;
                }

                .models_content {
                    width: 100%;
                    color: $subtitleColor;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14.5015px;
                    line-height: 18px;
                }
            }
        }
    }
}

@media(max-width: 600px) {
    .content {
        padding: 0;

        &>.titleWork {
            gap: 24px;
            padding: 0 1rem;

            &>span {
                width: 100%;
                font-size: 16px;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.035px;
                text-align: start;
                padding: 0 .75rem;

                &.word-break {
                    word-break: break-word;
                    word-wrap: break-word;
                }
            }

            &>.titleContent {
                gap: 8px;
                height: auto;



                &>h3 {
                    color: rgba(255, 255, 255, 0.70);
                    font-size: 18px;
                    font-weight: 500;
                    letter-spacing: 0.035px;
                    font-variant: normal;
                }

                &>h2 {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: normal;
                    letter-spacing: 0.15px;
                }
            }
        }

        &>.security {
            gap: 56px;
            padding: 0 16px;

            &>.security_description {
                &>h2 {
                    width: 100%;
                    font-size: 18px;
                    letter-spacing: 1.1px;
                }

                &>span {
                    width: 100%;
                    color: rgba(255, 255, 255, 0.70);
                    font-size: 16px;
                    letter-spacing: 0.154px;
                    text-align: start;
                }
            }

            &>.gridModelsMobile {
                &>.ios {
                    padding: 42.43px;
                    align-items: center;
                    gap: 28px;

                    &>img {
                        width: 63.644px;
                        height: 63.644px;
                    }

                    &>.body {
                        .models_content {
                            color: rgba(255, 255, 255, 0.70);
                            font-size: 12px;
                            font-weight: 500;
                            letter-spacing: 0.354px;
                        }
                    }
                }

                &>.android {
                    padding: 42.43px;
                    align-items: center;
                    gap: 28px;

                    &>img {
                        width: 63.644px;
                        height: 63.644px;
                    }

                    &>.body {
                        .models_content {
                            color: rgba(255, 255, 255, 0.70);
                            font-size: 12px;
                            font-weight: 500;
                            letter-spacing: 0.354px;
                        }
                    }
                }
            }
        }
    }
}
</style>