<template>
    <form method="post" @submit.prevent="changePin">
        <div class="form-group">
            <input type="text" name="pin" id="pin" placeholder="Senha pin" v-model="user.pin">
        </div>

        <div class="form-group">
            <input type="text" name="repeatPin" id="repeatPin" placeholder="Novo pin" v-model="user.repeatPin">
        </div>

        <button class="btn-secondary btn-color-secondary text-uppercase" type="submit">Salvar</button>
    </form>
</template>

<script lang="ts" setup>
import { IUserChangePin } from 'interfaces/IUseAuthStore';
import { useToast, POSITION } from 'vue-toastification';

//hooks
const toast = useToast()

//variable
const user = ref<IUserChangePin>({
    pin: '',
    repeatPin: ''
})
//call function 
const changePin = () => {
    if (user.value.pin && user.value.repeatPin) {
        console.log('não vazio')
    } else {
        toast.warning('Preencha os campos corretamente!', {
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