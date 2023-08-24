<template>
  <LazyBaseModalDevice :active-bottom-sheet="activeBottomSheet" @close-modal="$emit('close-modal', false)"
    :class-custom="['modal-pin']">
    <template v-slot:header>
      <header>
        <div class="close">
          <a @click.prevent="$emit('close-modal')">
            <span class="close-text">Cancelar</span>
            <span class="close-icon-model">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.9844 1.42188L8.40625 7L13.9844 12.5781L12.5781 13.9844L7 8.40625L1.42188 13.9844L0.015625 12.5781L5.59375 7L0.015625 1.42188L1.42188 0.015625L7 5.59375L12.5781 0.015625L13.9844 1.42188Z"
                  fill="#6E6E6E" />
              </svg>
            </span>
          </a>
        </div>

        <div class="title">
          <h3 class="text-uppercase">Registrar incidente</h3>
        </div>
      </header>
    </template>

    <template v-slot:form>
      <form action="post" ref="formRef" @submit.prevent="createIncident">
        <div class="form-group">
          <label for="model">Digite o código PIN para confirmar o incidente</label>
          <input type="password" maxlength="4" v-model="device.pin" name="model" placeholder="Digite o Pin" />
          <span class="info" v-if="count !== 3">O PIN tem 4 dígitos</span>
          <span class="error" v-else>PIN incorreto. Após 3 tentativas, o código será bloqueado</span>
        </div>

        <div class="btnSpinner">
          <LazyIconsSpinner v-if="spinner" class="readjust-pin" :className="className"></LazyIconsSpinner>
          <button class="btn-secondary btn-color-secondary text-uppercase">Confirmar</button>
        </div>
      </form>
    </template>
  </LazyBaseModalDevice>
</template>

<script lang="ts">
import { useToast, POSITION } from 'vue-toastification';
import { useDeviceStore } from "../../../store/device"
import { IDevice } from 'interfaces/IDevice';
import useHandler from '~/composables/composablesServices';
import { useStore } from '~/store/auth';

export default defineComponent({
  props: {
    activeBottomSheet: { type: Boolean, default: false, required: true },
    itemSelect: { type: Object as PropType<IDevice>, default: false, required: true },
    className: { type: String, default: '' },
  },
  setup(props: any, { emit }: any) {

    const { itemSelect } = toRefs(props);
    const useComposables = useHandler();
    const { getUserLogged } = useStore()

    const { $swal }: any = useNuxtApp()
    const deviceStore = useDeviceStore();
    const spinner = ref<Boolean>(false)
    const count = ref<number>(0)
    const device = ref<{ pin: string }>({
      pin: ''
    });

    const toast = useToast();

    const createIncident = async () => {
      try {
        spinner.value = true
        //const pinStorage: any = localStorage.getItem('pin') !== undefined ? JSON.parse(localStorage.getItem('pin') || '') : ''
        const cpf: string | any = getUserLogged?.cpf
        await useComposables.validatePin({ docId: cpf, pinNumber: device.value.pin })

        toast.success("Seu codigo foi validado com sucesso!", {
          timeout: 2000,
          position: POSITION.TOP_RIGHT
        })


        if (device.value.pin) {

          await deviceStore.addDeviceIncident(itemSelect.value, cpf);
          toast.info("Executando Operação, por favor aguarde!", {
            timeout: 2000,
            position: POSITION.TOP_RIGHT
          })


          setTimeout(async () => {
            //<strong class=''>#${itemSelect.value.deviceId}</strong> 
            await deviceStore.getAllDeviceIncidentBy(cpf);
            $swal.fire({
              title: 'Seus acessos estão protegidos!',
              html: `<span class='font-swal'>O incidente foi criado com sucesso!</span>  <br/><br/>
                  <span class='font-swal'>Não se preocupe. A partir de agora suas contas não poderão ser acessadas por este aparelho</span>`,
              icon: 'success',
              // showCancelButton: true,
              confirmButtonColor: '#1c810f',
              // cancelButtonColor: '#d33',
              // confirmButtonText: 'Yes, delete it!',
            })
            emit("close-modal");
          }, 2000)
        } else {
          count.value = count.value + 1;

          if (count.value === 3) {
            $swal.fire({
              title: 'PIN bloqueado!',
              html: `
            <span>Entre em contato com a central de atendimento para recuperar o acesso.</span>
            <div class='pinblock-swal'> 
            <img src='../../assets/img/call_black.svg' alt='telefone'/> <h2>(11) 4321-5678</h2>
            </div>
          `,
              imageUrl: `../../assets/img/blockPin.svg`,
              imageWidth: 41,
              imageHeight: 41,
              imageAlt: 'Pin Bloqueado',
            })
          }
        }


      } catch (error) {
        console.log(error)
        toast.error("Erro ao adicionar incident", {
          timeout: 2000,
          position: POSITION.TOP_RIGHT
        })
      } finally {
        spinner.value = false
      }
    }

    return { device, createIncident, itemSelect, count, spinner }
  }
})
</script>

<style lang="scss" scoped>
.form-group {

  .info,
  .error {
    color: rgba(0, 0, 0, 0.60);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0.25px;
    margin-left: 0.85rem;
  }

  &>.error {
    color: $colorError;
  }
}

.btnSpinner {
  display: flex;
}
</style>