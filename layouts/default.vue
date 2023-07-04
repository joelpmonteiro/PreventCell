<template>
  <div>
    <HeaderTheHeader @open-btn="openModal" @open-modal-login="openLogin"></HeaderTheHeader>
    <ModalFormModal :classModal="'active'" :openModal="open" @close-modal="close"></ModalFormModal>
    <ModalLoginModal :classModal="'active'" :openModal="modalLogin" @close-modal="close"></ModalLoginModal>

    <slot></slot>

    <FooterTheFooter></FooterTheFooter>

  </div>
</template>

<script lang="ts">

export default defineComponent({
  name: 'IndexPage1',
  setup() {
    const open = ref<boolean>(false);
    const modalLogin = ref<boolean>(false);
    //const checkStatus = ref<boolean>(false)
    const openModal = (value: boolean) => {
      open.value = value
    }

    const openLogin = (value: boolean) => {
      modalLogin.value = value
    }

    const close = (value: boolean) => {
      open.value = value;
      modalLogin.value = value
    }

    return { openModal, close, open, openLogin, modalLogin }
  }


})
</script>

<style lang="scss"></style>
