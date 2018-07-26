import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' //国际化
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'

Vue.use(ElementUI,{ locale })

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
