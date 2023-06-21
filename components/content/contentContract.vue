<template>
    <section class="callme mb-7">

        <div class="callme-content">
            <img src="~assets/img/call.svg" alt="ligue para PreventCell">

            <div class="phone fs-001">
                <span>(12) 3456-7890</span>
            </div>

            <span class="subtitle">
                Ao emitir um alerta, o dispositivo é imediatamente bloqueado para acesso às suas contas impedindo
                redefinição de senhas e golpes bancários.
            </span>
        </div>

    </section>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
.callme {
    width: 100%;
    height: 400px;
    background-image: url('../../assets/img/contact.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .callme-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 24px;
        width: 100%;
        height: 100%;
        z-index: 1;

        .phone {
            font-style: normal;
            font-weight: 600;
            // line-height: 77px;
            letter-spacing: 0.05em;
            color: $btnOutline;
        }

        .subtitle {
            width: 60%;
            color: white;
            line-height: 19px;
            text-align: center;

        }
    }

}

.fs-001 {
    font-size: 4rem;
    line-height: 4.85rem;
}
</style>