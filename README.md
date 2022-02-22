<p align="center">
  <a href="https://joyceql.github.io/tracer-doc/" target="_blank" rel="noopener noreferrer">
    <img width="180" src="src/assets/images/logo.png" alt="Tracer logo">
  </a>
</p>

# Tracer-Ts

一个使用vite2构建的支持vue3的PC端组件库，用TypeScript编写，支持按需加载

## 安装
```shell
//npm
npm install tracer-ts
//yarn
yarn add tracer-ts
//pnpm
pnpm install tracer-ts
```
## 全量引入

```js
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import tracer from 'tracer-ts'
import 'tracer-ts/lib/style.css'
createApp(App).use(tracer).mount('#app')
```

## 按需引入

安装babel-plugin-tracer
```js
  yarn add  babel-plugin-tracer -D 
```
在 **babel.config.js** 中添加配置
```js
module.exports = {
  plugins: [
      ["babel-plugin-tracer", {
        "cssPath": "tracer-ts/lib/style/{key}.css", 
        "jsPath": "tracer-ts/lib/Tracer.es.js",
        "lib": "tracer-ts" 
    }]
  ]
}
```
然后在main.ts中引入
```js
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import {Button} from 'tracer-ts'
createApp(App).use(Button).mount('#app')
```

## 单文件组件中直接使用


```vue
<template>
  <t-button>tracer-ts</t-button>
</template> 
```
