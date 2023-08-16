<template>
    <div class="content-footer">
        <ul>
            <li>
                <a href="https://www.instagram.com/">
                    <img src="~/assets/img/instagram-white.svg" alt="instagram">
                </a>

            </li>
            <li>
                <a href="https://www.facebook.com/">
                    <img src="~/assets/img/facebook-white.svg" alt="facebook">
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/">
                    <img src="~/assets/img/linkedin-white.svg" alt="linkedin">
                </a>
            </li>
        </ul>

        <span>Descadastrar-se</span>

        <div class="politics">
            <a>
                Política de privacidade
            </a>
            <span>e</span>
            <a href="">
                Termos de uso
            </a>
        </div>

        <div class="copy">
            <div>
                <span>2023 Preventcell</span>
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
    gap: 35px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        width: 100%;
        height: auto;

        li {}
    }

    span {
        color: white;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        /* 24px */
        letter-spacing: 0.5px;
    }

    .politics {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: .5rem;
        width: 100%;
        height: auto;

        a {
            color: #FFF;
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            /* 24px */
            letter-spacing: 0.5px;
            text-decoration-line: underline;
            text-underline-position: under;
            cursor: pointer;

            &:hover {
                color: $colorInputText;
            }
        }

    }

    .copy {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: auto;
    }
}
</style>