// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.use(Element);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
