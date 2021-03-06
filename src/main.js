require('../node_modules/normalize.css/normalize.css')
require('../node_modules/font-awesome/css/font-awesome.css')


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import VuePaginate from 'vue-paginate'
import App from './App'
import router from './router'

Vue.use(Vue2Filters)
Vue.use(VuePaginate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
