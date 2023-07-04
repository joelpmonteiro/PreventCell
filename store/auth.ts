
import { defineStore } from "pinia";
import { IUseAuthStore } from "../interfaces/IUseAuthStore";


export const useStore = defineStore("authenticated", () => {
    const authenticated = ref<boolean>();
    const loading = ref<boolean>();
    async function actionAuthen({ username, cpf, password }: IUseAuthStore) {
        try {
            const { status, data }: any = await useFetch("", {
                method: "POST",
                headers: { "Content-Type": "application/" },
                body: { username, cpf, password },
            });
            loading.value = status;

            if (data.value) {
                const token = useCookie('token'); // useCookie new hook in nuxt 3
                token.value = data?.value?.token; // set token to cookie
                authenticated.value = true; // set authenticated  state value to true
            }
        } catch (error) {
            console.log(error);
        }
    }

    return { actionAuthen, authenticated, loading }

});
