<template>
  <LazyBaseModalDevice :active-bottom-sheet="activeBottomSheet" @close-modal="$emit('close-modal')" :class-custom="[]">
    <template v-slot:header>
      <header>
        <div class="close">
          <a @click.prevent="$emit('close-modal')"> Cancelar </a>
        </div>

        <div class="title">
          <h3 class="text-uppercase">Adicionar Dispositivo</h3>
        </div>
      </header>
    </template>

    <template v-slot:form>
      <form action="post" ref="formRef" @submit.prevent="addDevice">
        <div class="form-group">
          <label class="label_floating" for="model">
            <input type="text" v-model="device.deviceModel" name="model" id="model" placeholder=" " />
            <span class="span_floating">Modelo*</span>

          </label>

        </div>

        <div class="form-group">
          <label class="label_floating" for="marca">
            <input type="text" v-model="device.brand" id="marca" name="marca" placeholder=" " />
            <span class="span_floating">Marca*</span>
          </label>
        </div>

        <div class="form-group">
          <label class="label_floating" for="imei">
            <input type="text" v-model="device.imei" id="imei" name="imei" placeholder=" " />
            <span class="span_floating">Número de série/IMEI*</span>
          </label>
        </div>

        <div class="form-flex">
          <div class="form-group">

            <label class="label_floating" for="phone">
              <input type="text" v-model="device.devicePhoneNumber" id="phone" name="phone" v-maska
                data-maska="+55 (##) # ####-####" placeholder=" " />
              <span class="span_floating">Telefone do aparelho*</span>
            </label>

          </div>

          <div class="form-group">
            <label class="label_floating" for="operador">
              <input type="text" v-model="device.telcomName" id="operador" name="operador" placeholder=" " />
              <span class="span_floating">Operadora</span>
            </label>
          </div>
        </div>

        <div class="form-group padding-bottom">
          <label class="label_floating" for="apelido">
            <input type="text" v-model="device.deviceName" id="apelido" name="apelido" placeholder=" " />
            <span class="span_floating">Apelido do dispositivo</span>
          </label>

        </div>

        <button class="btn-secondary btn-color-secondary text-uppercase">
          Adicionar
        </button>
      </form>
    </template>
  </LazyBaseModalDevice>
</template>

<script lang="ts" setup>
import { useToast, POSITION } from "vue-toastification";
import { IDevice } from "~/interfaces/IDevice";
import { useDeviceStore } from "~/store/device";
import { useStore } from "../../../store/auth";

defineProps({
  activeBottomSheet: { type: Boolean, default: false, required: true },
});

//toast
const toast = useToast();


const emit = defineEmits(["close-modal"]);

//pinia config
const storeDevice = useDeviceStore();
const { getUserLogged } = useStore()

//const { deviceArray } = storeToRefs(storeDevice);

const formRef = ref<HTMLFormElement>();
const device = ref<IDevice>({
  deviceModel: "",
  brand: "",
  imei: "",
  devicePhoneNumber: "",
  telcomName: "",
  deviceName: "",
  serialNumber: "",
  isDeleted: false,
  deletedDate: "",
  deviceModelNumber: "",
  docId: "",
  deviceType: "",
});

const addDevice = async () => {
  try {
    if (getUserLogged.cpf === '') {
      return;
    } else {
      device.value.docId = getUserLogged.cpf !== '' ? getUserLogged.cpf + "" : "";
    }
    device.value.deviceType = "MOBILE";
    device.value.serialNumber = "NGhKJHUG453";
    device.value.deviceModelNumber = "MQ7e86e7";

    await storeDevice.addDeviceStore(device.value);
    toast.info("Executando Operação, por favor aguarde!", {
      timeout: 2000,
      position: POSITION.TOP_RIGHT
    })
    // toast.success("Dispositivos cadastrado com sucesso!", {
    //   timeout: 2000,
    //   position: POSITION.TOP_RIGHT
    // });
    setTimeout(async () => {
      if (device.value.docId) {
        await storeDevice.getAllDeviceByDocId(device.value.docId);
      }

      toast.success("Dispositivos cadastrado com sucesso!", {
        timeout: 2000,
        position: POSITION.TOP_RIGHT
      });

      //reset
      resetForm();
      setTimeout(() => {
        emit("close-modal");
      }, 500)

    }, 2000)

    storeDevice.deviceArray?.push({ ...device.value });


    // setTimeout(() => {
    //   emit("close-modal");
    // }, 500)

    //const test = await storeDevice.addDeviceStore(device.value);
  } catch (error: any) {
    if (error.response.status === 404) toast.error("Erro ao cadastrar dispositivo", {
      timeout: 2000,
      position: POSITION.TOP_RIGHT
    })
    else toast.error(error.response['_data']?.message, {
      timeout: 2000,
      position: POSITION.TOP_RIGHT
    })
  }
};

const resetForm = async () => {
  formRef.value?.reset();
  device.value.imei = "";
  device.value.brand = "";
  device.value.deviceModel = "";
  device.value.deviceModelNumber = "";
  device.value.deviceName = "";
  device.value.serialNumber = "";
  device.value.devicePhoneNumber = "";
  device.value.deviceType = "";
  device.value.docId = "";
  device.value.telcomName = ""
  device.value.pin = ""
};
</script>

<style lang="scss" scoped></style>
