<template >
    <LazyBaseModal :nameBtn="'Entrar'" :checkBtnValid="availableProps" :actionBtn="false"
        :class="[openModal ? classModal : '']" @form-action="login" :typeModal="'height:594px'"
        @close-modal="$emit('close-modal', false)">
        <template v-slot:header>
            <div class="welcome">
                <h1 class="fs-4 text-uppercase">Olá de novo!</h1>
                <span>Preencha os campos abaixo para acessar sua conta</span>
            </div>
        </template>
        <template v-slot:body>
            <div class="card-body">

                <div class="form-input">
                    <input type="text" placeholder="CPF*" v-model="cpf">
                </div>

                <div class="form-group">
                    <input type="text" placeholder="Senha*" v-model="psswd">
                    <span>Deve conter no mínimo 6 dígitos</span>

                    <div class="forgotPassword">
                        <a href=""><span class="text-uppercase">Esqueceu a senha?</span></a>
                    </div>
                </div>


            </div>
        </template>

        <template v-slot:mini_footer>
            <div class="already">
                <span>Não tem conta <a href="#">Cadastre-se</a> </span>
            </div>
        </template>
    </LazyBaseModal>
</template>

<script lang="ts" setup>
//useStore
import { useStore } from '../../store/auth';
import { useToast, POSITION } from "vue-toastification";

//toast
const toast = useToast();

const { actionAuthen, authenticated, loading, message } = useStore()

defineProps<{
    classModal: string
    openModal: boolean,

}>();


const cpf = ref<string>("");
const psswd = ref<string>("");


//computed properties
const availableProps = computed(() => {
    return ((cpf.value !== '' && cpf.value !== undefined) && ((psswd.value !== '' && psswd.value !== undefined) && psswd.value.length >= 6) ? true : false)
})

//callfunction
const login = async (form: any) => {
    try {
        await actionAuthen({ docId: cpf.value, psswd: psswd.value });

        toast.success(message, {
            timeout: 2000,
            position: POSITION.TOP_RIGHT
        });

        setTimeout(() => { emptyValue() }, 800)
    } catch (error) {
        console.log(error);
        toast.error("Erro ao efetuar login", {
            timeout: 2000,
            position: POSITION.TOP_RIGHT
        });
    }
}

const emptyValue = () => {
    cpf.value = ''
    psswd.value = ''
}

</script>