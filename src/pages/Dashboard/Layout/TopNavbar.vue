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

          <span v-if="navOptions"  v-for="nav in navOptions" :key="nav._id">
              
              <router-link :to="{path: nav.isLink.route}" v-if="nav.isLink">
                <md-button class="md-just-icon md-round md-simple md-white">
                  <md-icon>{{nav.icon}}</md-icon>
                </md-button>
              </router-link>

              <span v-else>
                <md-button class="md-just-icon md-round md-simple md-white" @click="call(nav.function)">
                  <md-icon>{{nav.icon}}</md-icon>
                </md-button>
              </span>

          </span>
        
        </div>
    </div>
  </md-toolbar>

</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import swal from 'sweetalert2';

export default {
  data() {
    return {
      selectedMovement: [],
      navOptions: []
    };
  },

  components:{
    swal
  },
  methods: {
    call(funct){
      this[funct]();
    },

    newInvoice() {
      this.$store.dispatch('incomes/createInvoice', this.getIncome);
    },
    shareInvoice(){
      this.$store.dispatch('incomes/shareIncome', this.getIncome);
    },
    deleteIncome(){
      this.$store.dispatch('incomes/anulateIncome', this.getIncome).then(res => {
        
           if(res == true){
             swal({
              title: '¡Venta anulada con exito!',
              text:'',
              type: 'success',
              showCancelButton: false,
                  confirmButtonText: 'OK',
                  confirmButtonClass: 'md-button md-success',
                  buttonsStyling: false
                }).then((result) => {
                  if (result.value) {
                    this.$router.push('/incomes');
                  }
              })
           }
          
      })
    },

    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    },
    ...mapActions({
      getAllIncomes: 'incomes/getAllIncomes',
    })
  },
  computed: {
    ...mapGetters({
      user: 'users/user',
      getIncomes: 'incomes/getIncomes',
      getIncome: 'incomes/getIncome'
    })
  },
  created() {
   this.navOptions = this.$route.meta.navOptions;
    this.getAllIncomes();
  },
  mounted() {
   this.navOptions = this.$route.meta.navOptions;
  },
  watch: {
    $route: function(){
      this.navOptions = this.$route.meta.navOptions;
    }
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
  .avatarMobile {
    display: none;
  }
  .smallScreen-button{
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
.topNavbar {
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
