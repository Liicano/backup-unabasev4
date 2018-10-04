import axios from "axios";
import api from "../../config/api";

// import { mapGetters } from 'vuex'
export default {
  namespaced: true,
  state: {
    users: Object,
    user: {
      access: {},
      name: null,
      email: null,
      id: null,
      activeScope: Object
    }
  },
  mutations: {
    setLogin(state, payload) {
      state.user = payload;
    },
    setUser(state, payload) {
      this.user = payload;
    }
  },
  actions: {
    setGoogle({ commit }, payload) {
      axios
        .post(api.auth.gauth, {
          token: payload.token
        })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log("err");
          console.log(err);
        });
    },
    fetchLogin({ commit, rootGetters }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(api.auth.login, {
            username: payload.username,
            password: payload.password
          })
          .then(res => {
            //eslint-disable-next-line
            console.log("res");
            console.log(res);
            if (res.status === 200 && res.statusText === "authenticated") {
              commit("setLogin", res.data);
              resolve(res);
            }
          })
          .catch(err => {
            const res = err.response;
            console.log("err");
            console.log(err);
            reject(res);
          });
      });
    },
    fetchUser({ rootGetters }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(api.users.get + payload._id)
          .then(res => {
            //eslint-disable-next-line
            console.log("res");
            console.log(res);
            // if(res.status === 200 && res.data.message === 'authenticated'){
            //   commit('setLogin', res.data.user)
            //   resolve(res)
            //   // this.$router.push('/')
            //   // window.location.replace('/')
            // }
          })
          .catch(err => {
            const res = err.response;
            reject(res);
          });
      });
    }

    // login({ commit } : any, payload: Object){
    //   commit('login', payload)
    // }
  },
  getters: {
    getUsers: function(state) {
      return state.users;
    },
    getUser: function(state) {
      return state.user;
    }
  }
};
