<template>
  <div class="md-layout text-center">
    <div class="md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100">
      <login-card header-color="green">
        <h4 slot="title" class="title">Log in</h4>
        <md-button slot="buttons" to="#facebook" class="md-just-icon md-simple md-white">
          <i class="fab fa-facebook-square"></i>
        </md-button>
        <md-button slot="buttons" to="#twitter" class="md-just-icon md-simple md-white">
          <i class="fab fa-twitter"></i>
        </md-button>
        <md-button slot="buttons" to="#google" class="md-just-icon md-simple md-white">
          <i class="fab fa-google-plus-g"></i>
        </md-button>
        <p slot="description" class="description">Or Be Classical</p>
        <md-field class="md-form-group" slot="inputs">
          <md-icon>face</md-icon>
          <label>First Name...</label>
          <md-input v-model="firstname"></md-input>
        </md-field>
        <md-field class="md-form-group" slot="inputs">
          <md-icon>email</md-icon>
          <label>Email...</label>
          <md-input v-model="email" type="email"></md-input>
        </md-field>
        <md-field class="md-form-group" slot="inputs">
          <md-icon>lock_outline</md-icon>
          <label>Password...</label>
          <md-input v-model="password"></md-input>
        </md-field>
        <md-button slot="footer" class="md-simple md-success md-lg">
          Lets Go
        </md-button>
      </login-card>
    </div>
  </div>
</template>
<script>
import { LoginCard, Gauth } from "@/components";
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
