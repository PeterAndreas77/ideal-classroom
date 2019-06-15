import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
