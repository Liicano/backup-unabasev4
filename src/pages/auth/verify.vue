<template>
  <div class="md-layout text-center">

  </div>
</template>
<script>
import { LoginCard } from '@/components';
import { mapGetters } from 'vuex';
import Vue from 'vue';
// import Notifications from '../../../components/NotificationPlugin';
// import api from '../../../config/api';

// Vue.use(Notifications);
// import axios from 'axios'
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted: function() {
    this.$store
      .dispatch('users/verify', {
        hash: this.$route.params.hash,
        id: this.$route.query.id
      })
      .then(res => {
        this.$notify({
          message: res.message,
          icon: 'add_alert',
          horizontalAlign: 'right',
          verticalAlign: 'top',
          type: 'success'
        });
        setTimeout(() => {
          this.$router.push('/');
        }, 3000);
      })
      .catch(err => {
        this.$notify({
          message: err.message,
          icon: 'add_alert',
          horizontalAlign: 'right',
          verticalAlign: 'top',
          type: 'warning'
        });
        setTimeout(() => {
          this.$router.push('/');
        }, 3000);
      });
  }
};
</script>

<style>
</style>