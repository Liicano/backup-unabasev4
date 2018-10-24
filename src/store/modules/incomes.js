import axios from 'axios';
import api from '../../config/api';
import invoice_generator from '../../assets/js/invoice'

export default {
  namespaced: true,
  state: {
    incomes: Array(),
    income: {}
  },
  mutations: {
    SET_INCOMES(state, payload) {
      state.incomes = payload;
    },
    SET_INCOME(state, payload) {
      state.income = payload;
    },
    INVOICE(payload) {
      invoice_generator(payload);
    },
     ANULATE(state){
       state.income.isActive = false;
     },
     CLEAN(state){
      state.income = {}
     },
    SHARE(state, payload){
      if(payload.name){
        console.log("SHARE!")
      }else{
        console.log("¡NO PAYLOAD!");
      }
    }
  },
  actions: {
    
    createInvoice({ commit }, payload) {
      commit("INVOICE", payload)
    },
    getAllIncomes({ commit }, payload) {
      console.log("payload -> ",payload)
      return new Promise((resolve, reject) => {
        axios
          .get(api.movement.main + '?' + payload)
          .then(data => {
            console.log('INCOMES -> ', data.data);
            commit('SET_INCOMES', data.data);
            resolve(data.data);
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
          .get(api.movement.main + payload)
          .then(data => {
            console.log('INCOME -> ', data.data);
            commit('SET_INCOME', data.data);
            resolve(data.data);
          })
          .catch(err => {
            console.log(err);
            reject(err, err.response);
          });
      });
    },

    postIncome({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('SET_INCOME', payload)
         axios
           .post(api.movement.main, payload) 
           .then(data => {
             console.log('POST INCOME -> ',data.data);
             resolve(payload);
           })
           .catch(err => {

             console.log("PAYLOAD -> ",payload);
             console.log(api.movement.main);
             console.log("ERROR -> ",err);
             reject(err, err.response);
           });
      });
    },

    anulateIncome({ commit }, payload) {
      return new Promise((resolve, reject) => {
           commit('ANULATE', payload);
           axios
             .put(api.movement.main + payload._id, payload) 
             .then(data => {
              commit('CLEAN');
              resolve(true);
             })
             .catch(err => {
               console.log("ERROR -> ",err);
               reject(err, err.response);
             });
      });
    },
    
    shareIncome({ commit }, payload) {
      return new Promise((resolve) => {
        commit('SHARE', payload);
        resolve(payload);
      });

    }
  
  },
  getters: {
    getIncomes: state => state.incomes,
    getIncome: state => state.income
  }
};
