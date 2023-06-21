<template>
    <section class="faq" style="color: white;">
        <div class="faq-title">
            <h3 class="fs-5">faq</h3>
            <h1 class="fs-4">Perguntas Frequentes</h1>
        </div>

        <div class="faq-description">
            <div class="faq-column"></div>
            <div class="faq-column"></div>


        </div>
    </section>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
.faq {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    width: 100%;
    height: 100%;
    padding: 0 6rem;

    .faq-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        width: 100%;
        height: 100%;
        color: white;


        h3,
        h1 {
            font-style: normal;
            text-transform: uppercase;
        }

        h3 {
            font-weight: 400;
            line-height: 26px;
            font-variant: small-caps;

        }

        h1 {
            font-weight: 700;
            line-height: 35px;

        }
    }
}
</style>