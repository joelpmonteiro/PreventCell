import { ICustomer, IDevice, IDeviceIncident } from "interfaces/IDevice";
import { defineStore } from "pinia";
import { useToast, POSITION } from "vue-toastification";

const api = "https://hw1cepyr3g.execute-api.sa-east-1.amazonaws.com/Prod";
const toast = useToast();

export const useDeviceStore = defineStore("device", () => {
  const deviceArray = ref<IDevice[]>([]);
  const deviceArrayIncident = ref<IDevice[]>([]);
  const deviceSelected = ref<IDevice>({
    imei: "",
    brand: "",
    deviceModel: "",
    deviceModelNumber: "",
    deviceName: "",
    serialNumber: "",
    devicePhoneNumber: "",
    deviceType: "",
    docId: "",
    telcomName: "",
    deletedDate: "",
  });
  const deviceSelectedIndex = ref<number | undefined>();


  async function getAllDeviceByDocId(docId: string) {

    const data: any = await $fetch(`${api}/device/find-device`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        docId: docId,
      }, // body data type must match "Content-Type" header
    });

    if (data?.devices.length > 0) {
      deviceArray.value = data.devices.filter(
        (device: IDevice) => !device.isDeleted
      );
    }

  }

  async function getAllDeviceIncidentBy(docId: string) {
    try {
      const data: any = await $fetch(`${api}/incident/find-incident`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          CustomerDetails: {
            docId: docId,
          },
        }, // body data type must match "Content-Type" header
      });

      deviceArrayIncident.value = data["Incidents"];
    } catch (error) {
      throw error;
    }
  }

  /**
   * @returns {Promise<JSONResponse>}
   */
  async function addDeviceStore(device: IDevice) {
    await $fetch(`${api}/device/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        docId: device.docId,
        deviceName: device.deviceName,
        brand: device.brand,
        devicePhoneNumber: device.devicePhoneNumber.match(/\d/g)?.join(""),
        deviceModel: device.deviceModel,
        serialNumber: device.serialNumber,
        IMEI: device.imei,
        deviceType: device.deviceType,
        deviceModelNumber: device.deviceModelNumber,
        telcomName: device.telcomName,
      }, // body data type must match "Content-Type" header
    });
    if (useCookie<string>('phone').value === undefined && useCookie<string>('phone').value === '') {
      const phone = useCookie<string>('phone')
      phone.value = device.devicePhoneNumber
    }
  }
  function getIMEIExist(device: IDevice): Boolean {
    let item = false;
    if (deviceArray.value.length > 0 || deviceArrayIncident.value.length > 0) {
      item = deviceArray.value.find((value: IDevice) => value.imei === device.imei)?.imei ? true : false || deviceArrayIncident.value.find((value: IDevice) => value.deviceIMEI === device.imei)?.deviceIMEI ? true : false;
    }
    return item

  }
  async function editDeviceStore(device: IDevice, elementIndex: number) {
    deviceSelected.value = device;
    deviceArray.value[elementIndex] = device;

    toast.success("dispositivo alterado com sucesso", {
      timeout: 2000,
      position: POSITION.TOP_RIGHT,
    });
  }

  async function addDeviceIncident(device: IDevice, cpf: string) {

    await $fetch(`${api}/incident/create-incident`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        IncidentDetails: {
          incidentDate: "2023-03-08",
          incidentHour: "13:00:00",
          callOriginNumber: "1123456789",
          callOriginCity: "São Paulo",
          callOriginState: "São Paulo",
          CustomerInformation: {
            docId: cpf,
          },
          CustomerDeviceInformation: {
            deviceId: device.deviceId,
          },
          audioIncident: "",
        },
      }, // body data type must match "Content-Type" header
    });

    await deleteDeviceStore(device.deviceId ? device.deviceId : 0, true);
  }

  async function deleteDeviceStore(deviceId: number, actionsIncident: boolean) {
    try {
      const response: any = await $fetch(`${api}/device/disable-device`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          deviceId: deviceId,
        },
      });

      if (!actionsIncident) {
        toast.success(response.message, {
          timeout: 2000,
          position: POSITION.TOP_RIGHT,
        });
      }

      const indexToDelete = deviceArray.value.findIndex(
        (value) => value.deviceId === deviceId
      );

      if (indexToDelete !== -1) {
        deviceArray.value.splice(indexToDelete, 1);
      }
    } catch (error: any) {
      console.log(error);

      if (!actionsIncident) {
        toast.warning(error.message, {
          timeout: 2000,
          position: POSITION.TOP_RIGHT,
        });
        return;
      }

      throw error;
    }
  }



  function deviceSelection(device: IDevice, index: number) {
    deviceSelected.value = device;
    deviceSelectedIndex.value = index;
  }

  function deviceSelectEmpty() {
    deviceSelected.value = {
      imei: "",
      brand: "",
      deviceModel: "",
      deviceModelNumber: "",
      deviceName: "",
      serialNumber: "",
      devicePhoneNumber: "",
      deviceType: "",
      docId: "",
      operator: "",
      deletedDate: "",
    };
    deviceSelectedIndex.value = undefined;
  }

  const getDeviceSelect = computed(() => {
    return deviceSelected.value;
  });



  return {
    addDeviceStore,
    deviceArray,
    deviceArrayIncident,
    editDeviceStore,
    addDeviceIncident,
    deleteDeviceStore,
    deviceSelection,
    deviceSelected,
    deviceSelectedIndex,
    deviceSelectEmpty,
    getAllDeviceByDocId,
    getAllDeviceIncidentBy,
    getIMEIExist
  };
});
