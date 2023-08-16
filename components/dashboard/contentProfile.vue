<template>
    <section class="perfil">
        <div class="title">
            <h2>
                Perfil
            </h2>
            <span>Para maior segurança, mantenha os dados do seu perfil sempre atualizados</span>
        </div>

        <div class="table">
            <div class="table-title">
                <a @click.prevent="activestep.step1 = true" :class="{ 'active_tabs': activestep.step1 }">Informações
                    básicas</a>
                <span></span>
                <a @click.prevent="activestep.step1 = false" :class="{ 'active_tabs': !activestep.step1 }">Endereço
                    residencial</a>
            </div>

            <div class="data-info">
                <form action="post">
                    <div class="step" v-if="activestep.step1">
                        <div class="flex-group">

                            <div class="form-group w-40">
                                <label for="cpf">CPF</label>
                                <input type="text" class="input-group" v-maska data-maska="['###.###.###-##']"
                                    placeholder="cpf" v-model="dados_user.docId">
                            </div>

                            <div class="form-group w-100">
                                <label for="email">E-mail</label>
                                <input type="text" class="input-group" placeholder="email" v-model="dados_user.email">
                            </div>
                        </div>

                        <div class="flex-group">
                            <div class="form-group w-100">
                                <label for="nome">Nome</label>
                                <input type="text" class="input-group" placeholder="Nome" v-model="dados_user.customerName">
                            </div>

                            <div class="form-group w-50">
                                <label for="dataNascimento">Data de Nascimento</label>
                                <input type="date" class="input-group" placeholder="##/##/####"
                                    v-model="dados_user.customerBirthDate">
                            </div>
                        </div>

                        <div class="flex-group">
                            <div class="form-group w-100">
                                <label for="nome">Telefone celular</label>
                                <input type="text" class="input-group" v-maska data-maska="+55 (##) # ####-####"
                                    placeholder="Telefone celular" v-model="dados_user.customerMobilePhoneNumber">
                            </div>

                            <div class="form-group w-100">
                                <label for="email">Telefone residencial</label>
                                <input type="text" class="input-group" placeholder="Telefone residencial"
                                    v-model="dados_user.customerResidencePhoneNumber">
                            </div>
                        </div>
                    </div>

                    <div class="step" v-else>

                        <div class="flex-group">
                            <div class="form-group">
                                <label for="CEP">CEP</label>
                                <input type="text" class="input-group" v-maska data-maska="['#####-###']"
                                    v-model="dados_user.customerZipcode" placeholder="CEP">
                            </div>
                        </div>

                        <div class="flex-group">
                            <div class="form-group w-100">
                                <label for="cpf">Endereço</label>
                                <input type="text" class="input-group" placeholder="Endereço"
                                    v-model="dados_user.customerAddress">
                            </div>
                        </div>

                        <div class="flex-group">
                            <div class="form-group">
                                <label for="num">Número</label>
                                <input type="text" class="input-group" placeholder="Número"
                                    v-model="dados_user.customerAddressNumber">
                            </div>

                            <div class="form-group w-100">
                                <label for="complement">Complemento</label>
                                <input type="text" class="input-group" placeholder="Complemento"
                                    v-model="dados_user.customerAddressComplement">
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    </section>
</template>

<script lang="ts" setup>
import { ICustomer } from "interfaces/IDevice";
import { useDeviceStore } from "~/store/device";
import { useStore } from "~/store/auth";

const activestep = ref<{ step1: boolean, step2: boolean }>({ step1: true, step2: false })
const dados_user = ref<ICustomer | any>({
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
    customerZipcode: '',
    email: ""

})


//Storage 
const storeDevice = useDeviceStore();
const storeAuth = useStore()

onMounted(() => {
    try {
        if (storeAuth.getUserCustomer) dados_user.value = { ...storeAuth.getUserCustomer, customerMobilePhoneNumber: useCookie('phone')?.value }
    } catch (error) {
        console.error(error)
    }
})




</script>

<style lang="scss" scoped>
.w-100 {
    width: 100%;
}

.w-50 {
    width: 50%;
}

.w-40 {
    width: 40%;
}

main {
    &>.perfil {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 81px 0;
        width: 60%;
        margin-left: auto;
        margin-right: auto;

        .title {
            display: flex;
            gap: 13px;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 32px;

            h2 {
                color: rgba(0, 0, 0, 0.87);
                /* Body 1 */
                font-size: 20px;
                font-weight: bold;
                line-height: 150%;
                /* 30px */
                letter-spacing: 0.30px;
            }

            span {
                color: rgba(0, 0, 0, 0.60);
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.176px;
            }
        }

    }

    .table {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        .table-title {
            display: flex;
            gap: 100px;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background: #E5EDF3;
            padding: 12px 0;

            a {
                color: rgba(0, 0, 0, 0.87);
                text-align: center;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.15px;
                cursor: pointer;

                &:hover {
                    color: rgba(0, 0, 0, 0.87);
                    font-weight: bolder;

                }

                &.active_tabs {
                    color: rgba(0, 0, 0, 0.87);
                    font-weight: bolder;
                }
            }

            span:nth-child(2) {
                border-right: 1px solid #BDBDBD;
                height: 32px;
            }
        }
    }

    .data-info {
        form {
            display: flex;

            width: 100%;
            height: auto;
            align-items: center;
            // justify-content: center;
            padding: 44px 0;

            div.step {
                display: flex;
                gap: 29px;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;

                .flex-group {
                    display: flex;
                    gap: 16px;
                    width: 100%;
                    height: auto;
                    flex-direction: row;

                    .form-group {
                        display: flex;
                        gap: 5px;
                        flex-direction: column;
                        align-items: flex-start;

                        label {
                            padding: 0 12px;
                            color: rgba(0, 0, 0, 0.60);
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;
                            letter-spacing: 0.035px;
                        }

                        .input-group {
                            width: 100%;
                            height: 44px;
                            padding: 0 12px;
                            border-radius: 4px;
                            border: 0.8px solid $subtitleColor;

                            &:focus {
                                outline: none;
                            }

                            &:focus-visible {
                                outline: 2px solid $subtitleColor
                            }
                        }
                    }
                }
            }


        }
    }
}

@media(max-width:600px) {
    main {
        &>.perfil {
            width: 100%;
        }

        .table {
            .table-title {
                gap: 5px;

                a {
                    width: 100%;
                }
            }
        }
    }
}
</style>