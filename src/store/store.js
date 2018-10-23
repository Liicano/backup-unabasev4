import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import users from "./modules/users";
import incomes from "./modules/incomes";
import items from "./modules/items";
import tax from "./modules/taxes";

export default new Vuex.Store({
  strict: true,
  state: {
    nav: []
  },
  modules: {
    users,
    incomes,
    items,
    tax
  },
  mutations: {},
  actions: {},
  getters: {}
});
