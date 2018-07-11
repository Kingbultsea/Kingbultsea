// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import App from './App'
import router from './router'
import iView from 'iview';
Vue.config.productionTip = false





import store from "./vuex/myvuex.js"



/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})




