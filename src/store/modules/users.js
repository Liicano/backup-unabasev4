import axios from 'axios'

// import { mapGetters } from 'vuex'
export default {
  namespaced: true,
  state: {
    users: Object,
    user: Object 
  },
  mutations: {
    setLogin(state, payload){
      state.user = payload
    }
  },
  actions: {
    fetchLogin({ commit, rootGetters } , payload){
      return new Promise((resolve, reject)=>{
        // console.log('payload')
        // console.log(payload)
        axios.post(rootGetters.getUrls.login, {
          username: payload.username,
          password: payload.password
        })
        .then(res => {
          //eslint-disable-next-line
          console.log('res')
          console.log(res)
          if(res.status === 200 && res.data.message === 'authenticated'){
            commit('setLogin', res.data.user)
            resolve(res)
            // this.$router.push('/')
            // window.location.replace('/')
          }

        })
        .catch(err => {
          const res = err.response;
          reject(res)
        })

      })
    },
    fetchUser({  rootGetters }, payload ){
      return new Promise((resolve, reject)=>{
        // console.log('payload')
        // console.log(payload)
        axios.get(rootGetters.getUrls.getUser+payload._id)
        .then(res => {
          //eslint-disable-next-line
          console.log('res')
          console.log(res)
          // if(res.status === 200 && res.data.message === 'authenticated'){
          //   commit('setLogin', res.data.user)
          //   resolve(res)
          //   // this.$router.push('/')
          //   // window.location.replace('/')
          // }

        })
        .catch(err => {
          const res = err.response;
          reject(res)
        })

      })
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
}