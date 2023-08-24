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
  margin: auto;
  width: 100%;
  max-width: 500px;
  height: 100%;

  .btnSpinner {
    display: flex;
  }

  .modal-sheet {
    display: inline-flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 500px;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 20px 35px; //20px 24px

    border-radius: 2.895px;
    background: var(--background-light, #F9F9FB);
    box-shadow: 0px 2.894941568374634px 2.894941568374634px 0px rgba(0, 0, 0, 0.10);
    z-index: 1;

    visibility: hidden;
    //overflow: auto;



    header {
      display: flex;
      gap: 12px;
      flex-direction: column;
      align-items: center;
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
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 0 44px;

        h3 {
          color: #171615;
          font-family: Inter-Medium;
          text-align: center;
          font-weight: 500;

          font-size: 20px;
          font-style: normal;
          line-height: 30px;
          /* 30px */
          letter-spacing: 0.15px;
        }

        .text-title {
          color: rgba(0, 0, 0, 0.60);
          text-align: center;

          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 21px;
          letter-spacing: 0.035px;
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
            // display: none;
            color: rgba(0, 0, 0, 0.6);
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 21px;
            width: 100%;
            letter-spacing: 0.25px;
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
          gap: 16px;
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

    @-webkit-keyframes animatetop {
      from {
        top: 0;
        opacity: 0
      }

      to {
        top: 0;
        opacity: 1
      }
    }

    @keyframes animatetop {
      from {
        top: -5px;
        opacity: 0
      }

      to {
        top: 0;
        opacity: 1
      }
    }
  }

  &.active {
    opacity: 1;



    .modal-sheet {
      display: flex !important;
      gap: 32px;
      height: 42.5rem;
      width: 100%;
      max-width: 500px;
      margin: auto;
      visibility: visible;
      overflow-y: auto;
      -webkit-animation-name: animatetop;
      -webkit-animation-duration: 1s;
      animation-name: animatetop;
      animation-duration: 1s;

      &.modal-remove {
        height: 100%;
        max-height: 373px;

        .form-device {
          form {
            padding: 0 44px;
          }
        }
      }

      &.modal-pin {
        height: calc(50vh - 8.781rem);
        min-height: 315px;
        gap: 16px;


        .form-device {
          form {
            padding: 0 53px;

          }
        }
      }
    }
  }
}

.pa-b {
  padding: 39px 24px !important;
}

// .padding-bottom {
//   padding-bottom: 56px;
// }

.m-bottom {
  margin-bottom: 1rem;
}

.padding-bottom-06 {
  padding-bottom: 40px;
}


.close-icon-model {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 44px;
  height: auto;
}

.close-text {
  display: none;
}

@media(max-width: 600px) {
  .modal-sheet {
    header {
      .title {
        padding: 0;

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
      form {
        .form-group {
          label {
            display: block;
          }
        }
      }
    }
  }

  .close-icon-model {
    display: none;
  }

  .close-text {
    display: block;
  }

  .modal-device {
    width: 0;
    height: 0;

    .modal-sheet {
      transition: 0.5s;
      animation-delay: 0.5s;
      animation: 0.5s;
      bottom: 0;

      background: #f9f9fb;
      border-radius: 20px 20px 0px 0px;
      box-shadow: none;
    }

    &.active {
      .modal-sheet {
        height: calc(90vh - 100px);

        form {
          .padding-bottom {
            padding-bottom: 56px;
          }
        }
      }
    }
  }
}
</style>
