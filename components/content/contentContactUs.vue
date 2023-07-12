<template>
    <section class="content">
        <div class="cardContact">
            <div class="cardCallMe">
                <div class="doubts">
                    <h3 class="fs-5">Ainda com dúvidas?</h3>
                    <h1 class="fs-4 text-uppercase">Fale Conosco</h1>
                </div>

                <ul class="nav-call-me">
                    <li>
                        <a href>
                            <img src="../../assets/img/IconCell.svg" alt="" />
                            (XX) 9XXXX-XXXX
                        </a>
                    </li>
                    <li>
                        <a href>
                            <img src="../../assets/img/cellphoneIcon.svg" alt="" />
                            (XX) 9XXXX-XXXX
                        </a>
                    </li>
                    <li>
                        <a href>
                            <img src="../../assets/img/emailIcon.svg" alt="" />
                            contato@email.com.br
                        </a>
                    </li>
                </ul>
            </div>

            <div class="cardForm">
                <form action="post">
                    <div class="input-form">
                        <input type="text" value="" placeholder="Nome*" />
                    </div>

                    <div class="input-form">
                        <input type="text" value="" placeholder="E-mail*" />
                    </div>

                    <div class="input-form">
                        <textarea id="message" name="w3review" rows="4" placeholder="Mensagem*"></textarea>
                    </div>

                    <div class="btn-save mt-3">
                        <button type="submit" class="btn-primary text-uppercase fs-6" name="saveform">Enviar
                            Mensagem</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script></script>

<style lang="scss" scoped>
.cardContact {
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    width: 826px;
    height: 361px;
    border-radius: 8px;
    padding: 38px;
    background-color: $modelsMobile;

    .cardCallMe {
        display: flex;
        flex-direction: column;
        gap: 37px;
        width: 100%;
        height: 100%;

        .doubts {
            display: flex;
            flex-direction: column;
            gap: 10px;

            h3 {
                // font-variant: small-caps;
                line-height: 26.4px;
                color: white;
            }

            h1 {
                font-weight: 700;
                line-height: 35.2px;
                color: $btnOutline;
            }
        }

        .nav-call-me {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 16px;

            li {
                list-style: none;

                a {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                    justify-content: center;
                    color: #e0e0e0;
                    color: $subtitleColor;
                    text-decoration: none;

                    &:hover {
                        color: $colorTextPartners;
                    }
                }
            }
        }
    }

    .cardForm>form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        width: 365px;
        height: 100%;

        .input-form {
            display: flex;
            width: 100%;
            height: auto;
            flex-shrink: 0;

            input {
                height: 48px;

                &:focus-visible {
                    outline: none;
                }

            }

            textarea {
                height: 97px;
            }

            input,
            textarea {
                width: 100%;
                padding: 0px 66px 0px 16px;
                color: $colorInputText;
                font-weight: 500;
                line-height: 48px;
                border-radius: 4px;
                border: 0.75px solid $bgBorderInput;
                background: $bgInputText;
            }

        }

        .btn-save {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            height: auto;

            .btn-primary {
                font-family: Inter-Medium;
                padding: 10px 16px;
                color: #171615;
                text-align: center;
                font-weight: 500;
                line-height: 27.134px;
            }
        }

    }
}

@media (max-width: 600px) {
    .content {
        margin: 6rem 0 auto;
        padding: 0;

        .cardContact {
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 41px 1rem;

            .cardCallMe {
                align-items: center;
            }

            .cardForm {
                width: 100%;

                &>form {
                    width: 100%;
                    height: auto;

                    &>.btn-save {
                        width: 222px;

                        &>.btn-primary {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>
