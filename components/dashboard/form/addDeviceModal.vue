<template>
  <LazyBaseModalDevice :active-bottom-sheet="activeBottomSheet" @close-modal="$emit('close-modal')" :class-custom="[]">
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
          <h3 class="text-uppercase">Adicionar Dispositivo</h3>
        </div>

        <div class="description-title">
          <span>
            Aponte a câmera do celular para o QR Code para adicionar automaticamente ou preencha as informações nos campos
            abaixo
          </span>

          <img class="qrCode" src="~/assets/img/qrcode.svg" alt="">
        </div>
      </header>
    </template>

    <template v-slot:form>
      <form action="post" ref="formRef" @submit.prevent="addDevice">

        <div class="flex-wrap">

          <div class="form-group flex-auto">
            <label class="label_floating" for="model">
              <input type="text" v-model="device.deviceModel" name="model" id="model" placeholder=" " />
              <span class="span_floating">Modelo*</span>

            </label>
          </div>

          <div class="form-group flex-auto">
            <label class="label_floating" for="marca">
              <input type="text" v-model="device.brand" id="marca" name="marca" placeholder=" " />
              <span class="span_floating">Marca*</span>
            </label>
          </div>

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
            <!-- <label class="label_floating" for="operador">
              <input type="text" v-model="device.telcomName" id="operador" name="operador" placeholder=" " />
              <span class="span_floating">Operadora</span>
            </label> -->
            <LazyCustomSelect :options="['Vivo', 'Tim', 'Claro']" :defaultItem="'Operadora'" class="select"
              @input="device.telcomName = $event">
            </LazyCustomSelect>
          </div>
        </div>

        <div class="form-group padding-bottom">
          <label class="label_floating" for="apelido">
            <input type="text" v-model="device.deviceName" id="apelido" name="apelido" placeholder=" " />
            <span class="span_floating">Apelido do dispositivo</span>
          </label>

        </div>

        <div class="btnSpinner m-bottom">
          <LazyIconsSpinner v-if="spinner" class="reajusted" :className="className"></LazyIconsSpinner>
          <button class="btn-secondary btn-color-secondary text-uppercase">
            Adicionar
          </button>
        </div>

      </form>
    </template>
  </LazyBaseModalDevice>
</template>

<script lang="ts" setup>
import { useToast, POSITION } from "vue-toastification";
import { IDevice } from "~/interfaces/IDevice";
import { useDeviceStore } from "~/store/device";
import { useStore } from "~/store/auth";

defineProps({
  activeBottomSheet: { type: Boolean, default: false, required: true },
  // spinner: { type: Boolean, required: true },
  className: { type: String, default: '' },

});

//toast
const toast = useToast();


const emit = defineEmits(["close-modal"]);

//pinia config
const storeDevice = useDeviceStore();
const { getUserLogged } = useStore()

//const { deviceArray } = storeToRefs(storeDevice);

const formRef = ref<HTMLFormElement>();
const spinner = ref<Boolean>(false)
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
    spinner.value = true
    device.value.deviceType = "MOBILE";
    device.value.serialNumber = "NGhKJHUG453";
    device.value.deviceModelNumber = "MQ7e86e7";

    //verifica se existe um IMEI ja cadastrado se exitir ele sai da função com esse return;
    if (storeDevice.getIMEIExist(device.value)) {
      toast.warning("Já existe um dispositivo com esse IMEI cadastrado como incidente ou dispositivo seguro!", {
        timeout: 2000,
        position: POSITION.TOP_RIGHT
      })
      return;
    };

    await storeDevice.addDeviceStore(device.value);
    toast.info("Executando Operação, por favor aguarde!", {
      timeout: 2000,
      position: POSITION.TOP_RIGHT
    })


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
  } finally {
    spinner.value = false
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

<style lang="scss" scoped>
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  .flex-auto {
    width: auto;
    flex: 1;
  }
}

.title {
  display: flex;
  justify-content: center;
  width: 100%;
}

.description-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  &>span {
    color: rgba(0, 0, 0, 0.60);
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.25px;
  }

  .qrCode {
    width: 104px;
    height: 104px;
  }
}

@media screen and (max-width:600px) {
  .flex-wrap {
    flex-wrap: nowrap;

    .flex-auto {
      width: 100%;

    }
  }

  .title {
    justify-content: flex-start;
  }

  .description-title {
    display: none;
  }
}
</style>
