import axios from 'axios';
// import api from '../../config/api';
import api from '../../config/api';

export default {
  namespaced: true,
  state: {
    incomes: Array(),
    income: {}
  },
  mutations: {
    setIncomes(state, payload) {
      state.incomes = payload;
    },
    setIncome(state, payload) {
      state.income = payload;
    }
  },
  actions: {
    getAllIncomes({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(api.income.main)
          .then(data => {
            console.log('INCOMES -> ', data.data);
            commit('setIncomes', data.data);
            resolve(payload);
          })
          .catch(err => {
            console.log(err);
            reject(err, err.response);
          });
      });
    },

    getIncome({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(api.income.main + payload)
          .then(data => {
            console.log('INCOME -> ', data.data);
            commit('setIncome', data.data);
            resolve(payload);
          })
          .catch(err => {
            console.log(err);
            reject(err, err.response);
          });
      });
    }
  },
  getters: {
    getIncomes: state => state.incomes,
    getIncome: state => state.income
  }
};
