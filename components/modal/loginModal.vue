<template >
    <LazyBaseModal :nameBtn="'Entrar'" :actionBtn="false" :class="[openModal ? classModal : '']" :typeModal="'height:594px'"
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
                    <input type="text" placeholder="CPF*">
                </div>

                <div class="form-group">
                    <input type="text" placeholder="Senha*">
                    <span>Deve conter no mínimo 6 dígitos</span>

                    <div class="forgotPassword">
                        <a href=""><span class="text-uppercase">Esqueceu a senha?</span></a>
                    </div>
                </div>


            </div>
        </template>

        <template v-slot:mini_footer>
            <div class="already">
                <span>Não tem conta <a href="#">Cadastre-se</a> </span>
            </div>
        </template>
    </LazyBaseModal>
</template>

<script lang="ts" setup>

defineProps<{
    classModal: string
    openModal: boolean,

}>();





</script>