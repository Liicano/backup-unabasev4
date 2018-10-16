<template>
  <div class="user">
    <div class="photo">
      <img src="data:image/png;base64,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" alt="">
    </div>
   
    <div class="user-info">
      <a data-toggle="collapse" :aria-expanded="!isClosed" @click.stop="toggleMenu" @click.capture="clicked">
           <span>
             Herramientas
             <b class="caret"></b>
          </span>
           
      </a>

        <collapse-transition>
            <div v-show="!isClosed">
              <ul class="nav" >
                <slot>
                  <li>
                    <a href="#vue">
                      <md-icon>monetization_on</md-icon>
                      <span class="sidebar-normal">Moneda</span>
                    </a>
                  </li>
                  <li>
                    <a href="#vue">
                      <md-icon>euro_symbol</md-icon>
                      <span class="sidebar-normal">Impuesto</span>
                    </a>
                  </li>
                  <li>
                    <a href="#vue">
                      <md-icon>description</md-icon>
                      <span class="sidebar-normal">Items</span>
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
// import { mapGetters } from 'vuex';

export default {
  components: {
    CollapseTransition
  },
  props: {
    
  },
  data() {
    return {
       isClosed: true,
    };
  },
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
     clicked: function(e) {
      e.preventDefault();
    },
    toggleMenu: function() {
      this.isClosed = !this.isClosed;
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
