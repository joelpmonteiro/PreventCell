<template>
  <LazyBaseModalDevice :active-bottom-sheet="activeBottomSheet" @close-modal="$emit('close-modal')"
    :class-custom="['', 'height: calc(90vh - 100px);']">
    <template v-slot:header>
      <header>
        <div class="close">
          <a @click.prevent="$emit('close-modal')"> Cancelar </a>
        </div>

        <div class="title">
          <h3 class="text-uppercase">Remover Dispositivo</h3>
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

        <button class="btn-secondary btn-red text-uppercase" @click.prevent="removeDevice">
          Remover Dispositivo
        </button>
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
  width: 70%;
  height: 100%;
  padding: 77px 0;
}
</style>
