
<template>
    <t-switch v-model="checked" @change="handleChange"></t-switch>
    <t-switch disabled></t-switch>
</template>
<script>
import {ref } from 'vue';
export default {
   name:'Base',
   setup() {
    const checked = ref(false); 
    const handleChange = (val) => {
    };
     return {
       checked,
       handleChange
     } 
   }
}
</script>
<style scoped>

</style>