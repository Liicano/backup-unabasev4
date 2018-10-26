import axios from 'axios';
import api from '../../config/api';
import invoice_generator from '../../assets/js/invoice'

export default {
  namespaced: true,
  state: {
    incomes: [],
    income: {
      name: '',
      description: '',
      dates: {
        expiration: new Date()
      },
      client: '',
      creator: '',
      responsable: '',

      lines: [],
      total: {
        net: 0,
        tax: 0
      },
      state: 'draft',
      isActive: true,
      currency: ''
    },
    errors: null
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
    },
    DELETE_LINE(state, payload){
      state.income.lines.forEach(function callback(line, index) {
        if(line._id == payload){
          state.income.total.net -= (line.quantity * line.price);
          state.income.total.tax -= ( (((line.quantity * line.price)*0.19)+(line.quantity * line.price)) );
          state.income.lines.splice(index, 1);
        }  
    });
      
    },
    ADD_LINE(state, payload){
        state.income.total.net += (payload.quantity * payload.price);
        state.income.total.tax += ( (((payload.quantity * payload.price)*0.19)+(payload.quantity * payload.price)) );
        state.income.lines.push(payload);
    },
    ERRORS(state, payload){
      state.errors = payload;
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
            commit('ERRORS', err);
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

    newLine({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('ADD_LINE', payload)
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

    },

    deleteLine({ commit }, payload) {
      return new Promise((resolve) => {
        commit('DELETE_LINE', payload);
        resolve(true);
      });

    }
  
  },
  getters: {
    getIncomes: state => state.incomes,
    getIncome: state => state.income,
    getErrors: state => state.errors
  }
};
