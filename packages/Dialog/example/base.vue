
<template>
    <t-button type="primary" @click="openDialog" >点我看对话框</t-button>
    <t-dialog v-model="checked" @cancel="cancel" @confirm="confirm"></t-dialog> 
</template>
<script>
import { ref } from 'vue';
export default {
   setup() {
    const checked = ref(false);
    const openDialog = () => {
      checked.value = true;
    }
    const cancel = () => {
      alert(1)
    }
    const confirm = () => {
      alert(2)
    }
     return {
       checked,
       openDialog,
       cancel,
       confirm
     } 
   }
}
</script>