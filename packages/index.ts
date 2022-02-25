
import Button from './Button'
import Switch from './Switch'
import Dialog from './Dialog'
const install = function (Vue) {
  Vue.use(Button)
  Vue.use(Switch)
  Vue.use(Dialog)
}

// 判断是否直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
  install,
  Button,
  Switch,
  Dialog
}
