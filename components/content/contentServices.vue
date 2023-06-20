<template>
    <section class="contentServices">

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

    </section>
</template>

<style lang="scss" scoped>
section {
    border: 1px solid red;
}

.contentServices {
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
            width: 80%;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 22px;
            color: $subtitleColor;
            text-align: center;
        }



    }
}
</style>