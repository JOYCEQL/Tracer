


<template>
 <div class="switch-wrapper">
   <Preview comp-name="Switch" demo-name="base" moduleName="基础">
     <base-use />
  </Preview>
   <Preview comp-name="Switch" demo-name="color" moduleName="自定义颜色">
     <color />
  </Preview>
   <Preview comp-name="Switch" demo-name="size" moduleName="尺寸">
     <size />
  </Preview>
 </div>
</template>

<script lang="ts">
import Preview from '@/components/Preview.vue'
import BaseUse from './base.vue'
import Size from './size.vue'
import Color from './color.vue'
export default {
  components: {
    Preview,
    BaseUse,
    Size,
    Color
  },
 }

</script>

<style scoped lang = "less">
.switch-wrapper{
   :deep(.t-switch) {
    margin-right: 10px;
  }
}

</style>
