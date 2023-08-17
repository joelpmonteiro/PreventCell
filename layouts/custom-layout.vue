<template>
    <div class="layout-header" v-if="!headerTypeRouter.check">
        <LazyHeaderChildhead :styleTypeRouter="styleTypeRouter" :layout="'custom-layout'"></LazyHeaderChildhead>
    </div>

    <RouterView></RouterView>
</template>

<script lang="ts">
export default defineComponent({
    name: "custom-layout",
    setup() {
        const route = useRoute();
        const { tokenId } = route?.params || {};

        // variable
        const rootColor = ref();

        const setRootColor = () => rootColor.value = getComputedStyle(document.documentElement).getPropertyValue('--background-body');

        const changeRootColor = () => {
            document.documentElement.style.setProperty('--background-body', headerTypeRouter.value.color);
            setRootColor();
        }

        const styleTypeRouter = computed(() => {
            return route.name === 'register-id' ? { height: '96px', colorLogo: 'black', background: 'transparent' } : { height: '88px', colorLogo: 'white' };
        })
        const headerTypeRouter = computed(() => ['email-id', 'password-new-pwd-id', 'password-recovery-id'].includes(route.name ? route.name?.toString() : '') ? { check: true, color: '#E8E8E8' } : { check: false, color: '#F9F9FB' })

        onBeforeMount(changeRootColor)
        return { styleTypeRouter, headerTypeRouter, changeRootColor }
    }
})
</script>

<style lang="scss" >
:root {
    --background-body: #F9F9FB;
}


@media screen and (max-width:600px) {
    header {
        height: v-bind('styleTypeRouter.height') !important;
    }
}
</style>

