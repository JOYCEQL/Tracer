

<template>
 <div class="switch-wrapper">
   <Preview comp-name="Dialog" demo-name="base" moduleName="基础">
     <base-use />
  </Preview>
   <Preview comp-name="Dialog" demo-name="slot" moduleName="自定义内容">
     <base-slot />
  </Preview>
 </div>
</template>
 
<script>
import Preview from '@/components/Preview.vue'
import BaseUse from './base.vue'
import Slot from './slot.vue'
export default {
  components: {
    Preview,
    BaseUse,
    BaseSlot:Slot
  },
  setup(){

  }
 
 }

</script>
 
<style scoped lang = "less">
.switch-wrapper{
   :deep(.t-switch) {
    margin-right: 10px;
  }
}

</style>