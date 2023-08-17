export interface IPin {
    pin: string,
    repeatPin: string
}

export interface IDefinePin {
    docId: number | string,
    pinNumber: number | string
}

export interface IValidateAccount {
    email: string,
    code: string
}