import { defineStore } from "pinia";
import { IUseAuthStore } from "../interfaces/IUseAuthStore";
import { formatDateEnUs } from "~/util/format-date";
import { ICustomer } from "interfaces/IDevice";
import { useToast, POSITION } from "vue-toastification";
import { Router } from ".nuxt/vue-router";

const api = "http://localhost:3333/Prod";

const toast = useToast();

export const useStore = defineStore("authenticated", () => {
  const authenticated = ref<boolean>(false);
  const loading = ref<boolean>(false);
  const userCustomer = ref<ICustomer>({
    docId: "",
    customerName: "",
    customerType: "",
    customerGender: "",
    customerBirthDate: "",
    customerAddress: "",
    customerAddressNumber: "",
    customerAddressComplement: "",
    customerAddressCity: "",
    customerAddressState: "",
    customerResidencePhoneNumber: "",
    customerMobilePhoneNumber: "",
    zipcode: "",
    email: ""
  });
  const userLogged = ref<{ email: string; cpf: string }>({
    email: "",
    cpf: "",
  });
  const message = ref<string>("");
  const errorHandler = ref<any>();

  async function actionAuthen(userLogin: IUseAuthStore) {
    try {
      const { data, error, execute, refresh, status }: any = await useFetch(
        `${api}/login/authenticate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: userLogin,
        }
      );
      //loading.value = status;
      if (data.value) {
        const token = useCookie("token");
        const cpf = useCookie("cpf");
        const mail = useCookie("email");
        const hasPin = useCookie("hasPin");
        token.value = data?.value?.token;
        authenticated.value = true;
        userLogged.value.cpf = userLogin.docId;
        userLogged.value.email = data?.value?.email;
        cpf.value = userLogin.docId;
        mail.value = data?.value?.email;
        hasPin.value = data?.value?.hasPinNumber
        message.value = `Login feito com sucesso!`;

        errorHandler.value = error;
      }
      return { data, error, execute, refresh, status };

    } catch (error) {
      throw error
    }


  }

  async function getCustomer(docId: number | string, user_email: string) {
    try {
      const { data, error, execute, refresh, status }: any = await useFetch(`${api}/customer/find-customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          docId: docId,
        }, // body data type must match "Content-Type" header
      });


      if (error.value && [400, 401, 402, 403, 404, 500, 501, 502, 503].includes(error.value.statusCode)) {
        if (error.value.statusCode === 401) {
          return { data, error }
        }
        throw error
      }
      const dateF = new Date(data.value.customer.customerBirthDate);
      const newDate = formatDateEnUs(dateF)
      data.value.customer.customerBirthDate = newDate;

      userCustomer.value = { ...data.value.customer, email: user_email };
      console.log(userCustomer.value)
      const customer = useCookie<ICustomer>('customer');
      customer.value = userCustomer.value;
      //sessionStorage.setItem('customer', JSON.stringify(data.value.customer));

      return { data, error, execute, refresh, status }

    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function closeDashboard(router: Router) {
    sessionStorage.clear()
    localStorage.clear();
    useCookie('customer').value = null;
    useCookie('token').value = null;
    useCookie('email').value = null;
    useCookie('cpf').value = null;
    useCookie('hasPin').value = null;
    setTimeout(() => {
      router.push({
        path: '/'
      })
    }, 800)


  }

  const getUserLogged = computed(() => {
    return userLogged.value?.cpf === "" && userLogged.value?.email === ""
      ? { email: useCookie("email")?.value, cpf: useCookie("cpf")?.value }
      : { cpf: userLogged.value?.cpf, email: userLogged.value?.email };
  });

  const getUserCustomer = computed(() => userCustomer.value.docId ? userCustomer.value as ICustomer : useCookie<ICustomer>('customer')?.value);

  return {
    actionAuthen, getUserLogged, getCustomer, getUserCustomer, closeDashboard
  };
});
