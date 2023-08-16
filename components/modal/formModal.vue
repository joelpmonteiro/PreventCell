<template >
    <LazyBaseModal :nameBtn="'Criar Conta'" :checkBtnValid="checkValid" :actionBtn="sucessAccount"
        :typeModal="sucessAccount ? 'confirmAccount' : ''" @form-action="createRegister"
        :class="[openModal ? classModal : '']" @close-modal="closeModal">
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
                <div class="">
                    <img width="109" height="109" src="assets/img/Email_capture-amico.svg"
                        alt="confirme o email PreventCell">
                </div>
                <span class="code-verify">Digite o código de verificação</span>
                <span>
                    Enviamos um e-mail com um código de 6 dígitos para verificar sua conta.
                    Se não encontrar na caixa de entrada, verifique a caixa de spam.
                </span>
            </div>
        </template>

        <!-- Criar conta-->
        <template v-slot:body v-if="!sucessAccount">
            <div class="card-body">
                <div class="form-input">
                    <label class="label_floating" for="email">
                        <input type="text" id="email" name="email" v-model="email" placeholder=" " required>
                        <span class="span_floating">E-mail*</span>
                    </label>
                </div>

                <div class="form-input">
                    <label class="label_floating" for="cpf">
                        <input type="text" placeholder=" " name="cpf" id="cpf" v-maska data-maska="['###.###.###-##']"
                            v-model="cpf" required>
                        <span class="span_floating">CPF*</span>
                    </label>
                </div>

                <div class="form-group">
                    <label class="label_floating" for="password">
                        <input type="password" placeholder=" " name="password" id="password" v-model="password" required>
                        <span class="span_floating">Senha*</span>
                    </label>
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
            <div class="card-body row">
                <div class="form-input-max-number">
                    <input :ref="nextTickInput" type="text" v-model="checkCode.in0" :maxlength="1" @input="fnextInput(1)">
                </div>

                <div class="form-input-max-number">
                    <input :ref="nextTickInput" type="text" v-model="checkCode.in1" :maxlength="1" @input="fnextInput(2)">
                </div>

                <div class="form-input-max-number">
                    <input :ref="nextTickInput" type="text" v-model="checkCode.in2" :maxlength="1" @input="fnextInput(3)">
                </div>

                <div class="form-input-max-number">
                    <input :ref="nextTickInput" type="text" v-model="checkCode.in3" :maxlength="1" @input="fnextInput(4)">
                </div>

                <div class="form-input-max-number">
                    <input :ref="nextTickInput" type="text" v-model="checkCode.in4" :maxlength="1" @input="fnextInput(5)">
                </div>

                <div class="form-input-max-number">
                    <input :ref="nextTickInput" type="text" v-model="checkCode.in5" @change="validaCode" :maxlength="1">
                </div>
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
                    <img loading="lazy" src="@/assets/Icon.png" alt="apple" width="24px" height="24px" />
                    Apple
                </button>

                <button type="button">
                    <img loading="lazy" src="@/assets/Icon2.png" alt="google" width="24px" height="24px" />
                    Google
                </button>
            </div>

        </template>


        <!-- Confirmar Conta-->
        <!-- <template v-slot:footer v-else></template> -->


        <!-- Criar conta-->
        <template v-slot:mini_footer v-if="!sucessAccount">
            <div class="already">
                <span>Já tem conta? Faça <a @click.prevent="$emit('open-child-modal', true)">login</a> </span>
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
const checkValid = ref<boolean>(false);


//variable
const sucessAccount = ref(false)
const nextInput = ref<HTMLElement[]>([])
const checkCode = ref<{
    in0: number | string,
    in1: number | string,
    in2: number | string,
    in3: number | string,
    in4: number | string,
    in5: number | string
}>({
    in0: '',
    in1: '',
    in2: '',
    in3: '',
    in4: '',
    in5: '',
})

//Callfunction

const nextTickInput = (el: any) => {
    nextInput.value.push(el);
}

const fnextInput = (index: number) => {
    nextInput.value[index].focus();
    console.log(nextInput.value[index])
    console.log(nextInput.value[index].focus())
}

async function createRegister(form: any) {
    try {
        // if (cpf.value !== undefined || cpf.value !== null) {

        // }

        const cpfWithPoints: any = cpf.value.match(/\d/g)?.join("");

        const data = await createAccount({
            docId: cpfWithPoints,
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
                toast.warning("Email ou o CPF já existe!", {
                    timeout: 2000,
                    position: POSITION.TOP_RIGHT
                });
            } else {
                toast.error("Error em nosso sistema", {
                    timeout: 2000,
                    position: POSITION.TOP_RIGHT
                });
            }
        } else {
            toast.error("Error ao criar conta!", {
                timeout: 2000,
                position: POSITION.TOP_RIGHT
            });
        }

    }
}

async function validaCode() {
    console.log(checkCode.value)
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



.card-body {
    gap: 12px;

    .form-input-max-number {
        width: 50px;
        height: 60.714px;

        input {
            text-align: center;
            font-size: 2.5rem;
            color: white;
            width: 50px;
            height: 60.714px;
            border-radius: 4px;
            background: $inputColorBackground;
        }

    }
}

.row {
    flex-direction: row !important;
    justify-content: center;
}

.welcome {
    gap: 16px;

    &>.code-verify {
        font-family: Inter;
        font-size: 20px;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 1px;
    }
}
</style>