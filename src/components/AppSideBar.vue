<!--
 * @Author: yuguangzhou
 * @Date: 2022-01-20 14:00:39
 * @LastEditTime: 2022-02-09 15:03:28
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
 <div class="tracer-doc-side">
    <div class="menu">
        <div
            class="menu-group"
            v-for="(itemx, index) in docRoutes"
            :key="index"
          >
            <span class="menu-group-title text-overflow">
              {{ index }}{{ index != "文档" ? `（${itemx.length}）` : "" }}
            </span>
            <router-link
              v-for="(itemy, indey) in itemx"
              :key="indey"
              class="menu-item text-overflow"
              :to="`${itemy.path}`"
              >{{ itemy.title }}</router-link>
          </div>
        </div>
    </div>
</template>
 
<script >
import docRoutes from '@/router/routes';
import { reactive,defineComponent, toRefs } from 'vue';
export default defineComponent({
  name: 'AppSideBar',
  setup(props) {
    const data = reactive({
      docRoutes
    })
    return {
      ...toRefs(data)
    }
  }
  
})
</script>
 
<style scoped lang = "less">
 .tracer-doc-side {
    padding: 15px;
    position: fixed;
    width: 240px;
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 99;
    overflow-y: scroll;
    border-right: 1px solid var(--doc-color-border);
    background-color: var(--doc-color-bar);
    &::-webkit-scrollbar {
        display: none;
    }
      .menu,
      .menu-group {
        width: 100%;
      }

      .menu-group-title,
      .menu-item {
        display: flex;
        align-items: center;
        width: 100%;
      }

      .menu-group-title {
        height: 36px;
        padding-left: 32px;
        font-size: 13px;
        color: var(--doc-color-text);
        overflow: hidden;

        &:hover {
          cursor: default;
        }
      }

      .menu-item {
        height: 44px;
        padding-left: 48px;
        color: var(--doc-color-text);
        font-size: 14px;

        &:hover {
          color:  var(--doc-color-primary);
        }
      }

      .router-link-exact-active {
        color: var(--doc-color-primary);
        background-color: var(--doc-color-side-bar-active-background);
        border-radius: 3px;
      }

 }
</style>