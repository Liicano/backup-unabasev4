import axios from 'axios';
import api from '../../config/api';

export default {
  namespaced: true,
  state: {
    incomes: [],
    income:  []
  },
  mutations: {
   
    setIncomes(state, payload) {
      state.incomes = payload;
    },
   
  },
  actions: {
    
    Incomes({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(api.income.get)
          .then(data => {
            console.log('INCOMES -> ',data.data);
            commit('setIncomes', data.data);
            resolve(payload);
          })
          .catch(err => {
            console.log(err);
            reject(err, err.response);
          });
      });
    },
  
  },
  getters: {
    getIncomes: state => state.incomes,
  }
};
