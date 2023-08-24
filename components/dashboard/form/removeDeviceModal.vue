<template>
  <LazyBaseModalDevice :active-bottom-sheet="activeBottomSheet" @close-modal="$emit('close-modal')"
    :class-custom="['modal-remove']">
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
          <h3 class="text-sm-uppercase">Remover Dispositivo?</h3>

          <span class="text-title">
            Removendo o dispositivo, seus acessos ficarão vulneráveis. Tem certeza que deseja continuar?
          </span>
        </div>
      </header>
    </template>

    <template v-slot:form>
      <form action="post" v-if="screen <= 600">
        <div class="form-group">
          <label for="model">Modelo*</label>
          <input type="text" v-model="device.deviceModel" name="model" disabled placeholder="Modelo do telefone" />
        </div>

        <div class="form-group">
          <label for="marca">Marca</label>
          <input type="text" v-model="device.brand" name="marca" disabled placeholder="Marca do telefone" />
        </div>

        <div class="form-group">
          <label for="imei">Número de série/IMEI*</label>
          <input type="text" v-model="device.imei" name="imei" disabled placeholder="IMEI do telefone" />
        </div>

        <div class="flex-center">
          <div class="form-group">
            <label for="imei">Digite o código PIN para continuar</label>
            <input type="password" v-model="device.pin" name="imei" disabled placeholder="IMEI do telefone" />
          </div>
        </div>

        <button class="btn-secondary btn-red text-uppercase" @click.prevent="removeDevice">
          Remover Dispositivo
        </button>
      </form>

      <form v-else action="post">
        <div class="flex-center">
          <div class="form-group">
            <label for="imei">Digite o código PIN para continuar</label>
            <input type="password" v-model="device.pin" maxlength="4" name="imei" placeholder="Pin de segurança" />
          </div>
        </div>

        <div class="btnSpinner m-bottom">
          <LazyIconsSpinner v-if="spinner" class="removeAdjust" :className="className"></LazyIconsSpinner>
          <button class="btn-secondary btn-red text-uppercase" @click.prevent="removeDevice">
            Remover Dispositivo
          </button>
        </div>

      </form>
    </template>
  </LazyBaseModalDevice>
</template>

<script setup lang="ts">
import { IDevice } from "interfaces/IDevice"
import { useDeviceStore } from "../../../store/device";
import { useScreenWidth } from "~/composables/screen-width";
import useHandler from "~/composables/composablesServices";
import { useToast, POSITION } from "vue-toastification";
import { useStore } from '~/store/auth';

const { $swal }: any = useNuxtApp()

const prop = defineProps({
  activeBottomSheet: { type: Boolean, default: false, required: true },
  className: { type: String, default: '' },
  deviceProp: {
    type: Object as PropType<IDevice>,
    default: Object as PropType<IDevice>,
    required: true,
  },
  deviceIndex: {
    type: Number,
    default: 0,
    required: true,
  }
});

//useRouter
const router = useRouter()

//toast
const toast = useToast();

//pinia store
const deviceStore = useDeviceStore();
const { getUserLogged, closeDashboard } = useStore()
const count = useState<number>('count');

//emit
const emit = defineEmits(['remove-device', 'close-modal']);

//composables
const { validatePin } = useHandler();

//refs
const remDevice = ref<boolean>(false);
const spinner = ref<Boolean>(false)
const screen = useScreenWidth();

const blockPin = () => {

  toast.warning('Suas tentativas foram excedidas', {
    timeout: 2000,
    position: POSITION.TOP_RIGHT,
  });

  $swal.fire({
    title: 'PIN bloqueado!',
    html: `
            <span>Entre em contato com a central de atendimento para recuperar o acesso.</span>
            <div class='pinblock-swal'> 
            <img src='../../../assets/img/call_black.svg' alt='telefone'/> <h2>(11) 4321-5678</h2>
            </div>
          `,
    imageUrl: `../../../assets/img/blockPin.svg`,
    imageWidth: 41,
    imageHeight: 41,
    imageAlt: 'Pin Bloqueado',
  }).then(async () => {
    await closeDashboard(router)
  })

}

const removeDevice = async () => {
  try {
    //const pinStorage: any = localStorage.getItem('pin') !== undefined ? JSON.parse(localStorage.getItem('pin') || '') : ''
    spinner.value = true
    if ((device.value?.deviceId !== undefined && device.value.pin !== undefined && getUserLogged?.cpf)) {

      const data = await validatePin({ docId: getUserLogged?.cpf, pinNumber: device.value.pin })
        .catch(async (err) => {
          console.warn('warning: Could not', err.response)
          const errPin = { response: err.response, code: err.response.status }
          throw errPin
        });

      console.warn(data)

      deviceStore.deleteDeviceStore(device.value.deviceId, false);
      deviceStore.deviceSelectEmpty();
      setTimeout(() => emit("close-modal"), 500)
      emit("remove-device");

      if (count.value >= 3) {
        blockPin();

      }


      // toast.error('O Seu codigo do pin está incorreto!', {
      //   timeout: 2000,
      //   position: POSITION.TOP_RIGHT,
      // });


    } else {
      toast.warning('Não foi selecionado o dispositivo a ser removido!', {
        timeout: 2000,
        position: POSITION.TOP_RIGHT,
      });
    }
  } catch (error: any) {
    if (count.value >= 3) {
      blockPin();
    }
    console.error(error.response);
    if (error.response !== undefined) {
      if (error.response.status === 401) {
        toast.info(error.response['_data'].message, {
          timeout: 3000,
          position: POSITION.TOP_RIGHT,
        });
      } else if (error.response.status === 400 && error?.code === 400) {
        console.warn('pin block', error)
        blockPin();
      } else {
        toast.error(error.response['_data'].message, {
          timeout: 2000,
          position: POSITION.TOP_RIGHT,
        });
      }
    }

  } finally {
    spinner.value = false
  }

};

//computed
const device = computed(() => {
  return prop.deviceProp
})



</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px 0;


}

@media screen and (max-width: 600px) {
  .flex-center {
    width: 70%;
    padding: 77px 0;

  }
}

.btn-red:hover {
  background: #780000;
}
</style>
