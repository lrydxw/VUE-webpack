// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// element-ui
import ElementUI from 'element-ui'
import '../theme/index.css'
Vue.use(ElementUI)

//vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource);

// vuex
import Vuex from 'vuex';
Vue.use(Vuex);

//reset CSS
import "./assets/css/reset.css"
import "./assets/css/main.css"


// root component 
import App from './App'
import router from './router'
import store from './vuex/store'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
