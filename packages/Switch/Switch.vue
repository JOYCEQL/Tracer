
<template>
  <button
    class="t-switch"
    :class="classes"
    @click="toggle"
    :style="{ background: modelValue ? activeColor : inactiveColor }"
  >
  <span></span>
  </button>
</template>


<script >
import { computed, toRefs } from "vue";
export default {
  name: "TSwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "#18a058",
    },
    inactiveColor: {
      type: String,
      default: "#dbdbdb",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "default",
    },
    text: {
      type: String,
      default: "",
    },
  },
  emits:[
    "update:modelValue",
    "change"
  ],
  setup(props,ctx){
  const toggle = () => {
      if (props.disabled) {
        return;
      }
      ctx.emit("update:modelValue", !props.modelValue);
      ctx.emit("change", !props.modelValue);
    };
    const { modelValue, disabled, size } = toRefs(props);

    const classes = computed(() => {
      return {
        [`t-switch-checked`]: modelValue.value,
        [`t-switch-disabled`]: disabled.value,
        [`t-switch-${size.value}`]: size.value,
      };
    });

    return {
      toggle,
      classes,
    };
  }


};
</script>

<style lang="less" >
@import './style/Switch.less';
</style>
