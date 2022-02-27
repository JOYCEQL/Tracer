

<template>
  <teleport to="body">
    <transition name="dialog-fade">
      <div class="dialog" v-if="modelValue" @click="maskChange">
        <div class="dialog-wrapper" @click.stop>
          <header>
            <slot name="title">{{ title }}</slot>
          </header>
          <main class="dialog-content">
            <slot>
              <p>内容</p>
            </slot>
          </main>
            <footer class="dialog-footer">
            <slot name="footer" >
              <t-button @click="cancel" class="dialog-btn-cancel">{{cancelBtnText}}</t-button>
              <t-button type="primary"  @click="confirm">{{confirmBtnText}}</t-button>
            </slot>
          </footer>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'TDialog',
  props: {
    modelValue:{
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
   
    
  },
  emits: ["update:modelValue", "confirm","cancel"],
  setup(props,{emit}) {
    const cancel = ()=> {
       emit("update:modelValue", false);
       emit("cancel");
    }
    const confirm=()=>{
       emit("update:modelValue", false);
       emit("confirm");
    }
    const maskChange=()=>{
      if(props.closeOnClickMask){
        cancel();
      }
    }
    return {
      cancel,
      confirm,
      maskChange
    }
  }
})
</script>

<style scoped lang="less">
@import './style/Dialog.less';
</style>