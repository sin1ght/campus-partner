import Vue from 'vue'
import VueRouter from 'vue-router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import 'font-awesome/css/font-awesome.css'
import 'animate.css'


import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

Vue.use(MintUI);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
