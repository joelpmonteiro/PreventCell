<template>
  <LazyBaseModalDevice :active-bottom-sheet="activeBottomSheet" @close-modal="$emit('close-modal')"
    :class-custom="['', 'height: calc(95vh - 100px);']">
    <template v-slot:header>
      <header>
        <div class="close">
          <a @click="$emit('close-modal')"> Cancelar </a>
        </div>

        <div class="title">
          <h3 class="text-uppercase">Editar Dispositivo</h3>
        </div>
      </header>
    </template>

    <template v-slot:form>
      <form action="post">
        <div class="form-group">
          <label for="model">Modelo*</label>
          <input type="text" v-model="device.deviceModel" name="model" placeholder="Modelo do telefone" />
        </div>

        <div class="form-group">
          <label for="marca">Marca</label>
          <input type="text" v-model="device.brand" name="marca" placeholder="Marca do telefone" />
        </div>

        <div class="form-group">
          <label for="imei">Número de série/IMEI*</label>
          <input type="text" v-model="device.imei" name="imei" placeholder="IMEI do telefone" />
        </div>

        <div class="form-flex">
          <div class="form-group">
            <label for="phone">Telefone do aparelho*</label>
            <input type="text" v-model="device.devicePhoneNumber" name="phone" placeholder="Telefone" />
          </div>
          <div class="form-group">
            <label for="operador">Operadora</label>
            <input type="text" v-model="device.telcomName" name="operador" placeholder="Operadora" />
          </div>
        </div>

        <div class="form-group padding-bottom-06">
          <label for="apelido">Apelido do dispositivo</label>
          <input type="text" v-model="device.deviceName" name="apelido" placeholder="Apelido dispositivo" />
        </div>

        <button class="btn-secondary btn-color-secondary text-uppercase" @click.prevent="editDevice">
          Salvar Alterações
        </button>

        <button class="btn-secondary-outline text-uppercase" @click.prevent="$emit('remove-device')">
          Remover Dispositivo
        </button>
      </form>
    </template>
  </LazyBaseModalDevice>
</template>

<script setup lang="ts">
import { IDevice } from "interfaces/IDevice";
import { useDeviceStore } from "../../../store/device";
import { useToast, POSITION } from "vue-toastification";

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

const deviceStore = useDeviceStore();

//emit
const emit = defineEmits(["remove-device", "close-modal"]);

//toast
const toast = useToast();


//call function
const editDevice = () => {
  //device
  deviceStore.editDeviceStore(prop.deviceProp, prop?.deviceIndex);
};


const device = computed(() => {
  return prop.deviceProp
})



</script>

<style lang="scss" scoped></style>
