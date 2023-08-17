<template>
    <section class="devices">
        <div class="deviceSecurity">
            <span>{{ deviceAction }}</span>
            <span></span>
            <span>{{ deviceLength }}</span>

            <BaseBtn v-if="btnActive" :text-btn="'Adicionar'" :class-name="'btn-secondary text-uppercase'"
                :class-div="'btn-desktop'" @handle-click-button="$emit('handle-click-button')">
            </BaseBtn>
        </div>

        <div class="slide-wrapper">
            <slot name="recently"></slot>
        </div>

    </section>
</template>

<script lang="ts" setup>
defineProps({
    deviceAction: String,
    deviceLength: Number,
    btnActive: { type: Boolean, default: true, required: true }
})

//Call function
const addDevice = () => {
    //activeModalsheet.value = !activeModalsheet.value;
};

</script>

<style scoped lang="scss">
.devices {
    min-height: calc(50vh - 129px);
    padding-top: 45px;
    padding-bottom: 34px;
    padding: 45px 100px 34px 100px;
    margin: 0 auto;

    .deviceSecurity {
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: auto;
        gap: 8px;

        list-style: none;

        .btn-protect {
            margin-left: auto;
        }

        span {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-style: normal;
            line-height: normal;
            letter-spacing: 0.154px;
            margin: auto 0;
            padding: 0;

            &:nth-child(1) {
                font-weight: 600
            }

            &:nth-child(2) {
                width: 3px;
                height: 3px;
                border-radius: 18px;
                background: rgba(0, 0, 0, 0.38);
                font-weight: 400;

            }

            &:nth-child(3) {
                color: rgba(0, 0, 0, 0.38);
                font-weight: 400;

            }
        }

        .slide-wrapper {
            display: block;
            width: 100%;
            height: 100%;
            padding: 24px 0;

        }
    }
}

@media(max-width: 600px) {
    .devices {
        height: 100%;
        padding: 34px 0;
        //padding-top: 34px;

        &:nth-child(3) {
            padding-top: 32px;
            padding-bottom: 34px;
        }

        .deviceSecurity {

            span {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                font-style: normal;
                line-height: normal;
                letter-spacing: 0.154px;
                margin: auto 0;
                padding: 0;

                &:nth-child(1) {
                    font-weight: 600
                }

                &:nth-child(2) {
                    width: 3px;
                    height: 3px;
                    border-radius: 18px;
                    background: rgba(0, 0, 0, 0.38);
                    font-weight: 400;

                }

                &:nth-child(3) {
                    color: rgba(0, 0, 0, 0.38);
                    font-weight: 400;

                }
            }
        }

        .slide-wrapper {
            display: block;
            width: 100%;
            height: 100%;
            padding: 24px 0;

        }
    }
}
</style>