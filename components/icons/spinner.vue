<template>
    <div class="spinner" :class="className">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="28" height="28">
            <g>
                <path
                    d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z"
                    fill="#a7a9c1" />
                <animateTransform attributeName="transform" dur="800ms" from="0 64 64" repeatCount="indefinite"
                    to="360 64 64" type="rotate" />
            </g>
        </svg>
    </div>
</template>
<script lang="ts" setup>
defineProps({
    className: { type: String, default: '' },
})
</script>
<style lang="scss" scoped>
.spinner {
    display: flex;
    position: absolute;
    align-items: center;
    bottom: 0;
    top: 0;
    left: 13rem;
    z-index: 1;

    &.reajusted {
        left: 8.5rem;
    }

    &.readjust-pin {
        left: 5rem;
    }

    &.removeAdjust {
        left: 2.25rem;
    }

    &.left {
        left: 12rem;
    }
}
</style>
