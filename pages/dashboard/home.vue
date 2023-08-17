<template>
  <main>
    <!-- <LazyHeaderBreadcrumb :className="'desktop'"></LazyHeaderBreadcrumb> -->

    <div
      :class="{ blurning: activeModalsheet || modalPin || editModalDevice || closeBlurDeleteDevice || activeModalPin }">
    </div>


    <LazyDashboardContentRegisterMobile :deviceAction="'Dispositivos seguros'" :btn-active="true"
      @handle-click-button="addDevice" :deviceLength="getDeviceProtectLength.length">

      <template v-slot:recently>
        <ClientOnly>
          <LazySlideDevice :validHeaderCard="true" :msg-card-empty="'Adicione um dispositivo para proteger seus acessos'"
            :validModalIncident="true" :data-device="getDeviceProtectLength" @edit-device="editDevice"
            @close-all-modal="(event) => { closeBlurDeleteDevice = !event, editModalDevice = !event }"
            @create-incident="createIncident">
          </LazySlideDevice>
        </ClientOnly>
      </template>

    </LazyDashboardContentRegisterMobile>

    <hr />

    <LazyDashboardContentRegisterMobile :deviceAction="'Dispositivos com incidente'" :btn-active="false"
      :deviceLength="getDeviceIncidentLength.length">

      <template v-slot:recently>
        <ClientOnly>
          <LazySlideDevice :validHeaderCard="false" :msg-card-empty="'Você não tem dispositivos com incidente'"
            :validModalIncident="true" :data-device="getDeviceIncidentLength">
          </LazySlideDevice>
        </ClientOnly>
      </template>

    </LazyDashboardContentRegisterMobile>

    <BaseBtn :text-btn="'Adicionar Dispositivos'" :class-name="'btn-secondary text-uppercase'" :class-div="'bnt-mobile'"
      @handle-click-button="addDevice">
    </BaseBtn>

    <LazyDashboardFormAddDeviceModal :active-bottom-sheet="activeModalsheet" @close-modal="addDevice">
    </LazyDashboardFormAddDeviceModal>

    <LazyDashboardFormCreatePinModal :active-bottom-sheet="modalPin" @close-modal="closeModal">
    </LazyDashboardFormCreatePinModal>

    <LazyDashboardFormRegisterIncident :active-bottom-sheet="activeModalPin" @close-modal="closeModal"
      :item-select="{ ...itemDevice }">

    </LazyDashboardFormRegisterIncident>
  </main>
</template>

<script setup lang="ts">
import { IDevice } from "interfaces/IDevice";
import { useDeviceStore } from "~/store/device";
import { useStore } from "~/store/auth";
import { useToast, POSITION } from "vue-toastification";
const { $swal }: any = useNuxtApp()

definePageMeta({
  layout: "dashboard",
});

//toast
const toast = useToast();

//emit
const emit = defineEmits(["addClassModal"]);

//pinia config
const storeDevice = useDeviceStore();
const { getUserLogged, getCustomer } = useStore()

//variable
const activeModalsheet = ref<boolean>(false);
const modalPin = ref<boolean>(false);
const editModalDevice = ref<boolean>(false);
const closeBlurDeleteDevice = ref<boolean>(false);
const activeModalPin = ref<boolean>(false);
const hasPinNumber = ref<boolean>(true);
const itemDevice = ref<IDevice>({
  brand: "",
  deletedDate: "",
  deviceId: 0,
  deviceModel: "",
  deviceModelNumber: "",
  deviceName: "",
  devicePhoneNumber: "",
  deviceType: "",
  docId: "",
  imei: "",
  isDeleted: false,
  serialNumber: "",
  operator: "",
  pin: "",
  telcomName: "",
  deviceIMEI: "",
  telecomName: "",
  deviceBrand: "",
});

//CallFuntion
const addDevice = () => {
  activeModalsheet.value = !activeModalsheet.value;
};

const editDevice = (click: boolean) => {
  editModalDevice.value = click;
};

const createIncident = (device: IDevice) => {
  activeModalPin.value = !activeModalPin.value;
  itemDevice.value = device

}

const closeModal = (close: boolean) => {
  setTimeout(() => {
    modalPin.value = close;
    activeModalPin.value = close
  }, 100);
};

//computed
const getDeviceProtectLength = computed(() => storeDevice.deviceArray);
const getDeviceIncidentLength = computed(() => storeDevice.deviceArrayIncident);

//hooks lifecycle
onMounted(async () => {
  hasPinNumber.value = useCookie('hasPin').value as unknown as boolean;
  let msg = ''

  try {
    const docId: any = getUserLogged?.cpf

    //checa se cpf existe no cookie
    if (docId === '') {
      toast.error('Não foi possivel buscar os dispositivos, pois você não está logado no painel', {
        timeout: 2000,
        position: POSITION.TOP_RIGHT
      });

    }
    if (process.client) {
      await storeDevice.getAllDeviceByDocId(docId)
      await storeDevice.getAllDeviceIncidentBy(docId);
      await getCustomer(docId, getUserLogged.email ?? '');
    }



  } catch (error: any) {
    console.log(error.response)

    if (error.response === undefined) {
      toast.error('Error ao conectar com nossos serviços ', {
        timeout: 2000,
        position: POSITION.TOP_RIGHT,
      });
      return
    }

    switch (error.response?.status) {
      case 401:
        toast.error('Não foi possivel encontrar dispositivos cadastrados', {
          timeout: 2000,
          position: POSITION.TOP_RIGHT
        });
        break;
      case 404:
        // if (error.response['_data']?.message.trim() === 'Incident not Found') {
        //   toast.warning('Sem dispositivos com incidente', {
        //     timeout: 2000,
        //     position: POSITION.TOP_RIGHT,
        //   });
        // }
        toast.info('Sem dispositivos com incidente', {
          timeout: 2000,
          position: POSITION.TOP_RIGHT,
        });
        break;
      default:
        toast.warning(error.response['_data']?.message, {
          timeout: 2000,
          position: POSITION.TOP_RIGHT,
        });
    }



  }


  if (
    !hasPinNumber.value
  ) {
    setTimeout(() => {
      modalPin.value = true;
    }, 800);
  }

});
</script>

<style scoped lang="scss">
main {
  // background: $backgroundMainDashboard;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 88px);
  padding: 0 16px;

  hr {
    display: flex;
    align-items: center;
    width: 95%;
    height: 0.75px;
    margin: 0 auto;
    background: $subtitleColor;
  }

  .blurning {
    background: rgba(0, 0, 0, 0.9);
    opacity: 40%;
    backdrop-filter: blur(1px);
    position: absolute;
    bottom: 0;
    left: 0;
    margin: auto;
    height: 100vh;
    width: 100%;
    z-index: 1;
  }

}

@media(max-width: 600px) {

  main {
    min-height: calc(100vh - 129px);



    .btn-protect {
      display: flex;
      width: 100%;
      height: auto;
      padding-bottom: 39px;

      &>.btn-secondary {
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        letter-spacing: 1.25px;
      }
    }
  }
}
</style>
