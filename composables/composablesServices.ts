import { JSONResponse } from "../interfaces/ITypeResponse";
import { IUseAuthStore, IUser, IUserCustomer } from "interfaces/IUseAuthStore";
import axios from "axios"
import { IDefinePin } from "interfaces/IPin";
const api = 'http://localhost:3333/Prod'

//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// const api2 = axios.create({
//     baseURL: "https://hw1cepyr3g.execute-api.sa-east-1.amazonaws.com/Prod",
// });

export default function useHandler() {
    return {
        createAccount,
        createCustomer,
        changePassword,
        createPin,
        validatePin
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

async function changePassword(userChange: IUseAuthStore): Promise<JSONResponse> {
    return await $fetch(`${api}/login/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: userChange, // body data type must match "Content-Type" header

    })
}

async function createCustomer(userCustomer: IUserCustomer): Promise<JSONResponse> {
    return await $fetch(`${api}/customer/create-customer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            "CustomerDetails": {
                "customerType": "PF",
                "docId": userCustomer.cpf,
                "customerName": userCustomer.name,
                "customerGender": userCustomer.gender.toUpperCase(),
                "birthDate": userCustomer.dataNasc,
                "address": userCustomer.address,
                "addressNumber": userCustomer.numero,
                "addressComplement": userCustomer.complement,
                "addressCity": userCustomer.city,
                "addressState": userCustomer.uf,
                "residencePhoneNumber": "",
                "mobilePhoneNumber": "",
                "zipcode": userCustomer.cep,

            },
            "Devices": []
        }, // body data type must match "Content-Type" header

    })
}

async function createPin(pin: IDefinePin): Promise<JSONResponse> {
    try {
        return await $fetch(`${api}/login/define-pin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: pin, // body data type must match "Content-Type" header

        })
    } catch (error) {
        throw error
    }
}
async function validatePin({ docId, pinNumber }: IDefinePin): Promise<any> {
    try {
        return await $fetch(`${api}/login/validate-pin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                docId: docId,
                pinNumber: pinNumber
            }, // body data type must match "Content-Type" header

        })
        //console.log({ data, status })
        //return { data, status };
    } catch (error) {
        console.log('error: composables: ', error)
        throw error
    }
}