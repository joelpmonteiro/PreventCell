<template>
    <section class="content mb-7">
        <div class="partners-flex">
            <h3 class="fs-5">Nossos parceiros</h3>


            <div class="partners-logo">
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.png" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.png" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.png" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.png" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.png" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.png" alt="Logo da empresa aqui">
                    <span>LogoTipo</span>
                </div>
                <div class="partners-item">
                    <img src="~assets/img/emptyLogo.png" alt="Logo da empresa aqui">
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
                gap: 5px;

                span {
                    color: $colorTextLogotipo;
                }
            }
        }


    }
}
</style>