import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPlugin from "./material-dashboard";
import store from "./store/store";
// Plugins
import App from "./App.vue";
import Chartist from "chartist";
import router from "./routes/routes";
// router setup

import Notifications from "./components/NotificationPlugin";
Vue.use(Notifications);
import GSignInButton from "vue-google-signin-button";
Vue.use(GSignInButton);

const navigatorLanguage = navigator.language.slice(0, 2);
import language from "./languages/main";
//@ts-ignore
Vue.prototype.lg = language[navigatorLanguage];
// plugin setup
Vue.use(VueRouter);
Vue.use(DashboardPlugin);

// configure router
// const router = new VueRouter({
//   routes, // short for routes: routes
//   linkExactActiveClass: 'nav-item active',
//   mode: 'history'
// });

// global library setup
Object.defineProperty(Vue.prototype, "$Chartist", {
  get() {
    return this.$root.Chartist;
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});
