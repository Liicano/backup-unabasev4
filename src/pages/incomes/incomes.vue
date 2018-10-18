<template>
  <div>
  <div class="md-layout">
        <!-- BOTON NUEVA VENTA (MOBILE) -->
          <router-link :to="{path:'/income'}">
            <div class="fixed-action-btn" id="new_venta_btn_mobile" style="margin-bottom: 12% !important;">
                <a class="btn-floating btn-large green">
                  <i class="large material-icons">add</i>
                </a>
            </div>
                 

          </router-link>
          <router-link :to="{path:'/income'}">
            <div class="fixed-action-btn" id="new_venta_btn_desktop" style=" margin-bottom: 1% !important;">
                <a class="btn-floating btn-large green">
                  <i class="large material-icons">add</i>
                </a>
            </div>
                  

          </router-link>


            <!-- LISTA DE VENTAS REALIZADAS  (MOBILE) -->
            <div id="lista_ventas" v-if="getIncomes.docs && isMobileLocal">
              
             <div class="container-fluid">
                <div class="md-layout-item md-size-100">
                <listmobile :incomes="getIncomes.docs"></listmobile>
             
              </div>
             </div>
            </div>

  </div>
<!-- TABLA DE VENTAS (ESCRITORIO) -->
    <div id="tabla_ventas" v-if="(getIncomes.docs) && (isMobileLocal == false)">
       
          <div class="md-layout-item md-size-100">
            <listdesktop :incomes="getIncomes.docs"></listdesktop>
          </div>
        
      </div>


  </div>
</template>

<script>
// VUEX
import { mapGetters, mapActions } from 'vuex';

// LIBRERIAS EXTERNAS
import users from '@/pages/Dashboard/Tables/users.js';

// COMPONENTES INTERNOS
import listmobile from '@/pages/incomes/mobile/list_incomes.vue';
import listdesktop from '@/pages/incomes/desktop/list_incomes.vue';
import isMobile from '../../assets/js/isMobile.js'

export default {
  components: {
    listmobile,
    listdesktop
  },

  data() {
    return {
      users: users,
      checkbox1: null,
      incomes: [],
      isMobileLocal: false
    };
  },

  methods:{
     ...mapActions({
         getAllIncomes: 'incomes/getAllIncomes'
    })
  },
  
  created(){
     this.getAllIncomes();
     this.isMobileLocal = isMobile;
  },
  computed:{
     ...mapGetters({
       getIncomes: 'incomes/getIncomes'
     })
  },
  
};
</script>
<style lang="scss" scoped>
#tabla_ventas {
    display: none;
  }
   #new_venta_btn_desktop {
    display: none;
  }

@media (min-width: 992px) {
  #lista_ventas {
    display: none;
  }
  #new_venta_btn_mobile {
    display: none;
  }

  #tabla_ventas {
    display: block;
  }
  #new_venta_btn_desktop {
    display: block;
  }
}

.md-layout-item {
  padding-right: 0px;
  padding-left: 0px;
}
</style>
