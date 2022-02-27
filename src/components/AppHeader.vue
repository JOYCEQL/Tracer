

<template>
    <div class="tracer-doc-header">
        <div class="tracer-doc-header_left">
            <div class="tracer-doc-header_logo">
                <img src="@/assets/images/logo.png">
            </div>
            <div class="tracer-doc-header_title">{{title}}</div>
        </div>
        <div class="tracer-doc-header_right"  @click="toggleTheme">
           <div class="dark" v-if="currentThemes==='darkThemes'">深色</div>
           <div class="light" v-else>浅色</div>
        </div>
    </div>
</template>

<script >
import config from '@/config'
import {ref}   from 'vue'
import {setThemes,getBrowserThemes} from '@/utils/setTheme'
import {setItem} from '@/utils/storage'
import {get} from 'lodash-es'
export default {
 name: 'AppHeader',
 setup() {
    const title=get(config,'title')
    const currentThemes =ref(getBrowserThemes())
    const toggleTheme=()=>{
        currentThemes.value = currentThemes.value === 'darkThemes' ? 'themes' : 'darkThemes'
        console.log(currentThemes.value);
        setThemes(config,currentThemes.value)
        setItem('tracer-theme',currentThemes.value)
    }
    return {
      title,
      currentThemes,
      toggleTheme
    }
 }
}
</script>

<style scoped lang = "less">
 .tracer-doc-header{
    width: 100%;
    height: 60px;
    position: fixed;
    border-bottom: 1px solid var(--doc-color-border);
    top: 0;
    left: 0;
    padding: 0 30px;
    z-index: 666;
    background-color: var(--doc-color-bar);
    color: var(--doc-color-text);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tracer-doc-header_left{
        display: flex;
        align-items: center;
        img{
            width: 60px;
            height: 60px;
            margin-right: 10px;

        }
        .tracer-doc-header_title{
            font-size: 22px;
        }
    }
    .tracer-doc-header_right{
        cursor: pointer;
        color: var(--doc-color-text);
    }
 }
</style>
