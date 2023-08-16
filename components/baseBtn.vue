<template>
    <div class="btn-protect" :class="classDiv">
        <button type="button" :class="className" @click.prevent="$emit('handle-click-button')">
            <span class="icon" v-if="classDiv === ''"> + </span> {{ textBtn }}
        </button>

    </div>
</template>
<script setup lang="ts">
// const props = defineProps['text']
defineProps({
    className: { type: String, default: 'btn-primary' },
    classDiv: { type: String, default: '' },
    textBtn: { type: String, required: true }
})
</script>

<style scoped lang="scss">
.btn-protect {
    &.bnt-mobile {
        display: none;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;

        >.icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            padding: 4px;
            font-family: Material Icons;
            font-size: 16px;
            font-weight: bolder;
        }
    }
}

@media(max-width: 600px) {
    .btn-desktop {
        display: none;
    }

    .btn-protect {


        &.bnt-mobile {
            display: flex;
        }
    }
}
</style>

