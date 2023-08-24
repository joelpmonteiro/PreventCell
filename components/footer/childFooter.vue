<template>
    <div class="content-footer">
        <div class="footer-navigation">
            <a class="logo fs-4">
                <!-- <img class="" src="../../assets/img/emptyLogo.png" alt="Logo PreventCell"> -->
                <span class="fs-5">
                    PreventCell
                </span>
            </a>

            <ul class="nav">
                <li class="item-menu">
                    <a href="" class="text-uppercase">Início</a>
                </li>
                <li class="item-menu">
                    <a href="" class="text-uppercase">Sobre Nós</a>
                </li>
                <li class="item-menu">
                    <a href="" class="text-uppercase">Nossos Parceiros</a>
                </li>
                <li class="item-menu">
                    <a href="" class="text-uppercase">Termos de Uso</a>
                </li>
                <li class="item-menu">
                    <a href="" class="text-uppercase">Lgpd</a>
                </li>
                <li class="item-menu">
                    <a href="" class="text-uppercase">Política de Privacidade</a>
                </li>
                <!-- <li class="item-menu">
                    <a href="" class="text-uppercase">Trabalhe Conosco</a>
                </li> -->
            </ul>

            <div class="media-socials">
                <a href="https://www.instagram.com/preventcell/" target="_blank" class="instagram">
                    <img class="" src="../../assets/img/instagram.svg" />
                </a>

                <a href="https://www.facebook.com/PreventCell/" target="_blank" class="facebook">
                    <img class="" src="../../assets/img/facebook.svg" />
                </a>

                <a href="https://www.linkedin.com/company/preventcell/" target="_blank" class="linkedin">
                    <img class="" src="../../assets/img/linkedin.svg" />
                </a>


            </div>
        </div>

        <hr />
        <div class="copyright">
            <div class="text-uppercase">
                <span>cnpj 12.345.678/0001-09</span>
            </div>
            <div>
                <span>Copyright</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.content-footer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;

    hr {
        width: 100%;
        background: #171615;
        height: .5px;
    }

    .footer-navigation {
        display: flex;
        gap: 7rem;
        padding: 3rem 6rem;
        width: 100%;

        height: 100%;

        .logo {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            // padding: 1rem;
            margin-left: 5rem;

            img {
                width: 95px;
                height: 95px;
            }

            span {
                font-weight: 500;
                line-height: 27.134px;
                font-family: Inter-Medium;
            }
        }

        .nav {
            display: inline-flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 32px;
            row-gap: 24px;
            width: 100%;
            height: 132px;
            flex-direction: column;

            .item-menu {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 24px;
                padding: 0px 38px 0px 0px;
                list-style: none;

                a {
                    color: $colorBackground;
                    font-size: 14px;
                    font-family: Inter;
                    line-height: 27.134px;
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }
                }
            }
        }

        .media-socials {
            display: flex;
            gap: 32px;

            img {
                width: 41.712px;
                height: 41.712px;
            }
        }
    }

}

@media (max-width: 600px) {
    footer {
        height: 665px;

        .content-footer {
            .footer-navigation {
                flex-direction: column;
                gap: 30px;
                height: auto;
                padding: 0 16px;

                .nav {
                    flex-direction: column;
                    height: 100%;
                    gap: 8px;
                    row-gap: 8px;

                    .item-menu {
                        padding: 8px 0px;
                    }
                }

                .media-socials {
                    justify-content: center;
                    padding-bottom: 40px;
                }
            }

            &>hr {
                background: #4F4F4F;

            }

            .copyright {
                flex-direction: column;
                gap: 8px;
                text-align: center;
                padding: 1.375rem 0;

                .text-uppercase {
                    &>span {
                        color: rgba(0, 0, 0, 0.87);
                        font-size: 16px;
                        letter-spacing: 0.7px;
                    }
                }

                &>div>span {
                    color: rgba(0, 0, 0, 0.87);
                    font-size: 16px;
                    letter-spacing: 0.7px;
                }
            }
        }
    }
}
</style>