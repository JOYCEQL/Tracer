
<template>
 <div class="button-wrapper">
   <Preview comp-name="Button" demo-name="base" moduleName="基础">
     <base-use />
  </Preview>
    <Preview comp-name="Button" demo-name="size" moduleName="尺寸">
      <size />
    </Preview>
    <Preview comp-name="Button" demo-name="disable" moduleName="禁用">
      <disable />
    </Preview>
 </div>
</template>
 
<script>
import Preview from '@/components/Preview.vue'
import BaseUse from './base.vue'
import Size from './size.vue'
import Disable from './disable.vue'

export default {
  components: {
    Preview,
    BaseUse,
    Size,
    Disable
  },
  setup(){

  }
 
 }

</script>
 
<style scoped lang = "less">
.button-wrapper{
   :deep(.t-button) {
    margin-right: 10px;
  }
}

</style>