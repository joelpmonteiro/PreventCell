<template>
    <NuxtLink :to="to" :class="className">
        {{ title }}
        <span class="link" v-if="!mobile"></span>
    </NuxtLink>
</template>
<script setup lang="ts">
defineProps({
    to: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        required: true,
    },
    mobile: {
        type: Boolean,
        default: false
    }
});
</script>



<style lang="scss" scoped>
a {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    color: rgba(0, 0, 0, 0.60);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.25px;
    text-decoration: none;

    &:hover {
        color: $colorTextPartners;
    }
}

.router-link-exact-active {
    color: $colorTextPartners;

    &>.link {
        width: 53px;
        height: 5px;
        background: $backgroundActiveLink;
    }
}



@media(max-width:600px) {
    .router-link-exact-active {
        color: $backgroundActiveLink !important;

        &>.link {
            display: none;
        }
    }
}
</style>


