<template>
  <div>
  <div class="md-layout">
    
    <!-- BOTON NUEVA VENTA -->
  <router-link :to="{path:'/income'}">
     <div class="fixed-action-btn">
        <a class="btn-floating btn-large green">
          <i class="large material-icons">add</i>
        </a>
      </div>
  </router-link>

      <!-- LISTA DE VENTAS REALIZADAS  (MOBIL) -->
      <div class="md-layout-item md-medium-size-30 md-xsmall-size-100 md-size-100 " id="lista_ventas">
        <md-list class="md-triple-line" style="border-radius:15px;">

        <div v-for="venta in users" :key="venta.id">
              <router-link :to="{path:'/sale/details/'+venta.id, params:{venta:venta}}">
            <md-list-item style="padding: 0px 0px;">
              <md-avatar>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZYxbsw4kHRFbhU9KQtnLu7TtmYITTNH58sVGKDKsq78MWo9Z" alt="People">
              </md-avatar>

              <div class="md-list-item-text">
                <span>{{venta.asunto}}</span>
                <span>{{venta.receptor.nombre}} {{venta.receptor.apellido}}</span>
                <p><b>$ {{venta.monto_total}} CLP</b></p>
              </div>

              
                <small>21 Sept</small>
            
            </md-list-item>
              <md-divider class="md-inset"></md-divider>
              </router-link>
        </div>
          </md-list>
          </div>

        </div>

    <!-- TABLA DE VENTAS (ESCRITORIO) -->
        <div id="tabla_ventas">
          
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <md-card>
                  <md-card-header class="md-card-header-icon md-card-header-green">
                    <div class="card-icon">
                      <md-icon>monetization_on</md-icon>
                    </div>
                    <h4 class="title">VENTAS</h4>
                  </md-card-header>
                  <md-card-content>
                    <md-table v-model="users" table-header-color="green">
                      <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                        <md-table-cell md-label="Referencia">{{ item.asunto }}</md-table-cell>
                        <md-table-cell md-label="Cliente">{{ item.receptor.nombre }} {{ item.receptor.apellido }}</md-table-cell>
                        <md-table-cell md-label="Fecha">{{ item.fecha }}</md-table-cell>
                        <md-table-cell md-label="Ubicacion"><center><a href=""> <md-icon>map</md-icon></a></center></md-table-cell>
                        <md-table-cell md-label="Total"><b>$ </b>{{ item.monto_total }} CLP</md-table-cell>
                        <md-table-cell md-label="Opciones"><router-link :to="{path:'/sale/details/'+item.id, params:{venta:item}}"><center><md-button class="md-warning md-just-icon md-round"><md-icon >edit</md-icon></md-button></center></router-link></md-table-cell>
                      </md-table-row>
                    </md-table>
                  </md-card-content>
                </md-card>
              </div>
            </div>


        </div>

  </div>
</template>

<script>
// LIBRERIAS EXTERNAS
import users from "@/pages/Dashboard/Tables/users.js";
import swal from "sweetalert2";
// import $ from 'jquery'


//COMPONENTES
import {
  
} from "@/components";

export default {
  components: {
    
  },
  props: {},
  data() {
    return {
      users: users,
      checkbox1: null,
      
    };
  },
  methods: {
    handleDelete(item) {
      swal({
        title: "Are you sure?",
        text: `You won't be able to revert this!`,
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "md-button md-success btn-fill",
        cancelButtonClass: "md-button md-danger btn-fill",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.deleteRow(item);
          swal({
            title: "Deleted!",
            text: `You deleted ${item.name}`,
            type: "success",
            confirmButtonClass: "md-button md-success btn-fill",
            buttonsStyling: false
          });
        }
      });
    }
  },
  mounted() {
     
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  computed: {
    
  },
  watch: {
   
  }
};
</script>
<style lang="scss" scoped>
  small {
    display: block;
  }
  #tabla_ventas{
    display: none;
  }
  // CAMBIOS AL ENTRAR EN PANTALLA MOVIL
  @media (min-width: 992px) {
    #lista_ventas{
      display:none;
    }
    #tabla_ventas{
      display:block;
    }

  }
</style>
