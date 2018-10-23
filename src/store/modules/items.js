import axios from 'axios';
import api from '../../config/api';

export default {
  namespaced: true,
  state: {
    items: Array(),
    item:  {}
  },
  mutations: {
   setItems(state, payload) {
      state.items = payload;
    },
   setItem(state, payload) {
      state.item = payload;
    }
   
  },
  actions: {
    
    getAllItems({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(api.item.main)
          .then(data => {
            console.log('ITEMS -> ',data.data);
            commit('setItems', data.data);
            resolve(payload);
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
            commit('setItem', data.data);
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
    getItems: state => state.items,
    getItem: state => state.item,
  }
};
