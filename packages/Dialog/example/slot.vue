<template>
    <t-button type="primary" @click="openDialog" >自定义内容</t-button>
    <t-dialog v-model="checked">
        <template v-slot:title>
            新的标题
        </template>
        <template v-slot>
            新的内容
        </template>
        <template v-slot:footer>
            新的底部
        </template>
    </t-dialog> 
</template>

<script>
import { ref } from 'vue'
export default {
    setup () {
        const checked = ref(false)
        const openDialog = () => {
            checked.value = true;
        }
        return {
            checked,
            openDialog
        }
    }
}
</script>