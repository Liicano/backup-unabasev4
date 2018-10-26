<template>
  <div class="md-layout text-center">

    <div class="md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100">
      <login-card header-color="green">
        
        <h4 slot="title" class="title">{{ lg.user.login }}</h4>
        <!-- <md-button slot="buttons" to="#facebook" class="md-just-icon md-simple md-white">
          <i class="fab fa-facebook-square"></i>
        </md-button>
        <md-button slot="buttons" to="#twitter" class="md-just-icon md-simple md-white">
          <i class="fab fa-twitter"></i>
        </md-button> -->
        <!-- <md-button slot="buttons" :href="url.google" class="md-just-icon md-simple md-white">
          <i class="fab fa-google-plus-g"></i>
        </md-button> -->
        <!-- <md-button slot="buttons" data-onsuccess="onSignin" class="g-signin2 md-just-icon md-simple md-white">
          
          <Gauth></Gauth>
        </md-button> -->
        <md-field class="md-form-group mdl-typography--text-center" slot="buttons">
          <div class="row">
            <div class="col s1"></div>
            <div class="col s4"> 
            <Gauth class=" btn-floating red" from="login"></Gauth> 
            </div>
            <div class="col s4">
             <!-- <button class=" btn-floating blue darken-3">
               <i class="fab fa-facebook"></i>
             </button> -->
            </div>
          </div>
        </md-field>

        <p slot="description" class="description">{{ lg.user.classic }}</p>
     
        <md-field class="md-form-group" slot="inputs">
          <md-icon>email</md-icon>
          <label>{{ lg.user.email }} / {{ lg.user.username }}</label>
          <md-input v-model="email" type="email"></md-input>
        </md-field>
        <md-field class="md-form-group" slot="inputs">
          <md-icon>lock_outline</md-icon>
          <label>{{ lg.user.password }}</label>
          <md-input v-model="password"></md-input>
        </md-field>
        <md-button slot="footer" class="md-simple md-success md-lg" @click="login">
          {{ lg.user.loginGo }}
        </md-button>
        <md-button slot="footer" class="md-simple md-success md-lg" to="/register">
          {{ lg.user.register }}
        </md-button>
      </login-card>
    </div>
  </div>
</template>
<script>
import { LoginCard } from '@/components';
import { mapGetters } from 'vuex';
import Vue from 'vue';
// import Notifications from '../../../components/NotificationPlugin';
import api from '../../../config/api';
import Gauth from '../../../components/Gauth';

// Vue.use(Notifications);
// import axios from 'axios'
export default {
  components: {
    LoginCard,
    Gauth
  },
  data() {
    return {
      user: null,
      firstname: null,
      email: null,
      password: null,
      url: {
        google: api.auth.google
      }
    };
  },
  computed: {
    ...mapGetters([
      // eslint-disable-next-line
      'getUrls'
    ])
  },
  methods: {
    login() {
      this.$store
        .dispatch('users/login', {
          username: this.email,
          password: this.password
        })
        // eslint-disable-next-line
        .then(res => {
          this.$router.push('/');
        })
        .catch(err => {
          //err.status  & err.statusText
          let type = new Map();
          type.set(403, 'warning');
          type.set(404, 'danger');
          type.set(401, 'info');
          this.$notify({
            message: err.statusText,
            icon: 'add_alert',
            horizontalAlign: 'right',
            verticalAlign: 'top',
            type: type.get(err.status)
          });
        });
    }
  }
};
</script>

<style>
</style>