<template>
  <div class="wrapper" :class="[{'nav-open': $sidebar.showSidebar}, {'rtl': $route.meta.rtlActive}]">
   
    <side-bar>
      <user-menu></user-menu>
      <mobile-menu></mobile-menu>
      <template slot-scope="props" slot="links">
        
        <!-- LINKS DE UNABASE -->
        <div class="container-fluid">
           <!-- INCOME -->
       <sidebar-item :link="{name: `${lg.modules.income}`, icon: 'monetization_on', path: '/incomes'}"></sidebar-item>

        </div>
        <!-- ESPACIADO -->
        <br>
        <md-divider></md-divider>
        <br>

        <!-- MENU DE HERRAMIENTAS -->
       <div class="container-fluid">
          <tools-menu></tools-menu>
       </div>

      </template>
      
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <br>
      <div id="main_panel" class="container-fluid" :class="{content: !$route.meta.hideContent}" @click="toggleSidebar">
        <zoom-center-transition :duration="200" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </zoom-center-transition>
          
      </div>

     
      <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer> -->
    </div>
     
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./Extra/MobileMenu.vue";
import UserMenu from "./Extra/UserMenu.vue";
import ToolsMenu from "./Extra/toolsMenu.vue";

import { SlideYDownTransition, ZoomCenterTransition } from "vue2-transitions";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
    UserMenu,
    ToolsMenu,
    SlideYDownTransition,
    ZoomCenterTransition
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  },
  mounted() {
    let docClasses = document.body.classList;
    let isWindows = navigator.platform.startsWith("Win");
    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      initScrollbar("sidebar");
      initScrollbar("sidebar-wrapper");
      initScrollbar("main-panel");

      docClasses.add("perfect-scrollbar-on");
    } else {
      docClasses.add("perfect-scrollbar-off");
    }
  }
};
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
    opacity: 1;
  }
}
.main-panel .zoomIn {
  animation-name: zoomIn95;
}
@keyframes zoomOut95 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}
.main-panel .zoomOut {
  animation-name: zoomOut95;
}
#main_panel {
  margin-top: -5%;
}
</style>
