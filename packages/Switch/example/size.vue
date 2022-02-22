<template >
    <t-switch size="default" v-model="checked"></t-switch>
    <t-switch size="default" v-model="checked"></t-switch>
    <t-switch size="large"   v-model="checked"></t-switch>
</template>
<script>
import { ref } from 'vue'
export default {
    name:'Size',
    setup(){
        const checked=ref(false)
        return {
            checked
        }
    }
}
</script>