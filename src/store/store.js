import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import users from "./modules/users";
import incomes from "./modules/incomes";


export default new Vuex.Store({
  strict: true,
  state: {},
  modules: {
    users,
    incomes
  },
  mutations: {},
  actions: {},
  getters: {}
});
