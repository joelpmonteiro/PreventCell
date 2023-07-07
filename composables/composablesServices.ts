import { JSONResponse } from "../interfaces/ITypeResponse";
import { IUser } from "interfaces/IUseAuthStore";
import axios from "axios"
const api = 'http://localhost:3333/Prod'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const api2 = axios.create({
    baseURL: "https://hw1cepyr3g.execute-api.sa-east-1.amazonaws.com/Prod",
});

export default function useHandler() {
    return {
        createAccount
    }

}

/**
 * @desc Register new user
 * @param user User to register
 * @returns {Promise<JSONResponse>}
 */
async function createAccount(user: IUser): Promise<any> {
    return await $fetch(`${api}/login/create-login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: user, // body data type must match "Content-Type" header

    })



}