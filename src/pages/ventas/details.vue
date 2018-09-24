<template>
  <div>
  <div class="md-layout" style="margin-top: -5%;">
<!-- DETALLE DE VENTA -->
<div class="md-layout-item md-medium-size-30 md-xsmall-size-100 md-size-100 ">

<md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>list</md-icon>
          </div>
          <h4 class="title">VENTA DE MI TELEFONO</h4>
          <!-- <h5 class="pull-right">21/09/2018</h5> --> 
        </md-card-header>
        
        <md-card-content>
           <md-divider></md-divider>
           <div class="md-layout">

               <div class="md-layout-item md-small-size-5">
                   <div class="pull-left">
                        <small>Items</small>
                        <h3> <b></b> 5 </h3>
                   </div>
               </div>
                 
                <div class="md-layout-item md-small-size-55 md-size-40">
                  <center>
                        <small>Total</small>
                        <h3> <b>$</b> 150.000</h3>
                  </center>
               </div>



               <div class="md-layout-item md-small-size-30">
                   <div class="pull-right">
                     <small>Opciones</small>
                       <md-button class="md-danger md-just-icon md-round" @click.native="showSwal('success-message')"><i class="fas fa-trash"></i></md-button>     
                        <md-tooltip position="left">Anular venta</md-tooltip> 
                    </div>
               </div>

           </div>
            <md-divider></md-divider>
        </md-card-content>
</md-card>
</div>
</div>

      <!-- MODAL AGREGAR NUEVO ITEM -->
      <modal v-if="modalNewItem" @close="modalNewItemHide">
                <template slot="header">
                  <md-button class="md-simple md-just-icon md-round modal-default-button" @click="modalNewItemHide">
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body">
                  <center><h3>NUEVO ITEM</h3></center>
                    <hr><br>
                  <md-field>
                    <label>Nombre</label>
                    <md-input  type="text"></md-input>
                  </md-field>
                   <md-field>
                    <label>Cantidad</label>
                    <md-input  type="number"></md-input>
                  </md-field>
                  <md-field>
                    <label>Precio</label>
                    <md-input  type="number"></md-input>
                  </md-field>
                </template>

                <template slot="footer">
                  <h6 class="pull-left"><b>$ </b> 150.000 CLP</h6>
                  <hr>
                  <md-button class="md-simple" @click="modalNewItemHide">NO</md-button>
                  <md-button class="md-success md-simple" @click="additemToSale(item)">SI</md-button>
                </template>
      </modal>


      <!-- MODAL EDITAR ITEM -->
      <modal v-if="modalEditItem" @close="modalEditItemHide">
                <template slot="header">
                  <md-button class="md-simple md-just-icon md-round modal-default-button" @click="modalEditItemHide">
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body">
                  <center><h3>EDITAR ITEM</h3></center>
                    <hr><br>
                  <md-field>
                    <label>Nombre</label>
                    <md-input  type="text"></md-input>
                  </md-field>
                   <md-field>
                    <label>Cantidad</label>
                    <md-input  type="number"></md-input>
                  </md-field>
                  <md-field>
                    <label>Precio</label>
                    <md-input  type="number"></md-input>
                  </md-field>
                </template>

                <template slot="footer">
                  <md-button class="md-simple" @click="modalEditItemHide">NO</md-button>
                  <md-button class="md-success md-simple" @click="editItem(item)">SI</md-button>
                </template>
      </modal>

      

    <md-card>
        <md-card-header>
           <div class="md-layout">
                <div class="md-layout-item md-small-100 md-size-10">
                    <h3>Items</h3>
                    
                </div>
                <div class="md-layout-item md-small-100 md-size-90">
                    <div class="pull-right" style="margin-top: 1.5%;">

                        <md-button class="md-success md-just-icon md-round" @click="modalNewItem = true"><i class="fas fa-plus"></i></md-button>     
                        <md-tooltip position="left">Nuevo item</md-tooltip>

                    </div>
                    
                </div>
                
            </div>
            <hr>
            
            <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-list class="md-triple-line" style="padding: 0px 0px;">
   
                        <md-list-item style="padding: 0px 0px;">
                            <md-avatar>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZYxbsw4kHRFbhU9KQtnLu7TtmYITTNH58sVGKDKsq78MWo9Z" alt="People">

                            </md-avatar>

                            <div class="md-list-item-text">
                            <span>Telefono</span>
                            <span>1</span>
                            <p> <b>$ 70.000 CLP</b></p>
                            </div>

                            <md-button class="md-icon-button md-list-action md-warning" @click="modalEditItem = true">
                            <md-icon>edit</md-icon>
                            </md-button>
                            
                        </md-list-item>
                            <md-divider class="md-inset"></md-divider>
                        
                        <md-list-item style="padding: 0px 0px;">
                            <md-avatar>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZYxbsw4kHRFbhU9KQtnLu7TtmYITTNH58sVGKDKsq78MWo9Z" alt="People">

                            </md-avatar>

                            <div class="md-list-item-text">
                            <span>TV</span>
                            <span>2</span>
                            <p> <b>$ 150.000 CLP</b></p>
                            </div>

                            <md-button class="md-icon-button md-list-action md-warning">
                            <md-icon>edit</md-icon>
                            </md-button>
                        </md-list-item>
                        <md-divider class="md-inset"></md-divider>


                        <md-list-item style="padding: 0px 0px;">
                            <md-avatar>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZYxbsw4kHRFbhU9KQtnLu7TtmYITTNH58sVGKDKsq78MWo9Z" alt="People">

                            </md-avatar>

                            <div class="md-list-item-text">
                            <span>Impresora</span>
                            <span>1</span>
                            <p> <b>$ 200.000 CLP</b></p>
                            </div>

                            <md-button class="md-icon-button md-list-action md-warning">
                            <md-icon>edit</md-icon>
                            </md-button>
                        </md-list-item>
                        <md-divider class="md-inset"></md-divider>
    </md-list>
                </div>
            </div>
        </md-card-header>
        <md-card-content>
   
        </md-card-content>
    </md-card>


  </div>
</template>

<script>
// LIBRERIAS EXTERNAS
import users from "@/pages/Dashboard/Tables/users.js";
// import Fuse from "fuse.js";
import swal from "sweetalert2";



//COMPONENTES
import {
  StatsCard,
  NavTabsCard,
  TimeLine,
  TimeLineItem,
  PricingCard,
  TestimonialCard,
  Pagination,
  Modal
  
} from "@/components";

export default {
  components: {
    StatsCard,
    NavTabsCard,
    PricingCard,
    TimeLine,
    TimeLineItem,
    TestimonialCard,
    Pagination,
    Modal
  },
  props: {},
  data() {
    return {
      modalNewItem: false,
      modalEditItem: false,
      users: users,
      checkbox1: null,
      
    };
  },
  methods: {
    handleLike(item) {
      swal({
        title: `You liked ${item.name}`,
        buttonsStyling: false,
        type: "success",
        confirmButtonClass: "md-button md-success"
      });
    },
    handleEdit(item) {
      swal({
        title: `You want to edit ${item.name}`,
        buttonsStyling: false,
        confirmButtonClass: "md-button md-info"
      });
    },
    showSwal(item) {
      swal({
        title: "Estas seguro?",
        text: `Al anular una venta, esta no aparecera en tu lista de ventas`,
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "md-button md-success btn-fill",
        cancelButtonClass: "md-button md-danger btn-fill",
        confirmButtonText: "SI",
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.deleteRow(item);
          swal({
            title: "Venta anulada",
            text: ``,
            type: "success",
            confirmButtonClass: "md-button md-success btn-fill",
            buttonsStyling: false
          });
        }
      });
    },
    deleteRow(item) {
      let indexToDelete = this.tableData.findIndex(
        tableRow => tableRow.id === item.id
      );
      if (indexToDelete >= 0) {
        this.tableData.splice(indexToDelete, 1);
      }
    },
    modalNewItemHide: function(){
      this.modalNewItem = false
    },
    modalEditItemHide: function(){
      this.modalEditItem = false;
    },
    additemToSale(){
      this.modalNewItem = false
      alert("Action");
    },
    editItem(){
      this.modalEditItem = false;
      alert("Action");
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  computed: {
    
  },
  
};
</script>
<style lang="scss" scoped>
  small {
    display: block;
  }

   .md-content {
    width: 200px;
    height: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
