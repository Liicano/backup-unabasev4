<template>
<<<<<<< HEAD
<div>
  
=======
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
  <div class="sidebar"
       :data-color="activeColor"
       :data-image="backgroundImage"
       :data-background-color="backgroundColor"
       :style="sidebarStyle">

    <div class="logo">
      <a href="https://www.creative-tim.com" class="simple-text logo-mini" target="_blank">
        <div class="logo-img">
<<<<<<< HEAD
          <img :src="logo" class="logoimagen">
=======
          <img :src="logo">
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
        </div>
      </a>
      <a href="https://www.creative-tim.com" class="simple-text logo-normal" target="_blank">
        <template v-if="$route.meta.rtlActive">{{rtlTitle}}</template>
<<<<<<< HEAD
        <template v-else>{{title}}   </template>   <small>      V4</small>
=======
        <template v-else>{{title}}</template>
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
      </a>
      <div class="navbar-minimize">
        <md-button id="minimizeSidebar" class="md-round md-just-icon md-transparent" @click="minimizeSidebar">
          <i class="material-icons text_align-center visible-on-sidebar-regular">more_vert</i>
        <i class="material-icons design_bullet-list-67 visible-on-sidebar-mini">view_list</i>
      </md-button>
      </div>
    </div>
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <slot></slot>
      <md-list class="nav">
        <slot name="links">
          <sidebar-item v-for="(link, index) in sidebarLinks"
                        :key="link.name + index"
                        :link="link">

            <sidebar-item v-for="(subLink, index) in link.children"
                          :key="subLink.name + index"
                          :link="subLink">
            </sidebar-item>
          </sidebar-item>
        </slot>
      </md-list>
    </div>
  </div>
<<<<<<< HEAD
  
</div>
</template>
<script>
export default {
  name: "sidebar",
  props: {
    title: {
      type: String,
      default: "UNABASE"
    },
    rtlTitle: {
      type: String,
      default: "توقيت الإبداعية"
    },
    activeColor: {
      type: String,
      default: "green",
      validator: value => {
        let acceptedValues = [
          "",
          "primary",
          "azure",
          "green",
          "orange",
          "danger",
          "rose"
        ];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    backgroundImage: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: "black",
      validator: value => {
        let acceptedValues = ["", "black", "white", "red"];
        return acceptedValues.indexOf(value) == 1;
      }
    },
    logo: {
      type: String,
      default: "./img/logotipo.png"
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  methods: {
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    }
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      };
    }
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  }
};
</script>
<style>
@media (min-width: 992px) {
  .navbar-search-form-mobile,
  .nav-mobile-menu {
    display: none;
  }
}
=======
</template>
<script>
  export default {
    name: 'sidebar',
    props: {
      title: {
        type: String,
        default: 'Vue MD PRO'
      },
      rtlTitle: {
        type: String,
        default: 'توقيت الإبداعية'
      },
      activeColor: {
        type: String,
        default: 'green',
        validator: (value) => {
          let acceptedValues = ['', 'primary', 'azure', 'green', 'orange', 'danger', 'rose']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      backgroundImage: {
        type: String,
        default: './img/sidebar-2.jpg'
      },
      backgroundColor: {
        type: String,
        default: 'black',
        validator: (value) => {
          let acceptedValues = ['', 'black','white', 'red']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      logo: {
        type: String,
        default: './img/vue-logo.png'
      },
      sidebarLinks: {
        type: Array,
        default: () => []
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    provide () {
      return {
        autoClose: this.autoClose
      }
    },
    methods: {
      minimizeSidebar () {
        if (this.$sidebar) {
          this.$sidebar.toggleMinimize()
        }
      }
    },
    computed: {
      sidebarStyle () {
        return {
          backgroundImage: `url(${this.backgroundImage})`
        }
      }
    },
    beforeDestroy () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.showSidebar = false
      }
    }
  }

</script>
<style>
  @media (min-width: 992px) {
    .navbar-search-form-mobile,
    .nav-mobile-menu{
      display: none;
    }
  }
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
</style>
