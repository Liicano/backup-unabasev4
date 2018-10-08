import axios from "axios";
import api from "../../config/api";

// import { mapGetters } from 'vuex'
export default {
  namespaced: true,
  state: {
    users: Object,
    user: Object,
    token: localStorage.getItem("token") || "",
    status: ""
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, payload) {
      state.status = "success";
      state.user = payload.user;
      state.token = payload.token;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  actions: {
    logout({ commit }) {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    google({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(api.auth.gauth, {
            token: payload.token,
            access_token: payload.access_token
          })
          .then(data => {
            console.log("data from setgoogle");
            console.log(data);
            localStorage.setItem("token", data.data.token);

            axios.defaults.headers.common["Authorization"] = data.data.token;
            commit("auth_success", data.data);
            resolve(payload.user);
          })
          .catch(err => {
            console.log("err");
            console.log(err);
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    login({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(api.auth.login, {
            username: payload.username,
            password: payload.password
          })
          .then(res => {
            console.log("res");
            console.log(res);
            if (res.status === 200 && res.statusText === "authenticated") {
              localStorage.setItem("token", res.data.token);

              axios.defaults.headers.common["Authorization"] = res.data.token;
              commit("auth_success", res.data);
              resolve(res);
            }
          })
          .catch(err => {
            const res = err.response;
            console.log("err");
            console.log(err);
            commit("auth_error");
            localStorage.removeItem("token");
            reject(res);
          });
      });
    }
    // fetchUser({ rootGetters }, payload) {
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .get(api.users.get + payload._id)
    //       .then(res => {
    //         //eslint-disable-next-line
    //         console.log("res");
    //         console.log(res);
    //         // if(res.status === 200 && res.data.message === 'authenticated'){
    //         //   commit('setLogin', res.data.user)
    //         //   resolve(res)
    //         //   // this.$router.push('/')
    //         //   // window.location.replace('/')
    //         // }
    //       })
    //       .catch(err => {
    //         const res = err.response;
    //         reject(res);
    //       });
    //   });
    // }

    // login({ commit } : any, payload: Object){
    //   commit('login', payload)
    // }
  },
  getters: {
    getUsers: state => state.users,
    getUser: state => state.user,
    isLogged: state => !!state.token,
    authStatus: state => state.status
  }
};
