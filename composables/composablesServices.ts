import { JSONResponse } from "../interfaces/ITypeResponse";
import { IUseAuthStore, IUser, IUserCustomer } from "interfaces/IUseAuthStore";
import axios from "axios"
import { IDefinePin, IValidateAccount } from "interfaces/IPin";
const api = 'https://hw1cepyr3g.execute-api.sa-east-1.amazonaws.com/Prod'

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
        validatePin,
        validateAccount
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
        //return { data, status };
    } catch (error) {
        console.log('error: composables: ', error)
        throw error
    }
}

async function validateAccount({ email, code }: IValidateAccount): Promise<any> {
    try {
        console.log('valores: ', email, code)
        return await $fetch(`${api}/login/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                hashValidate: code,
                email: email
            }, // body data type must match "Content-Type" header

        })
        //console.log({ data, status })
        //return { data, status };
    } catch (error) {
        console.log('error: composables: ', error)
        throw error
    }
}