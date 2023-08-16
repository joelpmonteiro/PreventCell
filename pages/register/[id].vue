<template>
    <main>
        <div class="backgroung">
            <h1 class="text-uppercase">
                Sua segurança está a poucos passos
            </h1>
        </div>

        <div class="register_costumer">
            <div class="title">
                <h1 class="text-uppercase">Completo seu Cadastro</h1>
                <span>Essas informações vão ajudar a garantir a sua segurança</span>
            </div>

            <form action="post" @submit.prevent="register_customer">
                <div class="step" :class="{ 'active-step': activeSteps.step }">
                    <div class="form-group">
                        <label class="label_floating" for="name">
                            <input type="text" name="name" id="name" v-model="user_costumes.name" placeholder=""
                                :required="true">
                            <span class="span_floating">Nome</span>
                        </label>
                    </div>

                    <div class="form-flex">
                        <div class="form-group w-60">
                            <label class="label_floating" for="dataNasc">
                                <input type="date" name="dataNasc" id="dataNasc" v-model="user_costumes.dataNasc"
                                    placeholder="" :required="true">
                                <span class="span_floating">Data de nascimento</span>
                            </label>
                        </div>

                        <div class="form-group w-40">

                            <label class="label_floating" for="numero">
                                <input type="text" v-model="cpf" name="cpf" id="cpf" v-maska data-maska="['###.###.###-##']"
                                    placeholder="" :readonly="true" :required="true">
                                <span class="span_floating">CPF</span>
                            </label>
                        </div>
                    </div>

                    <div class="form-group">
                        <!-- <LazyCustomSelect :options="['Feminino', 'Masculino', 'Prefiro não identificar']"
                            :defaultItem="'Selecione Genêro'" class="select" @input="user_costumes.gender = $event">
                        </LazyCustomSelect> -->

                        <label class="label_floating" for="numero">
                            <input type="text" v-model="user_costumes.gender" name="gender" id="gender" placeholder=""
                                :required="true">
                            <span class="span_floating">Gênero</span>
                        </label>
                    </div>
                </div>

                <div class="stepnext">

                    <button v-if="activeSteps.step"
                        @click.prevent="activeSteps.step2 = !activeSteps.step2, activeSteps.step = !activeSteps.step"
                        class="btn-secondary btn-color-secondary text-uppercase" :class="{ 'step-d': !maxScreenWidth }">
                        Proximo
                    </button>
                </div>


                <div class="step-2" :class="{ 'active-step': activeSteps.step2 }">
                    <div class="form-group w-50">

                        <label class="label_floating" for="numero">
                            <input type="text" v-model="user_costumes.cep" v-maska data-maska="['#####-###']" @change="cep"
                                name="cep" id="cep" placeholder="" :required="true">
                            <span class="span_floating">CEP</span>
                        </label>

                    </div>

                    <div class="form-flex">
                        <div class="form-group">

                            <label class="label_floating" for="numero">
                                <input type="text" v-model="user_costumes.city" name="city" id="city" placeholder=""
                                    :required="true">
                                <span class="span_floating">Cidade</span>
                            </label>

                        </div>

                        <div class="form-group w-10">
                            <label class="label_floating" for="uf">
                                <input type="text" :maxlength="2" v-model="user_costumes.uf" name="uf" id="uf"
                                    placeholder="" :required="true">
                                <span class="span_floating">UF</span>
                            </label>
                        </div>
                    </div>

                    <div class="form-group">

                        <label class="label_floating" for="address">
                            <input type="text" v-model="user_costumes.address" name="address" id="address" placeholder=""
                                :required="true">
                            <span class="span_floating">Endereço</span>
                        </label>
                    </div>

                    <div class="form-flex">
                        <div class="form-group">
                            <label class="label_floating" for="numero">
                                <input type="text" id="numero" name="numero" v-model="user_costumes.numero" placeholder=""
                                    :required="true">
                                <span class="span_floating">Número</span>
                            </label>
                        </div>
                        <div class="form-group gap-auto">
                            <label class="label_floating" for="complemento">
                                <input type="text" name="complemento" id="complemento" v-model="user_costumes.complement"
                                    placeholder="" :required="true">
                                <span class="span_floating">Complemento</span>
                            </label>
                            <span class="opcional">(opcional)</span>
                        </div>
                    </div>
                </div>

                <button v-if="activeSteps.step2 || !maxScreenWidth"
                    class="btn-secondary  btn-color-secondary text-uppercase">
                    Cadastrar
                </button>
            </form>

        </div>

    </main>
</template>

<script lang='ts' setup>
import { IUserCustomer } from 'interfaces/IUseAuthStore';
import { useToast, POSITION } from 'vue-toastification';
import { validateCustomer } from '../../util/validData';
import useHandler from '~/composables/composablesServices'
import { useScreenWidth } from '~/composables/screen-width';
import useCep from '../../composables/services-cep'
definePageMeta({
    layout: 'custom-layout',
});

//composables
const { createCustomer } = useHandler()
const screen = useScreenWidth();
const { getCep } = useCep()

//useRoute
const router = useRouter();
const route = useRoute();
const { tokenId } = route?.params || {};

//toast
const toast = useToast();

//variable
const activeSteps = ref({
    step: true,
    step2: false,
})
const cpf = ref<string>()


const user_costumes = ref<IUserCustomer>({
    name: '',
    dataNasc: '',
    cep: '',
    cpf: '',
    city: '',
    uf: '',
    address: '',
    numero: '',
    complement: '',
    gender: ''
})

const maxScreenWidth = computed(() => {
    return screen.value <= 999 ? true : false;
})

//call function
const register_customer = async () => {
    try {
        //sem caracteres no cpf
        const cpfWithPoints: any = cpf.value?.match(/\d/g)?.join("");
        const cepWithOutPoints: any = user_costumes.value.cep?.match(/\d/g)?.join("")
        user_costumes.value.cpf = cpfWithPoints;
        user_costumes.value.cep = cepWithOutPoints
        const valid: any = validateCustomer(user_costumes.value);
        if (valid) {
            await createCustomer(user_costumes.value);
            toast.success('Cadastro feito com sucesso!', {
                timeout: 2000,
                position: POSITION.TOP_RIGHT
            });

            setTimeout(() => {
                router.push('/dashboard/home');
            }, 800)
        } else {
            toast.warning('Preencha os campos corretamente para prosseguir', {
                timeout: 2000,
                position: POSITION.TOP_RIGHT
            })
        }
    } catch (error: any) {
        console.log(error.response['_data'])
        if (error.response !== undefined && error.response['_data'].trace.code === "23505" && error.response['_data'].trace.length === 159) {
            toast.warning('Já Existe um cpf cadastrado', {
                timeout: 2000,
                position: POSITION.TOP_RIGHT
            })
        } else {
            toast.error('Erro ao cadastrar os dados do usuário', {
                timeout: 2000,
                position: POSITION.TOP_RIGHT
            })
        }

    }
}

const cep = async () => {
    const cpf: string = user_costumes.value.cep.replace('-', '');
    const data = await getCep(cpf);
    console.log(data)

    user_costumes.value.city = data.value.city;
    user_costumes.value.address = `${data.value.street} - ${data.value.neighborhood} - ${data.value.state}`;
    user_costumes.value.uf = data.value.state;
}
//ending call function

//beforeMounted
watch(() => route.params.id, async id => {
    console.log('watch: ', id);
    cpf.value = id as string;
})
onBeforeMount(() => {
    console.log("beforeMounted", route.params.id as string)
    if (useCookie('cpf').value) {
        cpf.value = useCookie('cpf')?.value ?? ''
    }

})
</script>

<style lang="scss" scoped>
main {
    display: flex;
    gap: 7.75rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 1400px;
    height: 100%;
    padding: 17px 20px;

    .step-d {
        display: none;
    }

    .stepnext {
        display: none;
    }

    .backgroung {
        background-image: url('~/assets/img/background-register.svg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        max-width: 460px;
        height: 100%;
        min-height: calc(90dvh - 100px);

        h1 {
            color: white;
            text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20);
            font-size: 32px;
            font-weight: 700;
            line-height: 38.4px;
            letter-spacing: 0.25px;
            padding: 36px 25px;
        }
    }

    .register_costumer {
        align-self: flex-start;

        .title {
            display: flex;
            gap: 5px;
            flex-direction: column;
            width: 100%;
            height: 100%;
            padding-bottom: 40px;

            h1 {
                color: rgba(0, 0, 0, 0.87);
                font-size: 24px;
                font-weight: 600;
                line-height: 120%;
                /* 28.8px */
                font-variant: small-caps;
            }

            span {
                color: rgba(0, 0, 0, 0.60);
                /* Body 2 */
                font-size: 16px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.5px;
            }
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 20px;
            flex: 1 0 auto;
            max-width: 459px;
            height: 100%;



            .label_floating {
                width: 100%;

                .span_floating {
                    left: 0.75rem;
                }
            }


            div.step,
            div.step-2 {
                display: flex;
                flex-direction: column;
                gap: 20px;

                .form-group {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    gap: 8px;
                    width: 100%;
                    height: auto;

                    input {
                        width: 100%;
                        height: 48px;
                        padding: 12px 12px 0 12px;
                        border-radius: 4px;
                        border: 0.75px solid $subtitleColor;
                        background: white;

                        &:focus {
                            outline: none;
                        }

                        &:focus-visible {
                            outline: 2px solid $subtitleColor;
                        }
                    }

                }

                .gap-auto {
                    gap: 0;
                }

                .opcional {
                    margin-left: .1rem;
                    font-size: 11px;
                    line-height: 17px;
                    color: grey;
                }
            }


            .form-flex {
                display: flex;
                gap: 16px;
                flex-direction: row;

                &>.form-group {
                    &:nth-child(1) {
                        min-width: 188px;
                    }

                    &:nth-child(2) {
                        min-width: 60px;
                    }
                }
            }

            button.btn-secondary {
                width: 100%;
                min-height: 45px;
                margin-top: 30px;
            }
        }

    }

    .w-60 {
        width: 60% !important;
    }

    .w-50 {
        width: 40% !important;
    }

    .w-40 {
        width: 40% !important;
    }

    .w-10 {
        width: 10% !important;
    }


}

.next-step {
    display: none;
}


@media screen and (max-width: 1399.98px) {
    main {
        min-width: 1200px;

    }
}

@media screen and (max-width: 600px) {
    main {
        min-width: 100%;
        padding: 65px 20px 0;
        min-height: calc(100dvh - 100px);

        .backgroung {
            display: none;
        }

        .stepnext {
            display: flex;
            width: 100%;
        }

        .register_costumer {
            form {
                max-width: 100%;
                gap: 35px;
                height: calc(80dvh - 100px);
                justify-content: space-between;

                div.step,
                div.step-2 {
                    display: none;

                    &.active-step {
                        display: flex;
                    }
                }

                .btn-secondary {
                    width: 100%;
                    min-height: 45px;
                    max-height: 45px;
                    margin: 50px 0;
                }
            }
        }

        .next-step {
            display: flex;
        }
    }
}

@media screen and (max-width: 767.98px) {
    main {
        min-width: 100%;
        padding: 65px 20px 0;
        min-height: calc(100dvh - 100px);

        .stepnext {
            display: flex;
            width: 100%;
        }

        .backgroung {
            display: none;
        }

        .register_costumer {
            form {
                max-width: 100%;
                gap: 35px;
                height: calc(80dvh - 100px);
                justify-content: space-between;

                div.step,
                div.step-2 {
                    display: none;

                    &.active-step {
                        display: flex;
                    }
                }

                .btn-secondary {
                    width: 100%;
                    min-height: 45px;
                    max-height: 45px;
                    margin: 50px 0;
                }
            }
        }

        .next-step {
            display: flex;
        }
    }
}

@media screen and (max-width: 991.98px) {
    main {
        min-width: 100%;
        padding: 65px 20px 0;
        min-height: calc(100dvh - 100px);

        .stepnext {
            display: flex;
            width: 100%;
        }

        .backgroung {
            display: none;
        }

        .register_costumer {
            form {
                max-width: 100%;
                gap: 35px;
                height: calc(80dvh - 100px);
                justify-content: space-between;

                div.step,
                div.step-2 {
                    display: none;

                    &.active-step {
                        display: flex;
                    }
                }

                .btn-secondary {
                    width: 100%;
                    min-height: 45px;
                    max-height: 45px;
                    margin: 50px 0;
                }
            }
        }

        .next-step {
            display: flex;
        }
    }
}
</style>
