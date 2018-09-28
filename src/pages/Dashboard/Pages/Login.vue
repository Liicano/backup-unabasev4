<template>
  <div class="md-layout text-center">

    <notifications></notifications>
    <div class="md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100">
      <login-card header-color="green">
        <h4 slot="title" class="title">{{ lg.user.login.l }}</h4>
        <!-- <md-button slot="buttons" to="#facebook" class="md-just-icon md-simple md-white">
          <i class="fab fa-facebook-square"></i>
        </md-button>
        <md-button slot="buttons" to="#twitter" class="md-just-icon md-simple md-white">
          <i class="fab fa-twitter"></i>
        </md-button> -->
        <!-- <md-button slot="buttons" :href="getUrls.google.auth" class="md-just-icon md-simple md-white">
          <i class="fab fa-google-plus-g"></i>
        </md-button> -->
        <md-button slot="buttons" data-onsuccess="onSignin" class="g-signin2 md-just-icon md-simple md-white">
          
          <Gauth></Gauth>
        </md-button>
        <!-- <md-field class="md-form-group" slot="buttons">
          
          <Gauth></Gauth>
        </md-field> -->

        <p slot="description" class="description">{{ lg.user.classic }}</p>
        <!-- <md-field class="md-form-group" slot="inputs">
          <md-icon>face</md-icon>
          <label>First Name...</label>
          <md-input v-model="firstname"></md-input>
        </md-field> -->
        <md-field class="md-form-group" slot="inputs">
          <md-icon>email</md-icon>
          <label>{{ lg.user.email }} or {{ lg.user.username }}...</label>
          <md-input v-model="email" type="email"></md-input>
        </md-field>
        <md-field class="md-form-group" slot="inputs">
          <md-icon>lock_outline</md-icon>
          <label>{{ lg.user.login.password }}...</label>
          <md-input v-model="password"></md-input>
        </md-field>
        <md-button slot="footer" class="md-simple md-success md-lg" @click="login">
          {{ lg.user.login.loginGo }}
        </md-button>
        <md-button slot="footer" class="md-simple md-success md-lg" to="/register">
          {{ lg.user.register.r }}
        </md-button>
      </login-card>
    </div>
  </div>
</template>
<script>
import { LoginCard } from "@/components";
import { mapGetters } from "vuex";
import Vue from "vue";
import Notifications from "../../../components/NotificationPlugin";
Vue.use(Notifications);
// import axios from 'axios'
export default {
  components: {
    LoginCard
  },
  data() {
    return {
      user: null,
      firstname: null,
      email: null,
      password: null
    };
  },
  computed: {
    ...mapGetters([
      // eslint-disable-next-line
      "getUrls"
    ])
  },
  methods: {
    login() {
      this.$store
        .dispatch("users/fetchLogin", {
          username: this.email,
          password: this.password
        })
        // eslint-disable-next-line
        .then(res => {
          this.$router.push("/");
        })
        .catch(err => {
          //err.status  & err.statusText
          console.log(err);
          let type = new Map();
          type.set(403, "warning");
          type.set(404, "danger");
          type.set(401, "info");
          this.$notify({
            message: err.statusText,
            icon: "add_alert",
            horizontalAlign: "right",
            verticalAlign: "top",
            // type: this.type[color]
            type: type.get(err.status)
          });
        });
    }
  }
};
</script>

<style>
</style>