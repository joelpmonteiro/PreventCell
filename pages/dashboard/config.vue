<template>
    <main>
        <LazyDashboardContentSetting></LazyDashboardContentSetting>
    </main>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "dashboard",
});
</script>

<style scoped lang="scss">
main {
    min-height: calc(100vh - 88px);

}
</style>