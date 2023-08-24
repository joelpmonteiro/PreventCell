<template>
    <form method="post" @submit.prevent="changePassword">
        <div class="form-group">
            <input type="text" name="pwd" id="pwd" placeholder="Senha atual" v-model="user.pwd">
        </div>

        <div class="form-group">
            <input type="text" name="repeatPwd" id="repeatPwd" placeholder="Nova senha" v-model="user.repeatPwd">
        </div>

        <div class="btnSpinner">
            <LazyIconsSpinner v-if="spinner" :className="className"></LazyIconsSpinner>
            <button class="btn-secondary btn-color-secondary text-uppercase" type="submit">Salvar</button>
        </div>
    </form>
</template>

<script lang="ts" setup>
import { IUserChangePassword } from 'interfaces/IUseAuthStore';
import { useStore } from '~/store/auth';
import { useToast, POSITION } from 'vue-toastification';
import useHandler from '~/composables/composablesServices'
//defineProps
defineProps({
    spinner: { type: Boolean, required: true },
    className: { type: String, default: '' },
})


//hooks
const toast = useToast()
const { getUserLogged } = useStore()


//composables
const api = useHandler()

//variable
const user = ref<IUserChangePassword>({
    pwd: '',
    repeatPwd: ''
})



//call function 
const changePassword = async () => {
    try {
        if (user.value.pwd && user.value.repeatPwd && getUserLogged?.cpf) {
            await api.changePassword({ docId: getUserLogged?.cpf, psswd: user.value.pwd, repeatPwd: user.value.repeatPwd })
            toast.success('Senha Alterada com sucesso!', {
                timeout: 2000,
                position: POSITION.TOP_RIGHT,
            });
        } else {
            toast.warning('Preencha os campos corretamente!', {
                timeout: 2000,
                position: POSITION.TOP_RIGHT,
            });
        }
    } catch (error: any) {
        console.log(error)
        toast.warning(error.mensagem, {
            timeout: 2000,
            position: POSITION.TOP_RIGHT,
        });
    }

}
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 60%;
    padding: 32px 0;
    flex: 1 0 auto;
    max-width: 100%;

    .btn-secondary {
        flex: auto;
        max-width: 100px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 8px;
        width: 100%;
        height: auto;

        input {
            width: 100%;
            height: 48px;
            padding: 0 12px;
            border-radius: 4px;
            border: 0.75px solid $subtitleColor;
            background: white;

            &:focus {
                outline: none;
            }

            &:focus-visible {
                outline: 2px solid $subtitleColor;
            }
        }


    }
}
</style>