<template>
  <div class="slide-content">
    <div class="empty-device" v-if="dataDevice.length <= 0">
      <span>{{ msgCardEmpty }}</span>
    </div>
    <div class="slide-device" v-for="(value, i) in arryDeviceComputed" :key="i">
      <header v-if="validHeaderCard">
        <span>{{ value.deviceName }}</span>
        <a @click.prevent="editDevice(value, i)">
          <img src="~assets/img/edit_device.svg" alt="edite device" />
        </a>
      </header>

      <main>
        <div class="device">
          <img :src="typeImg(value)" alt="modelo de telefone" />

          <div class="info" :class="{ 'info-inc': !validHeaderCard }">
            <h2 v-if="validHeaderCard">
              {{ value.deviceModel }}
            </h2>

            <div v-else class="device-incident">
              <img :src="typeImg(value)" alt="restrito" />
              <h2 class="text-uppercase">Dispositivo Restrito</h2>
            </div>

            <div class="device-mark">
              <ul v-if="validHeaderCard">
                <li>{{ value.brand }}</li>
                <li>
                  IMEI: <span>{{ value.imei ? value.imei : ' - ' }}</span>
                </li>
                <li>
                  Operadora:
                  <span class="text-uppercase">{{ value.telcomName ? value.telcomName : ' - ' }}</span>
                </li>
                <li>Status: <span class="color-green">Seguro</span></li>
              </ul>

              <ul v-else class="device-inc">
                <li class="text-capitalize">
                  <h2>{{ value.deviceModel }}</h2>
                </li>

                <li class="text-capitalize">
                  {{ value.deviceBrand }}
                </li>

                <li>
                  IMEI: <span>{{ value.deviceIMEI }}</span>
                </li>
                <li>
                  Incidente: <span style="color: #C70000">#{{ value?.incidentid }}</span>
                </li>
              </ul>

              <button v-if="validHeaderCard" type="button" class="btn-primary text-uppercase"
                @click.prevent="createIncident(value)">
                Informar Incidente
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>

    <LazyDashboardFormEditDeviceModal v-if="clickEdit" :active-bottom-sheet="clickEdit"
      :device-prop="{ ...deviceStore.deviceSelected }" :device-index="deviceStore.deviceSelectedIndex"
      @close-modal="editDevice" @remove-device="closeAllModal">
    </LazyDashboardFormEditDeviceModal>

    <LazyDashboardFormRemoveDeviceModal v-if="clickDelete" :active-bottom-sheet="clickDelete"
      :device-prop="{ ...deviceStore.deviceSelected }" :device-index="deviceStore.deviceSelectedIndex"
      @close-modal="clickRemoveDevice">
    </LazyDashboardFormRemoveDeviceModal>
  </div>
</template>
<script setup lang="ts">
import { IDevice } from "interfaces/IDevice";
import { useToast, POSITION } from "vue-toastification";
import { useDeviceStore } from "~/store/device";
//store
const deviceStore = useDeviceStore();
//ending store

const toast = useToast();

const prop = defineProps({
  validHeaderCard: { type: Boolean, default: true },
  validModalIncident: { type: Boolean, default: true },
  dataDevice: { type: Array as PropType<IDevice[]>, required: true },
  msgCardEmpty: { type: String, default: '', required: true }
});

const emit = defineEmits(["edit-device", "close-all-modal", "create-incident"]);

//ref
const clickEdit = ref<boolean>(false);
const clickDelete = ref<boolean>(false);

//call function
const editDevice = (value: IDevice, index: number) => {
  clickEdit.value = !clickEdit.value;
  deviceStore.deviceSelection(value, index)
  emit("edit-device", clickEdit.value);
};

const closeAllModal = () => {
  clickEdit.value = !clickEdit.value;
  clickDelete.value = !clickDelete.value;
  emit("close-all-modal");
}

const createIncident = async (deviceSelect: IDevice) => {
  emit("create-incident", deviceSelect);
};

const clickRemoveDevice = (event: boolean) => {
  clickDelete.value = event;
  emit("close-all-modal", true);

};

const typeImg = (value: IDevice) => value.deviceBrand?.toLocaleUpperCase() === 'apple'.toUpperCase() || value.brand?.toLocaleUpperCase() === 'apple'.toUpperCase() ? '../assets/img/smartmockups_lkml0iyz_2.svg' : '../assets/img/smartmockups_lkml2uwz_2_other.svg';
// ending function

//computed
const arryDeviceComputed = computed(() => {
  return prop.dataDevice;
});



// const validModal = computed(() => {
//   return (!prop.validHeaderCard && !prop.validModalIncident)
// })

//const deviceSelection = computed(() => deviceStore.deviceSelected)
</script>

<style lang="scss" scoped>
.slide-content {
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  width: calc(95vw - 100px);
  overflow-x: auto;
  height: 100%;
  padding: 0.5rem 0;

  .empty-device {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: calc(40vh - 131px);

    span {
      color: rgba(0, 0, 0, 0.38);
      text-align: center;
      font-size: 12px;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.96px;
    }
  }

  .slide-device {
    display: flex;
    gap: 16px;
    flex-direction: column;
    min-width: 293px;
    min-height: 205px;
    background: white;
    box-shadow: 0px 1.5px 2.8px 0px rgba(0, 0, 0, 0.1);
    padding: 16px;

    &>header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      height: auto;

      a {
        display: flex;
        cursor: pointer;

        img {
          width: 33.739px;
          height: auto;
          padding: 3px 9px;
        }
      }
    }

    main {
      &>.device {
        display: flex;
        gap: 16px;
        align-items: center;
        height: 100%;

        &>img {
          width: 105px;
          height: 140px;
        }

        .info {
          display: flex;
          flex-direction: column;
          gap: 8px;

          &.info-inc {
            width: 100%;
            height: 100%;
            justify-content: space-around;

            .device-incident {
              display: flex;
              gap: 4px;
              align-items: center;
              width: 100%;
              height: auto;

              img {
                display: flex;
                width: 17.299px;
                height: 17.299px;
                padding: 0px 1.299px 1.299px 0px;
                justify-content: center;
                align-items: center;
              }

              h2 {
                color: rgba(0, 0, 0, 0.87);
                font-size: 12px;
                font-weight: 600;
                line-height: normal;
                letter-spacing: 0.132px;
              }
            }
          }

          .device-inc {
            width: auto;
            padding: 0 !important;
          }

          ul {
            display: flex;
            flex-direction: column;
            gap: 4px;
            width: 100%;
            height: auto;
            list-style: none;
            padding-bottom: 25px;

            li {
              color: rgba(0, 0, 0, 0.6);
              font-size: 14px;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 0.11px;

              h2 {
                color: rgba(0, 0, 0, 0.6);
                font-size: 12px;
                font-weight: 600;
                line-height: normal;
                letter-spacing: 0.132px;
              }
            }
          }

          .btn-primary {
            border-radius: 2.812px;
            padding: 4px 11.246px;
            width: 100%;
            min-width: 140px;
            height: 28px;
            color: #171615;
            font-size: 12px;
            font-weight: 500;
            line-height: 19.073px;
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .slide-content {
    width: 100%;


    .empty-device {
      display: flex;
      align-items: center;
      margin: 0 auto;
      width: 70%;
      height: calc(40vh - 131px);

      span {
        color: rgba(0, 0, 0, 0.38);
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.96px;
      }
    }


  }
}
</style>
