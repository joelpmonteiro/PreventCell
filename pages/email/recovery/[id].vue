<template>
    <main>
        <section class="mail">
            <div class="field-mail">
                <img src="~/assets/img/recovery.svg" alt="icon recovery mail">
                <h1>Redefinição de senha</h1>
                <span>Clique no botão abaixo para criar uma nova senha </span>
                <span>Se não foi você que solicitou a redefinição, desconsidere.</span>
            </div>

            <div class="body">
                <button type="submit" class="btn-primary text-uppercase">Redefinir senha</button>
            </div>

            <div class="footer">
                <span>Esse link é válido por 24h</span>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});

onMounted(() => {
    // $swal.fire({
    //     title: 'Seus acessos estão protegidos!',
    //     html: `<span class='font-swal'>O incidente <strong class=''>#2345</strong> foi criado com sucesso!</span>  <br/><br/>
    //               <span class='font-swal'>Não se preocupe. A partir de agora suas contas não poderão ser acessadas por este aparelho</span>`,
    //     icon: 'success',
    //     // showCancelButton: true,
    //     confirmButtonColor: '#1c810f',
    //     // cancelButtonColor: '#d33',
    //     // confirmButtonText: 'Yes, delete it!',
    // })
})

</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: calc(70vh - 105px);
    margin: 0 auto;
    padding: 40px 0;

    &>.mail {
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 600px;
        height: auto;
        background-color: white;
        padding: 24px 20px;

        >.field-mail {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            min-width: 561px;
            height: 100%;
            padding: 32px 26px 32px;
            border: 1px solid $colorTextPartners;

            h1 {
                color: black;
                font-size: 32px;
                font-weight: 700;
                line-height: 38.4px;
                letter-spacing: 0.25px;
            }

        }

        .body {
            display: flex;
            padding-bottom: 24px;

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
            width: 100%;

            >.field-mail {
                width: 100%;
                min-width: 100%;
            }
        }
    }
}
</style>