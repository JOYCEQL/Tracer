
<template>
 <div class="switch-wrapper">
   <Preview comp-name="Dialog" demo-name="base" moduleName="基础">
     <base-use />
  </Preview>
 </div>
</template>
 
<script>
import Preview from '@/components/Preview.vue'
import BaseUse from './base.vue'
export default {
  components: {
    Preview,
    BaseUse,
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