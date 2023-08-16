<template>
    <footer :class="{ 'background-footer-primary': colorBackground }">
        <slot name="childFooter"></slot>
    </footer>
</template>

<script lang="ts" setup>
defineProps({
    colorBackground: { type: Boolean, default: true }
})
</script>

