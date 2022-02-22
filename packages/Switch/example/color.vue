<template>
    <t-switch v-model="checked" inactiveColor="#f77f00" activeColor="#d62828"></t-switch>
</template>
<script>
import { ref } from 'vue'
export default {
    name:'Color',
    setup(){
        const checked=ref(false)
        return {
            checked
        }
    }
}
</script>