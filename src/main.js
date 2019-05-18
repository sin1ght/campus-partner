import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import 'font-awesome/css/font-awesome.css'
import 'animate.css'


import App from './App.vue'
import router from './router'
import utils from './utils'



Vue.config.productionTip = false
Vue.prototype.axios=axios;

Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(utils);

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
