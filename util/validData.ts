import { IUserCustomer } from "interfaces/IUseAuthStore";

export const validateCustomer = (item: IUserCustomer) => {

    return item.name && item.address && item.cep && item.city && item.cpf && item.dataNasc && item.numero && item.uf ? true : false
}