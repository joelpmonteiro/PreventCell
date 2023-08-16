export interface IUser {
    email: string;
    docId: string;
    psswd: string;

}

export interface IUseAuthStore {
    docId: string;
    psswd: string;
    repeatPwd?: string
}


export interface IDeviceData {
    img: string,
    surname: string,
    deviceMarker: string,
    model: string
    imei: string,
    operator: string,
    status: string

}

export interface IUserCustomer {
    name: string,
    dataNasc: string,
    cpf: string,
    cep: string,
    city: string,
    uf: string,
    address: string,
    numero: number | string,
    complement: string,
    gender: string
}

export interface IUserChangePassword {
    pwd: string,
    repeatPwd: string
}

export interface IUserChangePin {
    pin: string,
    repeatPin: string
}