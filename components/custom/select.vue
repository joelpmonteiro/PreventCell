<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" id="gender" :class="{ open: open }" @click="open = !open">
      <label class="label_floating" v-if="selected === ''">{{ defaultItem }}</label>
      <span v-else>
        {{ selected }}
      </span>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of options" :key="i" @click="selected = option;
      open = false;
      $emit('input', option);
      ">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface Iprops {
  options: Array<string>,
  defaultItem: string,
  tabindex: Number
}
export default defineComponent({
  props: {
    options: { type: Array, required: true },
    defaultItem: { type: String, required: false, default: null },
    tabindex: { type: Number, required: false, default: 0 },
  },
  setup(props: any) {
    const { options, defaultItem, tabindex } = toRefs(props);

    //variable
    const selected = ref<String | any>("");
    //selected.value = options.value.length > 0 ? options.value[0] : null
    const open = ref<boolean>(false)

    return { selected, open }
  }
})
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;

  >.selected {
    background-color: white;
    border-radius: 4px;
    border: 0.75px solid $subtitleColor;
    padding-left: 0.75rem;
    cursor: pointer;
    user-select: none;
    height: 100%;

    &.open {
      outline: 2px solid $subtitleColor;
      border-radius: 4px 4px 0px 0px;
    }

    &:after {
      position: absolute;
      content: url('../../assets/expand_more.svg');
      top: 0;
      right: 1em;
      width: 15px;
      height: 15px;
      // border: 5px solid transparent;
      // border-color: rgba(0, 0, 0, 0.60) transparent transparent transparent;
    }
  }

  .items {
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 2px solid $subtitleColor;
    border-left: 2px solid $subtitleColor;
    border-bottom: 2px solid $subtitleColor;
    position: absolute;
    background-color: $backgroundMainDashboard;
    left: 0;
    right: 0;
    z-index: 1;

    div {
      color: black;
      padding-left: 1em;
      cursor: pointer;
      user-select: none;

      &:hover {
        background: rgba(128, 124, 110, 0.05);

      }
    }
  }
}

.selectHide {
  display: none;
}

.selected:focus+.label_floating {
  top: 0;
  font-size: 0.7rem;
  margin-bottom: 32px;
}

.custom-select {
  .label_floating {
    position: absolute;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    top: 0.7rem;
    left: 0.85rem;
    padding: 0;
    transition: top 0.2s;
    height: auto;
    width: auto !important;

  }

  >.selected:not(:placeholder-shown)~.label_floating {
    top: 0;
    margin-bottom: 32px;
    font-size: 0.7rem;
  }

}
</style>