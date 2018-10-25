import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardPlugin from './material-dashboard';

// Plugins
import App from './App.vue';
import Chartist from 'chartist';
import router from './routes/routes';
import store from './store/store';
import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);

// VALIDATION CONFIG
import VeeValidate from 'vee-validate';
const veeconfig = {
  aria: true,
  classNames: {},
  classes: false,
  delay: 0,
  dictionary: null,
  errorBagName: 'errors', // cambiar si veo algun conflicto.
  events: 'blur', //Eventos para disparar la validacion
  fieldsBagName: 'fields',
  i18n: null,
  i18nRootKey: 'validations', // aca estan los mensajes de validacion.
  inject: true,
  locale: 'en',
  strict: true,
  validity: false
};

Vue.use(VeeValidate, veeconfig);
import Notify from 'vue2-notify';

// Use Notify
Vue.use(Notify);

// DATE FILTER TO TABLES AND LIST
import moment from 'moment';
Vue.filter('shortDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY');
  }
});

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee);

Vue.component('font-awesome-icon', FontAwesomeIcon);
import axios from 'axios';
import Notifications from './components/NotificationPlugin';
Vue.use(Notifications);

// LANGUAGES
const navigatorLanguage = navigator.language.slice(0, 2);
import language from './languages/main';
Vue.prototype.lg = language[navigatorLanguage];

// plugin setup
Vue.use(VueRouter);
Vue.use(DashboardPlugin);

// AXIOS CONFIG
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
  Vue.prototype.$http.defaults.withCredentials = true;
}
import GSignInButton from 'vue-google-signin-button';
Vue.use(GSignInButton);

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get() {
    return this.$root.Chartist;
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});
