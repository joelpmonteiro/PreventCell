import { useToast, POSITION } from "vue-toastification";

const api = 'https://brasilapi.com.br/api'
const toast = useToast();

export default function useCep() {
    return {
        getCep
    }
}

async function getCep(cep: string): Promise<any> {
    try {
        const { data, error } = await useFetch(`${api}/cep/v1/${cep}`);
        if (error.value !== null) {
            throw error.value;
        }
        return data
    } catch (error: any) {
        if (error.statusCode === 404) {
            toast.error(error.data.message, {
                timeout: 2000,
                position: POSITION.TOP_RIGHT,
            })

        } else {
            toast.error('Erro no serviço de busca via Cep', {
                timeout: 2000,
                position: POSITION.TOP_RIGHT,
            })
        }

        //throw error
    }
}