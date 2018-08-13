import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import router from './router'
import storeConfig from './storeConfig'

import FastClick from 'fastclick'
import moment from 'moment'

import sdkManager from './sdkManager/index'

moment.locale('zh_CN')
FastClick.attach(document.body)
window.sdkManager = sdkManager

Vue.use(VueRouter)
Vue.use(Vuex)
const store = new Vuex.Store(storeConfig)

const rootComponent = new Vue({
  router,
  store,
  template: `
    <router-view></router-view>
  `
})

rootComponent.$mount('#root')
