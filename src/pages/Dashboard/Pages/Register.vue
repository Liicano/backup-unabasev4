<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <signup-card>
        <h2 class="title text-center" slot="title">Register</h2>
        <div class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 ml-auto" slot="content-left">
          <div class="info info-horizontal" v-for="item in contentLeft" :key="item.title">
              <div :class="`icon ${item.colorIcon}`">
                <md-icon>{{ item.icon }}</md-icon>
              </div>
              <div class="description">
                <h4 class="info-title">{{ item.title }}</h4>
                <p class="description">
                  {{ item.description }}
                </p>
              </div>
          </div>
        </div>
        <div class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 mr-auto" slot="content-right">
          <div class="social-line text-center">
            <Gauth from="register"></Gauth>
            <!-- <md-button class="md-just-icon md-round md-google" href="">
              <i class="fab fa-google"></i>
          
            </md-button> -->
            <h4 class="mt-3">{{ lg.user.classic }}</h4>
          </div>
          <md-field class="md-form-group" >
            <md-icon>face</md-icon>
            <!-- <label>{{lg.user.name}}</label> -->
            <md-input v-model="name" type="email" :placeholder="lg.user.name"></md-input>
          </md-field>
          
          <md-field class="md-form-group" >
            <md-icon>edit</md-icon>
            <!-- <label>{{lg.user.username}}</label> -->
            <md-input v-model="username" type="text" :placeholder="lg.user.username"></md-input>
          </md-field>
          <md-field class="md-form-group" >
            <md-icon>email</md-icon>
            <!-- <label>{{lg.user.email}}</label> -->
            <md-input v-model="email" type="email" :placeholder="lg.user.email"></md-input>
          </md-field>
          <md-checkbox v-model="boolean">{{ lg.base.term1 }} <a to='/terms'>{{ lg.base.term2 }}</a>.</md-checkbox>
          <div class="button-container">
            <md-button href class="md-success md-round mt-4" slot="footer" to='/login' >{{lg.user.login}}</md-button>
            <md-button href class="md-success md-round mt-4" slot="footer" @click="register" >{{lg.user.register}}</md-button>
          </div>
        </div>
      </signup-card>
    </div>
  </div>
</template>
<script>
import { SignupCard, Gauth } from '@/components';
// import api from '../../../config/api.js';
export default {
  name: 'Register',
  components: {
    SignupCard,
    Gauth
  },
  data() {
    return {
      name: null,
      username: null,
      boolean: false,
      email: null,
      password: null,
      contentLeft: [
        {
          colorIcon: 'icon-success',
          icon: 'timeline',
          title: 'Marketing',
          description:
            "We've created the marketing campaign of the website. It was a very interesting collaboration."
        },
        {
          colorIcon: 'icon-danger',
          icon: 'code',
          title: 'Fully Coded in HTML5',
          description:
            "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
        },
        {
          colorIcon: 'icon-info',
          icon: 'group',
          title: 'Built Audience',
          description:
            'There is also a Fully Customizable CMS Admin Dashboard for this product.'
        }
      ],
      inputs: [
        {
          icon: 'face',
          name: this.lg.user.name,
          nameAttr: 'name',
          type: 'text'
        },
        {
          icon: 'email',
          name: this.lg.user.email,
          nameAttr: 'email',
          type: 'email'
        }
        // { icon: 'lock_outline',
        //   name: 'Password..',
        //   nameAttr: 'password',
        //   type: 'password' }
      ]
    };
  },
  methods: {
    register() {
      if (this.boolean) {
        let { email, name, username } = this;
        this.$store.dispatch('users/register', { email, name, username });
      }
    }
  }
};
</script>
<style>
</style>