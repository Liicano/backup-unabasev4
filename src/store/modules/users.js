import axios from 'axios';
import api from '../../config/api';
import languages from '../../languages';
// import { mapGetters } from 'vuex'
export default {
  namespaced: true,
  state: {
    users: Object,
    // user: Object,
    token:
      typeof localStorage.getItem('token') !== 'undefined' &&
      localStorage.getItem('token') !== 'undefined'
        ? localStorage.getItem('token')
        : '',
    user:
      typeof localStorage.getItem('user') !== 'undefined' &&
      localStorage.getItem('user') !== 'undefined'
        ? localStorage.getItem('user')
        : '',
    status: ''
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    access_success(state, payload) {
      state.status = 'success';
      state.user = { ...payload.user };
      state.token = payload.token;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
    access_error(state) {
      state.status = 'error';
    },
    register_error(state) {
      state.status = 'error';
    },
    verify_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    }
  },
  actions: {
    logout({ commit }) {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        commit('logout');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        delete axios.defaults.headers.common['Authorization'];
        resolve();
      });
    },
    register({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(api.auth.register, payload)
          .then(res => {
            commit('access_success', res.data);
            // localStorage.setItem('token', res.data.token);
            // localStorage.setItem('user', JSON.stringify(res.data.user));
            // axios.defaults.headers.common['Authorization'] = res.data.token;

            resolve(payload.user);
          })
          .catch(err => {
            commit('register_error');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            reject(err);
          });
      });
    },
    verify: function({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .put(api.auth.verify + payload.id, {
            hash: payload.hash
          })
          .then(res => {
            resolve({ message: languages.validations.verifyAccount });
          })
          .catch(err => {
            commit('verify_error');
            reject({ message: languages.validations.notVerifyAccount });
          });
      });
    },
    google({ commit }, payload) {
      return new Promise((resolve, reject) => {
        console.log(api.auth.google);
        axios
          .post(api.auth.google, {
            token: payload.token,
            access_token: payload.access_token,
            google: payload.google
          })
          .then(data => {
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user', JSON.stringify(data.data.user));

            axios.defaults.headers.common['Authorization'] = data.data.token;
            commit('access_success', data.data);
            resolve(payload.user);
          })
          .catch(err => {
            commit('access_error');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            reject(err, err.response);
          });
      });
    },
    googleNew({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(api.auth.google.register, payload.googleUser)
          .then(res => {
            commit('access_success', res.data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            axios.defaults.headers.common['Authorization'] = res.data.token;

            resolve(payload.user);
          })
          .catch(err => {
            commit('access_error');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
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
            // if (res.status === 200 && res.statusText === 'authenticated') {
            if (res.status === 200) {
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('user', JSON.stringify(res.data.user));

              axios.defaults.headers.common['Authorization'] = res.data.token;
              commit('access_success', res.data);
              resolve(res);
            }
          })
          .catch(err => {
            const res = err.response;
            commit('access_error');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            reject(res);
          });
      });
    },
    getAllUsers({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(api.user.main)
          .then(res => {
            console.log('USERS -> ', res.data);
            commit('setUsers', res.data);
            resolve(res.data);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  getters: {
    getUsers: state => state.users,
    user: state =>
      typeof state.user !== 'object' ? JSON.parse(state.user) : state.user,
    isLogged: state => !!state.token,
    authStatus: state => state.status
  }
};
