<template>
    <section class="content mb-7">
        <div class="partners-flex">
            <h3 class="fs-5">Nossos parceiros</h3>


            <div class="partners-logo">
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.svg" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.svg" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.svg" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.svg" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.svg" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.svg" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.svg" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.content {
    gap: 3.25rem;

    .partners-flex {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 51px;
        width: 100%;

        h3 {
            font-style: normal;
            font-weight: 400;
            line-height: 26px;
            font-variant: small-caps;
            color: $colorTextPartners;

        }

        .partners-logo {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 88px;
            row-gap: 64px;
            width: 70%;
            height: 100%;

            .partners-item {
                display: flex;
                align-items: center;
                gap: 18px;

                span {
                    color: $colorTextLogotipo;
                }
            }
        }


    }
}

@media (max-width: 600px) {
    .content {

        .partners-flex {
            gap: 32px;

            &>h3 {
                color: rgba(255, 255, 255, 0.70);
                font-weight: 500;
                font-size: 18px;
                letter-spacing: 0.035px;
                font-variant: normal;
            }

            .partners-logo {
                width: 100%;
                gap: 24px;
                row-gap: 32px;

                .partners-item {
                    gap: 13px;

                    img {
                        width: 50px;
                        height: 50px;
                    }

                    span {
                        color: $colorInputText;
                        font-size: 14.4px;
                        font-weight: 500;
                        letter-spacing: 0.72px;
                    }
                }
            }
        }
    }
}
</style>