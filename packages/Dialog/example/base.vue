

<template>
    <t-button type="primary" @click="openDialog">点我看对话框</t-button>
    <t-dialog v-model="checked"></t-dialog> 
</template>
<script>
import {ref } from 'vue';
export default {
   setup() {
    const checked = ref(false);
    const openDialog = () => {
      checked.value = true;
    };
     return {
       openDialog,
       checked,
     } 
   }
}
</script>
<style scoped>

</style>