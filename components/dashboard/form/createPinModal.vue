<template>
    <LazyBaseModalDevice :active-bottom-sheet="activeBottomSheet" :class-custom="['pa-b', 'height:calc(80vh - 100px)']"
        @close-modal="$emit('close-modal')">
        <template v-slot:header>
            <header>
                <div class="title">
                    <h3 class="">Crie um PIN de segurança</h3>

                    <span>
                        O código PIN será solicitado para bloquear os acessos do dispositivo. Anote em um lugar seguro!
                    </span>
                </div>
            </header>
        </template>


        <template v-slot:form>
            <form action="post">
                <div class="form-group">
                    <label for="pin">Escolha um PIN*</label>
                    <input type="password" class="pad" v-model="dadosPin.pin" name="pin" placeholder="Digite o codigo PIN*">
                </div>

                <div class="form-group">
                    <label for="remakepin">Digite novamente o PIN*</label>
                    <input type="password" class="pad" name="remakepin" v-model="dadosPin.repeatPin"
                        placeholder="Repita o codigo PIN*">
                </div>

                <button class="btn-secondary btn-color-secondary text-uppercase" @click.prevent="addPin">Criar Pin</button>
            </form>
        </template>
    </LazyBaseModalDevice>
</template>

<script  lang="ts" setup>
import { IPin } from '~/interfaces/IPin';
import useHandler from '~/composables/composablesServices';
import { useStore } from "~/store/auth";
import { useToast, POSITION } from 'vue-toastification';

defineProps({
    activeBottomSheet: { type: Boolean, default: false, required: true }
});

const emit = defineEmits(['close-modal'])

//composables
const useComposables = useHandler();

//store
const { getUserLogged } = useStore()

const toast = useToast()


//variabel ref
const dadosPin = ref<IPin>({
    pin: '',
    repeatPin: ''
})

//call function
const addPin = async () => {
    try {
        if (dadosPin.value.pin === dadosPin.value.repeatPin) {
            await useComposables.createPin({ docId: getUserLogged.cpf + "", pinNumber: dadosPin.value.pin })
            localStorage.setItem('pin', JSON.stringify({ pin: dadosPin.value.pin, check: true }))
            toast.success('Pin Criado com sucesso!', {
                timeout: 2000,
                position: POSITION.TOP_RIGHT,
            });

            const pin = useCookie<boolean>('hasPin')
            pin.value = true;

            setTimeout(() => {
                emit('close-modal', false)
            })

        }
    } catch (error: any) {
        if (error.response.status !== undefined) {
            toast.warning(error.response['_data']?.message, {
                timeout: 2000,
                position: POSITION.TOP_RIGHT,
            });
            return
        }

        toast.error('Erro ao cadastrar o pin de segurança', {
            timeout: 2000,
            position: POSITION.TOP_RIGHT,
        });
    }

}


</script>

<style lang="scss" scoped>
.pad {
    padding: 12px;
}

header {
    .title {
        display: flex;
        flex-direction: column;
        gap: 16px;

        h3 {
            font-size: 20px !important;
            line-height: 150% !important;
            letter-spacing: 0.15px;
        }

        span {
            color: rgba(0, 0, 0, 0.60);
            font-size: 14px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.25px;
        }
    }
}
</style>