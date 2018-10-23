import axios from 'axios';
import api from '../../config/api';
import invoice from '../../assets/js/invoice'

export default {
  namespaced: true,
  state: {
    incomes: Array(),
    income:  {}
  },
  mutations: {
   setIncomes(state, payload) {
      state.incomes = payload;
    },
   setIncome(state, payload) {
      state.income = payload;
    },
    generateInvoice(state, payload) {
      invoice(payload);
    },
    share(state, payload){
      if(payload.name){
        console.log("compartiendo invoice !!", payload)
      }else{
        console.log("NO HAY PAYLOAD!");
      }
    }
   
  },
  actions: {
    
    createInvoice({ commit }, payload) {
      commit("generateInvoice", payload)
    },
    getAllIncomes({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(api.movement.main)
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


    getIncome({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(api.movement.main + payload)
          .then(data => {
            console.log('INCOME -> ',data.data);
            commit('setIncome', data.data);
            resolve(payload);
          })
          .catch(err => {
            console.log(err);
            reject(err, err.response);
          });
      });
    },

    postIncome({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('setIncome', payload)
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
    
    shareIncome({ commit }, payload) {
      return new Promise((resolve) => {
        commit('share', payload);
        resolve(payload);
      });

    }
  
  },
  getters: {
    getIncomes: state => state.incomes,
    getIncome: state => state.income,
  }
};
