
import { defineStore } from "pinia";
import { IUseAuthStore } from "../interfaces/IUseAuthStore";

const api = 'http://localhost:3333/Prod'

export const useStore = defineStore("authenticated", () => {
    const authenticated = ref<boolean>(false);
    const loading = ref<boolean>(false);
    const message = ref<string>("");
    const errorHandler = ref<any>()
    async function actionAuthen(userLogin: IUseAuthStore) {

        console.log('pinia login', userLogin)
        const { data, error, execute, refresh, status }: any = await useFetch(`${api}/login/authenticate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: userLogin
        });
        //loading.value = status;
        if (data.value) {
            const token = useCookie('token');
            token.value = data?.value?.token;
            authenticated.value = true;
            message.value = `Login feito com sucesso! ${data?.message}`
            errorHandler.value = error;
        }


    }

    return { actionAuthen, authenticated, loading, message, errorHandler }

});
