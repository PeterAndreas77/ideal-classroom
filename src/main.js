import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify)

new Vue({
  render: h => h(App),
}).$mount('#app')
