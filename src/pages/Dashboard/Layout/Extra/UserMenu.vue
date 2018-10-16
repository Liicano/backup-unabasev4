<template>
  <div class="user">
    <div class="photo" v-if="user.google.imgUrl">
      <img :src="user.google.imgUrl" alt="avatar"/>
    </div>
    <div class="photo" v-else>
      <img src="../../../../../public/img/profile.png" alt="avatar"/>
    </div>
    <div class="user-info">
      <a data-toggle="collapse" :aria-expanded="!isClosed" @click.stop="toggleMenu" @click.capture="clicked">
           <span v-if="$route.meta.rtlActive">
             {{rtlTitle}}
             <b class="caret"></b>
          </span>
           <span v-else>
             {{profile.name}}
             <b class="caret"></b>
          </span>
      </a>

        <collapse-transition>
            <div v-show="!isClosed">
              <ul class="nav" >
                <slot>
                  <li>
                    <a href="#vue">
                      <md-icon>person</md-icon>
                      <span class="sidebar-normal">{{lg.user.profile}}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#vue">
                      <md-icon>edit</md-icon>
                      <span class="sidebar-normal">{{lg.user.editProfile}}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#vue">
                      <md-icon>people</md-icon>
                      <span class="sidebar-normal">{{lg.modules.business}}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#vue" @click="logout">
                      <md-icon>exit_to_app</md-icon>
                      <span class="sidebar-normal">{{lg.user.logout}}</span>
                    </a>
                  </li>
                </slot>
              </ul>
          </div>
        </collapse-transition>
    </div>
  </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import { mapGetters } from 'vuex';

export default {
  components: {
    CollapseTransition
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    rtlTitle: {
      type: String,
      default: 'تانيا أندرو'
    },
    avatar: {
      type: String,
      default: './img/faces/avatar.jpg'
    }
  },
  data() {
    return {
      isClosed: true,
      name: '',
      profile: {}
    };
  },
  computed: {
    ...mapGetters({
      user: 'users/user'
    })
  },
  mounted() {
    this.profile.name = this.user.name || this.user.username;
  },
  methods: {
    clicked: function(e) {
      e.preventDefault();
    },
    toggleMenu: function() {
      this.isClosed = !this.isClosed;
    },
    logout() {
      this.$store
        .dispatch('users/logout')
        // eslint-disable-next-line
        .then(res => {
          window.location.href = '/'; 
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
.collapsed {
  transition: opacity 1s;
}
.photo {
  background-color: white;
}
</style>
