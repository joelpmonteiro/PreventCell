<template>
    <section class="blur-callme">
        <div class="callme mb-7">

            <div class="callme-content">
                <div class="flex-group">
                    <img src="~assets/img/call.svg" alt="ligue para PreventCell">

                    <div class="phone fs-001">
                        <span>(12) 3456-7890</span>
                    </div>
                </div>
                <span class="subtitle">
                    Ao emitir um alerta, o dispositivo é imediatamente bloqueado para acesso às suas contas impedindo
                    redefinição de senhas e golpes bancários.
                </span>
            </div>

        </div>
    </section>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
.blur-callme {
    width: 100%;
    height: 100%;
    background: rgba(23, 22, 21, 0.25);
    backdrop-filter: blur(10px);

    .callme {
        width: 100%;
        height: 400px;
        background-image: url('../../assets/img/contact.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        backdrop-filter: blur(10px);


        .callme-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 24px;
            width: 100%;
            height: 100%;
            z-index: 1;

            .flex-group {
                .phone {
                    font-style: normal;
                    font-weight: 600;
                    // line-height: 77px;
                    letter-spacing: 0.05em;


                    &>span {
                        color: $btnOutline;
                    }
                }
            }


            .subtitle {
                width: 60%;
                color: white;
                line-height: 19px;
                text-align: center;

            }
        }

    }
}



.fs-001 {
    font-size: 4rem;
    line-height: 4.85rem;
}


@media (max-width: 600px) {
    .blur-callme {
        .callme {
            height: auto;
            padding: 29px 16px;

            .callme-content {
                gap: 8px;

                .flex-group {
                    display: flex;
                    align-items: center;
                    gap: 8px;

                    img {
                        width: 24px;
                        height: 24px;
                    }

                    .phone {
                        &.fs-001 {
                            font-size: 24px;
                            line-height: normal;
                            letter-spacing: 1.2px;
                        }

                        &>span {
                            color: #FFCB42 !important;
                        }
                    }
                }

                .subtitle {
                    color: $subtitleColor;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: normal;
                    letter-spacing: 1.1px;
                    width: 100%;
                }
            }
        }
    }
}
</style>