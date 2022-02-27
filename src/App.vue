
<template>
  <div class="tracer-doc">
    <app-header />
    <div class="app-main" :style="mainStyle">
      <app-side-bar :style="asideStyle" class="aside" />
       <div class="toggle-button" @click="toggleAside" :style="toggleAsidStyle">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </div>
      <main> 
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script  lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import AppSideBar from '@/components/AppSideBar.vue';
import { reactive,defineComponent,onMounted,ref,computed, getCurrentInstance, nextTick } from 'vue'
import config from '@/config'
import { setThemes,getBrowserThemes } from './utils/setTheme'
import { setItem } from './utils/storage'

export default defineComponent({
  name: 'TracerDoc',
  components: {
    AppSideBar,
    AppHeader
  },
  setup() {
    const currentThemes =ref(getBrowserThemes()) 
    const asideVisible = ref(true)
    onMounted( async () => {
      setThemes(config,currentThemes.value)
      setItem('tracer-theme',currentThemes.value)
  })

    const toggleAside = () => {
        asideVisible.value = !asideVisible.value;
    };

    const asideStyle = computed(() => {
      return { left: asideVisible.value ? "0px" : "-240px" };
    });

 


    const toggleAsidStyle = computed(() => {
      return {
        left: asideVisible.value ? "240px" : "0px",
        transform: asideVisible.value
          ? "rotate(180deg) translateX(50%)"
          : "rotate(0deg) translateX(50%)",
      };
    });

    const mainStyle = computed(() => {
      return {
        paddingLeft: asideVisible.value ? "240px" : "0px",
      };
    });

    return {
      asideVisible,
      currentThemes,
      toggleAsidStyle,
      toggleAside,
      mainStyle,
      asideStyle,
    }
  }
  
})
</script>

<style lang="less">

 &::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }
.tracer-doc{
.app-main {
  min-height: calc(100vh - 60px);
  transition: all 250ms ease;
  display: flex;
  .aside{
      transition: all 250ms ease;
  }
  main {
    width: 100%;
    flex: 1;
    background-color: var(--doc-color-body);
    padding: 25px;
    padding-left: 60px;
    &::-webkit-scrollbar {
        display: none;
      }
  }
  .toggle-button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid var(--doc-color-border);
  position: fixed;
  left: 240px;
  top: 280px;
  background-color: var(--doc-color-body);
  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 6%);
  transition: left 250ms ease, transform 0.1s ease;
  z-index: 9999;

  > .icon {
    width: 12px;
    height: 12px;
    fill: var(--doc-color-text);
  }

  @media (max-width: 500px) {
    display: none;
  }
}
}
}

</style>
