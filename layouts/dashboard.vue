<template>
    <div class="background">
        <div class="blur-filter"></div>
        <div class="layout-header">
            <LazyHeaderChildhead :layout="screenLayout" :styleTypeRouter="styleTypeRouter"></LazyHeaderChildhead>
            <LazyHeaderBreadcrumb :className="'mobile'"></LazyHeaderBreadcrumb>
        </div>

        <LazyHeaderBreadcrumb :className="'desktop'"></LazyHeaderBreadcrumb>

        <RouterView></RouterView>
    </div>
</template>
<script lang="ts">
import { useScreenWidth } from "~/composables/screen-width";
export default defineComponent({
    name: "dashboard-layout",
    setup() {
        const screen = useScreenWidth();
        const route = useRoute();

        const screenLayout = computed(() => {
            return screen.value <= 600 ? 'mobile' : 'custom';
        })

        const styleTypeRouter = computed(() => {
            return route.path === '/register' ? { height: '96px', colorLogo: 'black' } : { height: '88px', colorLogo: 'white' };
        })
        return { screenLayout, styleTypeRouter };
    },
});
</script>

<style lang="scss">
// // :root {
// //     --background-body: #F9F9FB;
// // }
// </style>

<style lang="scss" scoped>
.background {
    background-color: #F9F9FB;
}

.layout-header {
    display: block;
    width: 100%;
    height: 88px;
    background: $headerSecondaryColor;

    header {
        padding: 0 80px 0 74px;
        height: 88px;
    }
}

@media (max-width: 600px) {
    .layout-header {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 129px;
        background: $headerSecondaryColor;

        header {
            padding: 0 16px 0;
            height: 78px;
        }
    }
}
</style>
