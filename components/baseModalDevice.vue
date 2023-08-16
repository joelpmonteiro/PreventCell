<template>
  <div class="modal-device" :class="{ active: activeBottomSheet }">
    <div class="modal-sheet" :class="classCustom[0]" :style="classCustom[1]">
      <slot name="header"></slot>

      <div class="form-device">
        <slot name="form"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface className {
  classCustom: [];
}
defineProps({
  activeBottomSheet: { type: Boolean, default: false, required: true },
  classCustom: {
    type: Array as PropType<Array<String>> | any,
    default: Array,
    required: false,
  },
});
//const bottomSheet = ref(false);
</script>

<style lang="scss">
.modal-device {
  display: flex;
  width: 100%;
  height: 100%;

  .modal-sheet {
    display: inline-flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 20px 24px;
    background: #f9f9fb;
    border-radius: 20px 20px 0px 0px;
    z-index: 1;

    transition: 0.5s;
    animation-delay: 0.5s;
    animation: 0.5s;
    height: 0;
    visibility: hidden;
    overflow: auto;

    header {
      display: flex;
      gap: 12px;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      height: auto;

      .close {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: auto;

        a {
          color: rgba(0, 0, 0, 0.6);
          font-size: 14px;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.5px;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
            text-decoration-color: rgba(0, 0, 0, 0.6);
            text-underline-offset: 2px;
          }
        }
      }

      .title {
        h3 {
          color: rgba(0, 0, 0, 0.87);
          text-align: start;
          font-size: 16px;
          font-weight: 600;
          line-height: 26.4px;
        }
      }
    }

    .form-device {
      display: flex;
      width: 100%;
      height: auto;

      form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1 0 auto;
        max-width: 100%;

        .form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          gap: 8px;
          width: 100%;
          height: auto;

          label {
            color: rgba(0, 0, 0, 0.6);
            font-size: 16px;
            font-weight: 500;
            line-height: 150%;
            letter-spacing: 0.5px;
          }

          input {
            width: 100%;
            height: 48px;
            padding: 12px 12px 0 12px;
            border-radius: 4px;
            border: 0.75px solid $subtitleColor;
            background: white;

            &:focus {
              outline: none;
            }

            &:focus-visible {
              outline: 2px solid $subtitleColor;
            }
          }
        }

        .form-flex {
          display: flex;
          gap: 32px;
          flex-direction: row;

          &>.form-group {
            &:nth-child(1) {
              min-width: 188px;
            }

            &:nth-child(2) {
              min-width: 134px;
            }
          }
        }
      }
    }
  }

  &.active {
    opacity: 1;

    .modal-sheet {
      display: flex !important;
      gap: 32px;
      height: calc(90vh - 100px);
      width: 100%;
      visibility: visible;
      overflow-y: auto;
    }
  }
}

.pa-b {
  padding: 39px 24px !important;
}

.padding-bottom {
  padding-bottom: 56px;
}

.padding-bottom-06 {
  padding-bottom: 40px;
}

@media(max-width: 600px) {
  .modal-device {
    width: 0;
    height: 0;
  }
}
</style>
