<template >
    <LazyBaseModal :nameBtn="'Criar Conta'" :actionBtn="sucessAccount" :typeModal="'confirmAccount'"
        :class="[openModal ? classModal : '']" @close-modal="$emit('close-modal', false)">
        <!-- Criar conta-->
        <template v-slot:header v-if="!sucessAccount">
            <div class="welcome">
                <h1 class="fs-4 text-uppercase">Bem-Vindo</h1>
                <span>Registre-se para criar uma conta e proteger seus acessos</span>
            </div>
        </template>

        <!-- Confirmar Conta-->
        <template v-slot:header v-else>
            <div class="welcome">
                <h1 class="fs-4 text-uppercase">Verifique seu e-mail</h1>
                <span>Enviamos um e-mail com as instruções para verificar sua conta. Se não encontrar na caixa de entrada,
                    verifique a caixa de spam.</span>
            </div>
        </template>

        <!-- Criar conta-->
        <template v-slot:body v-if="!sucessAccount">
            <div class="card-body">
                <div class="form-input">
                    <input type="text" placeholder="Email*">
                </div>

                <div class="form-input">
                    <input type="text" placeholder="CPF*">
                </div>

                <div class="form-group">
                    <input type="text" placeholder="Senha*">
                    <span>Deve conter no mínimo 6 dígitos</span>

                    <div class="forgotPassword">
                        <a href=""><span class="text-uppercase">Esqueceu a senha?</span></a>
                    </div>
                </div>


            </div>
            <div class="form-check">
                <div class="check">
                    <input type="checkbox" name="validForm" id="validForm" />
                </div>

                <span>Li e aceito os Termos de Uso e Política de Privacidade</span>
            </div>

        </template>

        <!-- Confirmar Conta-->
        <template v-slot:body v-else>
            <div class="card-body align-items">
                <img width="230" height="229" src="assets/img/Email_capture-amico.svg" alt="confirme o email PreventCell">
            </div>

            <div class="form-check flex-gap">
                <span>Não recebeu o link de verificação?</span>
                <div class="confirm">
                    <a href="" class="text-uppercase" name="validForm" id="validForm">Reenviar E-mail</a>
                </div>
            </div>
        </template>

        <!-- Criar conta-->
        <template v-slot:footer v-if="!sucessAccount">
            <div class="diviser">
                <hr />
                <span>Ou acesse com</span>
                <hr />
            </div>

            <div class="socialsBtn">
                <button type="button" class="btnSocials">
                    <img src="assets/img/apple.svg" alt="apple" width="24px" height="24px" />

                    Apple
                </button>
                <button type="button">
                    <img src="assets/img/google.svg" alt="google" width="24px" height="24px" />
                    Google
                </button>
            </div>

        </template>


        <!-- Confirmar Conta-->
        <!-- <template v-slot:footer v-else></template> -->


        <!-- Criar conta-->
        <template v-slot:mini_footer v-if="!sucessAccount">
            <div class="already">
                <span>Já tem conta? Faça <a href="#">login</a> </span>
            </div>
        </template>

        <!-- Confirmar Conta-->
        <template v-slot:mini_footer v-else>
            <div class="already">
                <span>Precisa de ajuda? <a href="">Saiba mais sobre como verificar seu e-mail</a></span>
            </div>
        </template>
    </LazyBaseModal>
</template>

<script lang="ts" setup>

defineProps<{
    classModal: string
    openModal: boolean,

}>();

//variable
const sucessAccount = ref(true)




</script>

<style lang="scss" scoped>
.verify_email {
    width: 100%;
    height: 100%;
}

.confirmAccount {
    max-width: 690px;
    height: 634px;

}

.align-items {
    align-items: center;
}

.flex-gap {
    flex-direction: column;
    gap: 16px;

    .confirm {
        display: flex;
        padding: 8px 0px;
        align-items: center;
        gap: 10px;

        a {
            padding: 5px 0;
            color: $btnOutline;
            text-align: center;
            font-size: 14px;
            font-family: Inter;
            font-style: normal;
            font-weight: 400;
            line-height: 27.134px;

            &:hover {
                color: #dbb023;
                box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
            }
        }
    }

}
</style>