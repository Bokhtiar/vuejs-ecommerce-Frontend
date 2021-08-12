import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

window.$ = window.jQuery = require('jQuery')


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//axios setup
import axios from 'axios'
window.axios = axios
axios.defaults.baseURL = 'http://localhost/LaravelVuejsEcom/public/api';
window.token = localStorage.getItem('AToken')
axios.defaults.headers.common['Authorization'] = "Bearer " + token;
axios.defaults.headers.post['Content-Type'] = 'application/json';
//vuex setup start
import Vuex from 'vuex'
Vue.use(Vuex)
import {storage} from '@/store/index'
const store = new Vuex.Store(storage)
//vuex setup end
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
