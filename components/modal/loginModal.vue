<template >
  <LazyBaseModal :nameBtn="'Entrar'" :checkBtnValid="availableProps" :actionBtn="false"
    :class="[openModal ? classModal : '']" @form-action="login" :typeModal="'login-content'"
    @close-modal="$emit('close-modal', false)">
    <template v-slot:header>
      <div class="welcome">
        <h1 class="fs-4 text-uppercase">Olá de novo!</h1>
        <span>Preencha os campos abaixo para acessar sua conta</span>
      </div>
    </template>
    <template v-slot:body>
      <div class="card-body">

        <div class="form-input">
          <label class="label_floating" for="cpf">
            <input type="text" name="cpf" id="password" placeholder=" " v-maska data-maska="['###.###.###-##']"
              v-model="cpf" :required="true">
            <span class="span_floating">CPF*</span>
          </label>
        </div>

        <div class="form-group">
          <label class="label_floating" for="password">
            <input type="password" name="password" id="password" placeholder=" " v-model="psswd" :required="true">
            <span class="span_floating">Senha*</span>
          </label>
          <span>Deve conter no mínimo 6 dígitos</span>

          <div class="forgotPassword">
            <a href=""><span class="text-uppercase">Esqueceu a senha?</span></a>
          </div>
        </div>


      </div>
    </template>

    <template v-slot:mini_footer>
      <div class="already">
        <span>Não tem conta <a @click.prevent="$emit('open-btn', true)">Cadastre-se</a> </span>
      </div>
    </template>
  </LazyBaseModal>
</template>

<script lang="ts" setup>
//useStore
import { useStore } from '~/store/auth';
import { useToast, POSITION } from "vue-toastification";
definePageMeta({
  middleware: ["auth"]
});
//toast
const toast = useToast();

//definRouter
const router = useRouter();

const { actionAuthen, getUserLogged, getCustomer } = useStore()

defineProps<{
  classModal: string
  openModal: boolean,

}>();


const cpf = ref<string>("");
const psswd = ref<string>("");


//computed properties
const availableProps = computed(() => {
  return ((cpf.value !== '' && cpf.value !== undefined) && ((psswd.value !== '' && psswd.value !== undefined) && psswd.value.length >= 6) ? true : false)
})

//callfunction
const login = async (form: any) => {
  try {

    const cpfWithPoints: any = cpf.value.match(/\d/g)?.join("");

    const { data, error, execute, refresh, status } = await actionAuthen({ docId: cpfWithPoints, psswd: psswd.value });

    //get cookie email
    const email_cookie: string = useCookie('email')?.value ?? '';
    const { data: dataCustomer, error: errorCustomer } = await getCustomer(cpfWithPoints, getUserLogged?.email ? getUserLogged?.email : email_cookie)

    if (errorCustomer.value && [401].includes(errorCustomer.value.statusCode)) {
      toast.info('você será redirecionado para terminar o cadastro!', {
        timeout: 2000,
        position: POSITION.TOP_RIGHT
      });

      setTimeout(() => {
        router.push(`/register/${cpfWithPoints}`)
      }, 800)
      return
    }

    if (error.value !== null && error.value.statusCode === 400) {
      toast.warning(error.value.data.message, {
        timeout: 2000,
        position: POSITION.TOP_RIGHT
      });

      return;
    }
    toast.success(data.value.message, {
      timeout: 2000,
      position: POSITION.TOP_RIGHT
    });

    setTimeout(() => {
      emptyValue();
      router.push('/dashboard/home')

    }, 800)






  } catch (error) {
    console.log(error);
    toast.error("Erro ao efetuar login", {
      timeout: 2000,
      position: POSITION.TOP_RIGHT
    });
  }
}

const emptyValue = () => {
  cpf.value = ''
  psswd.value = ''
}

</script>

<style lang="scss" scoped>
.card-body {

  .form-input,
  .form-group {
    >input {
      color: white;

      &:focus {
        outline: none;
      }



      &:focus-visible {
        border: .135rem solid #687680;
      }
    }

  }
}
</style>