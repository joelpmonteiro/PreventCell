<template>
    <main>

        <LazyDashboardContentProfile></LazyDashboardContentProfile>

    </main>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "dashboard",
});


</script>

<style scoped lang="scss">
:root {
    --background-body: #F9F9FB;
}



main {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    min-height: calc(100vh - 88px);

}
</style>