<!--
 * @Author: your name
 * @Date: 2022-02-13 19:59:47
 * @LastEditTime: 2022-02-14 21:53:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Tracer\packages\Switch\example\index.vue
-->


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
 
<script>
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