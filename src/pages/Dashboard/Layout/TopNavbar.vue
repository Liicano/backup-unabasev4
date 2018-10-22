<template>
<md-toolbar
    md-elevation="0"
    class="md-success md-dense"
    :class="{'md-toolbar-absolute md-fixed-top': $route.meta.navbarAbsolute}">
    <div class="md-toolbar-row" v-if="getIncomes.docs">
      <div class="md-toolbar-section-start md-small">
          <router-link :to="{path:'user/profile'}" tag="a" class="brand-logo">
           <md-avatar class="avatarMobile">
              <img :src="user.google.imgUrl" alt="Avatar">
            </md-avatar>
          </router-link>

          <md-button class="md-just-icon md-round md-simple md-white">
            <!-- <md-icon>menu</md-icon> -->
          </md-button>
          </div>
                          
          <md-autocomplete v-model="selectedMovement._id" :md-options="getIncomes.docs" md-layout="box">
          <label>Buscar...</label>

          <template slot="md-autocomplete-item" slot-scope="{ item, term }">

            <router-link :to="{path:'/income/'+item._id}" style="color: black;">
            <div class="md-layout">
              <div class="md-layout-item md-size-50">
                <md-highlight-text :md-term="term">{{ item.name }}</md-highlight-text>
              </div>
               <div class="md-layout-item md-size-50">
               <small class="text-info">Venta</small>
              </div>
            </div>

             <div class="md-layout">
              <div class="md-layout-item md-size-100">
             <small :md-term="term">{{ (item.client == null)? 'null client' : item.client.name }}</small>
               
              </div>
              
            </div>
            </router-link>
          </template>

          <template slot="md-autocomplete-empty" slot-scope="{ term }">
          <div class="md-small-hide">
              <span>No se encontraron resultados para "{{ term }}"</span> <br> <br>
            <a href="/income" class="text-decoration:none;cursor:pointer;">¡Crea una nueva venta!</a>
          </div>
          </template>
    </md-autocomplete>
      
       <div class="md-toolbar-section-end">
          <md-button class="md-just-icon md-round md-simple md-white">
            <!-- <md-icon>refresh</md-icon> -->
          </md-button>

          <router-link :to="{path:'/income'}">
           <md-button class="md-just-icon md-round md-simple md-white">
            <md-icon>add</md-icon>
          </md-button>
          </router-link>
        </div>
    </div>

  </md-toolbar>




  
</template>


<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  data() {
    return {
      selectedMovement: []
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    },
       ...mapActions({
         getAllIncomes: 'incomes/getAllIncomes'
    })
  },
   computed: {
    ...mapGetters({
      user: 'users/user',
      getIncomes: 'incomes/getIncomes'
    })
  },
  created(){
    this.getAllIncomes();
  }
};
</script>


<style lang="scss" scoped>
#mobile_navbar {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 9%;
  background: rgb(231, 231, 231);
}
#desktop_navbar {
  display: none;
}
@media (min-width: 992px) {
  .avatarMobile{
    display: none;
  }
}

.md-menu,
.toggle {
  margin: 0px;
}

#profile_img {
  width: 4%;
  float: left;
  margin-right: -50%;
}

textarea:focus {
  border-bottom: none !important;
  box-shadow: none !important;
}
.topNavbar{
   overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
}

.navbarImg {
  max-width: 36px;
  max-height: 36px;
  border-radius: 50px;
}
</style>
