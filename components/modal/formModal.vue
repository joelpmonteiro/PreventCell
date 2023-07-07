<template >
    <LazyBaseModal :nameBtn="'Criar Conta'" :checkBtnValid="checkValid" :actionBtn="sucessAccount"
        :typeModal="'confirmAccount'" @form-action="createRegister" :class="[openModal ? classModal : '']"
        @close-modal="closeModal">
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
                    <input type="text" placeholder="Email*" v-model="email">
                </div>

                <div class="form-input">
                    <input type="text" placeholder="CPF*" v-model="cpf">
                </div>

                <div class="form-group">
                    <input type="password" placeholder="Senha*" v-model="password">
                    <span>Deve conter no mínimo 6 dígitos</span>

                    <div class="forgotPassword">
                        <a href=""><span class="text-uppercase">Esqueceu a senha?</span></a>
                    </div>
                </div>


            </div>
            <div class="form-check">
                <div class="check">
                    <input type="checkbox" v-model="checkValid" name="validForm" id="validForm" />
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
import { useToast, POSITION } from "vue-toastification";
import useHandler from "~/composables/composablesServices";

//useCallHandler
const { createAccount } = useHandler()

defineProps<{
    classModal: string
    openModal: boolean,
}>();

//emit
const emit = defineEmits(['close-modal'])

const toast = useToast();
const password = ref<string>("");
const cpf = ref<string>("")
const email = ref<string>("");
const checkValid = ref<boolean>(false)

//variable
const sucessAccount = ref(false)

//Callfunction
async function createRegister(form: any) {
    try {
        const data = await createAccount({
            docId: cpf.value,
            psswd: password.value,
            email: email.value,
        });

        toast.success("Cadastro feito com sucesso", {
            timeout: 2000,
            position: POSITION.TOP_RIGHT
        });


        setTimeout(() => {
            form.reset();
            emptyValue()
            sucessAccount.value = true
        }, 800)
    } catch (error: any) {

        if (error.response !== undefined) {
            const { _data: data } = error.response;

            if (error.response.status === 500 && data.trace.code === "23505") {
                alert("Email ou o CPF já existe!")
            } else {
                alert('Error em nosso sistema')
            }
        } else {
            alert('Erro')
        }

    }
}

const emptyValue = () => {
    cpf.value = ''
    password.value = ''
    email.value = ''
}

const closeModal = () => {
    //$emit('close-modal', false)
    emit('close-modal', false);
    sucessAccount.value = false;
}

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