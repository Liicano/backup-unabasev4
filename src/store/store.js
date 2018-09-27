import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import users from "./modules/users";
// const mainApi = "http://35.231.73.122:3000/";
// const mainApi = "http://localhost:3000/";
const mainApi = "http://192.168.0.196:3000/";

export default new Vuex.Store({
  strict: true,
  state: {
    urls: {
      google: {
        auth: `${mainApi}auth/google`
      },
      users: {
        gets: `${mainApi}users/`,
        logout: `${mainApi}users/logout`
      },
      login: `${mainApi}auth/login`,
      getUser: `${mainApi}users/`
    }
  },
  modules: {
    users
  },
  mutations: {},
  actions: {},
  getters: {
    getUrls(state) {
      return state.urls;
    }
  }
});
