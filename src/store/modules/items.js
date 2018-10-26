import axios from 'axios';
import api from '../../config/api';

export default {
  namespaced: true,
  state: {
    items: Array(),
    item:  {}
  },
  mutations: {
   SET_ITEMS(state, payload) {
      state.items = payload;
    },
    SET_ITEM(state, payload) {
      // state.item = payload;
      console.log(payload);
    }
   
  },
  actions: {
    
    getAllItems({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(api.item.main)
          .then(data => {
            console.log('ITEMS -> ',data.data);
            commit('SET_ITEMS', data.data);
            resolve(data.data);
          })
          .catch(err => {
            console.log(err);
            reject(err, err.response);
          });
      });
    },


    getItem({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(api.item.main + payload)
          .then(data => {
            console.log('ITEM -> ',data.data);
            commit('SET_ITEM', data.data);
            resolve(data.data);
          })
          .catch(err => {
            console.log(err);
            reject(err, err.response);
          });
      });
    },

    setItem({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('SET_ITEM', payload)
        resolve(payload);
      });
    }
  
  },
  getters: {
    getItems: state => state.items,
    getItem: state => state.item,
  }
};
