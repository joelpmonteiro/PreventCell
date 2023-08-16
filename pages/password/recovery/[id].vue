<template>
    <main>
        <section class="mail">
            <div class="recovery">
                <img src="~/assets/img/recovery.svg" alt="icon mail">
                <h2>Esqueceu a senha?</h2>

                <div class="recovery-title">
                    <span class="title">Digite o e-mail cadastrado</span>
                    <span class="subtitle">Não se preocupe, enviaremos um e-mail com as instruções</span>

                </div>
            </div>

            <div class="body">
                <form action="post" @submit.prevent="">
                    <div class="form-group">
                        <div class="group">
                            <input type="text" name="recovery">
                        </div>
                    </div>

                    <button type="button" class="btn-secondary text-uppercase">Redefinir Senha</button>
                </form>

                <!-- <a href="">
                    voltar ao login
                </a> -->
            </div>

        </section>
    </main>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'custom-layout',
});

</script>

<style lang="scss">
// :root {
//     --background-body: #E8E8E8 !important;
// }
</style>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: calc(70vh - 88px);
    margin: 0 auto 30px;

    // padding: 40px 0;

    &>.mail {
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 600px;
        height: auto;
        background-color: white;
        padding: 90px 100px;

        >.recovery {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            height: 100%;

            h2 {
                color: black;
                font-size: 24px;
                font-weight: 600;
                line-height: 36px;
                /* 36px */
            }

            .recovery-title {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 4px;
                width: 100%;
                padding-right: 10px;

                .title {
                    color: black;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    /* 24px */
                    letter-spacing: 0.5px;
                }

                .subtitle {
                    color: rgba(0, 0, 0, 0.60);
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 21px;
                    /* 21px */
                    letter-spacing: 0.035px;
                }
            }

        }

        .body {
            display: flex;
            padding-bottom: 24px;
            width: 100%;

            form {
                display: flex;
                flex-direction: column;
                gap: 28px;
                width: 100%;

                .form-group {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 8px;
                    width: 100%;
                    height: auto;

                    .group {
                        width: 100%;

                        input {
                            width: 100%;
                            flex: 1;
                            height: 48px;
                            padding: 0 12px;
                            border-radius: 4px;
                            border: 0.75px solid $subtitleColor;
                            background: white;

                            &:focus {
                                outline: none;
                            }

                            &:focus-visible {
                                outline: 2px solid $subtitleColor;
                            }
                        }
                    }


                }
            }

            .btn-primary {
                height: 41px;
                padding: 10px 20px;
                color: $inputChecked;
                font-size: 14px;
                font-weight: 600;
                line-height: 21px;
                letter-spacing: 1.25px;
            }
        }

        .footer {
            margin-bottom: 40px;
        }
    }
}

@media screen and (max-width: 600px) {
    main {
        &>.mail {
            padding: 50px 50px;
        }
    }
}
</style>