<template>
  <div class="background">
    <HeaderTheHeader @open-btn="openModal" @open-modal-login="openLogin" v-if="!headerTypeRouter"></HeaderTheHeader>
    <!-- <header v-else></header> -->
    <ModalFormModal :classModal="'active'" :openModal="open" @close-modal="close" @open-child-modal="openLogin">
    </ModalFormModal>
    <ModalLoginModal :classModal="'active'" @open-btn="openModal" :openModal="modalLogin" @close-modal="close">
    </ModalLoginModal>

    <RouterView></RouterView>

    <FooterTheFooter :colorBackground="!headerTypeRouter">
      <template v-slot:childFooter>
        <LazyFooterChildFooter v-if="!headerTypeRouter"></LazyFooterChildFooter>
        <LazyFooterMailFooter v-else></LazyFooterMailFooter>
      </template>
    </FooterTheFooter>

  </div>
</template>

<script lang="ts">

export default defineComponent({
  name: 'layout-default',
  setup() {
    //useRoute
    const route = useRoute();
    const open = ref<boolean>(false);
    const modalLogin = ref<boolean>(false);

    //const checkStatus = ref<boolean>(false)
    const openModal = (value: boolean) => {
      if (modalLogin.value) modalLogin.value = !modalLogin.value
      open.value = value
    }

    const openLogin = (value: boolean) => {
      if (open.value) open.value = !open.value
      modalLogin.value = value
    }

    const close = (value: boolean) => {
      open.value = value;
      modalLogin.value = value
    }
    const headerTypeRouter = computed(() => ['email-id', 'password-new-pwd-id', 'password-recovery-id', 'email-recovery-id'].includes(route.name ? route.name?.toString() : '') ? true : false)

    return { openModal, close, open, openLogin, modalLogin, headerTypeRouter }
  }


})
</script>

<style lang="scss" scoped>
// .background {
//   background: var(--background-body);
// }
</style>
