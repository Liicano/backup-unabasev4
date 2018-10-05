<template>
<div>
  
  <!-- MODAL DE CLIENTES -->
  <modal v-if="modalClientes" @close="modalClientesHide">
    <template slot="header">
      <md-button class="md-simple md-just-icon md-round modal-default-button" @click="modalClientesHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
     <div class="row">
       <div class="col s12">
          <ul class="collection with-header" style="border-style: none;">
        <li class="collection-item"><div><a style="color: inherit;" class="">Hector Gonzalez</a></div></li>
      </ul>
       </div>
     </div>
    </template>

    <template slot="footer">
      <md-button class="md-simple" @click="modalClientesHide">Salir</md-button>
      
    </template>
  </modal>
<!-- Modal de clientes -->

<!-- MODAL DE ITEMS -->
  <modal v-if="modalItems" @close="modalItemsHide">
    <template slot="header">
      <md-button class="md-simple md-just-icon md-round modal-default-button" @click="modalItemsHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
     <div class="row">
       <div class="col s12">
          <ul class="collection with-header" style="border-style: none;">
            <li class="collection-item"><div><a style="color: inherit;" class="">PAPA</a></div></li>
            <li class="collection-item"><div><a style="color: inherit;" class="">ZANAHORIA</a></div></li>
            <li class="collection-item"><div><a style="color: inherit;" class="">PANTALON</a></div></li>
            <li class="collection-item"><div><a style="color: inherit;" class="">SERVICIO DE REPARACION DE PC</a></div></li>
          </ul>
       </div>
     </div>
    </template>

    <template slot="footer">
      <md-button class="md-simple" @click="modalItemsHide">Salir</md-button>
    </template>
  </modal>
<!-- Modal de ITEMS -->


<!-- MODAL DE VER ITEMS DE LA VENTA -->
  <modal v-if="modalSaleItems" @close="modalSaleItemsHide">
    <template slot="header">
      <md-button class="md-simple md-just-icon md-round  modal-default-button" @click="modalSaleItemsHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
     <div class="row">
       <div class="col s12">
          <ul class="collection with-header" style="border-style: none; padding: 0px 0px;">
            <li class="" v-for="itemInSale in ventaObject.item" :key="itemInSale.id">

               <md-list-item style="padding: 0px 0px;">
              <md-avatar class="md-avatar-icon md-accent">
                <md-icon>attach_money</md-icon>
              </md-avatar>


              <div class="md-list-item-text">
                <span><b>{{itemInSale.nombre | uppercase}}</b> * {{itemInSale.cantidad}}</span>
                <span><b>SUBTOTAL </b>{{(itemInSale.precio * itemInSale.cantidad) | currency}}</span>
              
              </div>

              
            
            </md-list-item>

            </li>
          </ul>
       </div>
     </div>
    </template>

    <template slot="footer">
      <md-button class="md-simple" @click="modalSaleItemsHide">Salir</md-button>
      
    </template>
  </modal>
<!-- Modal de VER ITEMS DE LA VENTA -->


  <div class="form_desktop">
  <form @submit.prevent="validationHandler">
  <div class="md-layout">
      <div class="md-layout-item md-small-size-100 md-medium-size-60 md-small-size-60 md-size-60">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>monetization_on</md-icon>
          </div>
          <h4 class="title">Nueva venta</h4>
          
        </md-card-header>

        <md-card-content>
        <!-- Formulario -->

          <div class="md-layout">
          <div class="md-layout-item md-xsmall-size-100 md-medium-size-50 md-small-size-50 md-size-50">
              <div class="md-layout">
                <div class="md-layout-item md-small-size-70 md-size-80">
                        <div class="md-autocomplete md-success">

                       
  
                        
                           <span :class="{ 'control': true }">

                              <md-autocomplete id="autocompletadoUsers" name="cliente" class="search md-success"  style="" v-model="ventaObject.cliente" :md-options="employees" :md-open-on-focus="false" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('cliente') }">
                                <label v-if="$route.meta.rtlActive">Cliente</label>
                                <label v-else>Cliente</label>
                              </md-autocomplete>
                              <i v-show="errors.has('cliente')" class="fa fa-warning"></i>
                              <span v-show="errors.has('cliente')" class="help text-danger">Vacio</span>

                           </span>
                        
                        </div> 
                </div>
                <div class="md-layout-item md-small-size-10 md-size-10">
                  <md-button class="md-info md-just-icon md-round" @click.native="modalClientes = true;"><md-icon >person_add</md-icon></md-button>
                  <md-tooltip direction="bottom">Agregar cliente</md-tooltip>
                </div>
              </div>
          </div>

            
          

          </div>
        
         
       
        <div class="md-layout">
          
            <div class="md-layout-item md-xsmall-size-100 md-medium-size-45 md-small-size-45 md-size-45">

             <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label">
               Asunto
              </label>
              <div class="md-layout-item">
                <md-field>
                  <span :class="{ 'control': true }">
                  <md-input v-model="ventaObject.asunto" type="text" name="asunto" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('asunto') }"></md-input>
                    <i v-show="errors.has('asunto')" class="fa fa-warning"></i>
                    <span v-show="errors.has('asunto')" class="help text-danger">Vacio</span>
                </span>
                </md-field>
              </div>
            </div>

        </div>

         <div class="md-layout-item md-xsmall-size-100 md-medium-size-45 md-small-size-45 md-size-45">

             <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label">
               Nota
              </label>
              <div class="md-layout-item">
                <md-field>
                   <span :class="{ 'control': true }">
                      <md-input v-model="ventaObject.nota"  type="text" name="nota" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('nota') }"></md-input>
                        <i v-show="errors.has('nota')" class="fa fa-warning"></i>
                    <span v-show="errors.has('nota')" class="help text-danger">Vacio</span>
              </span>
                 
                </md-field>
              </div>
            </div>

        </div>

          
        </div>

        <br>
       
          
          <center><h3>Agregar items</h3></center>
         <div class="md-layout">

              <div class="md-layout-item md-xsmall-size-20 md-medium-size-25 md-small-size-25 md-size-25">

              </div>
           </div>


        <!-- /Formulario -->
        </md-card-content>

        <md-card-actions md-alignment="right">
          <form @submit.prevent="itemValidationHandler">
          <div class="md-layout">
            <div class="md-layout-item md-size-85 md-small-size-100" >
                <div class="md-layout" v-if="!showInputs">
                  <div class="md-layout-item md-size-55">
                  
                  <div class="md-autocomplete md-success">
                     
                <span :class="{ 'control': true }">
                    <md-autocomplete class="search md-success" style="" v-model="itemToAdd.nombre" :md-options="itemsModel" :md-open-on-focus="false" name="itemDesktop" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('itemDesktop') }">
                      <label v-if="$route.meta.rtlActive">Nombre del item</label>
                      <label v-else>Nombre del item</label>
                    </md-autocomplete>
                        <i v-show="errors.has('itemDesktop')" class="fa fa-warning"></i>
                        <span v-show="errors.has('itemDesktop')" class="help text-danger">Vacio</span>
                </span>

                 </div>

                  </div>
                 

                  <div class="md-layout-item md-size-15">
                   <md-field>
                    <span :class="{ 'control': true }">
                        <md-input type="number" placeholder="#" v-model="itemToAdd.cantidad" name="itemQuantityDesktop" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('itemQuantityDesktop') }"></md-input>
                        <i v-show="errors.has('itemQuantityDesktop')" class="fa fa-warning"></i>
                        <span v-show="errors.has('itemQuantityDesktop')" class="help text-danger">Vacio</span>
                    </span>
                  </md-field>
                  </div>

                  <div class="md-layout-item md-size-30">
                   <md-field>
                    
                   <span :class="{ 'control': true }">
                    <md-input placeholder="Precio"  type="number" v-model="itemToAdd.precio" name="itemCostDesktop" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('itemCostDesktop') }"></md-input>
                        <i v-show="errors.has('itemCostDesktop')" class="fa fa-warning"></i>
                        <span v-show="errors.has('itemCostDesktop')" class="help text-danger">Vacio</span>
                  </span>
                  </md-field>
                  </div>
                  
                </div>
            </div>
          <div class="md-layout-item md-size-15 md-small-size-100" md-alignment="right">
                
               <div class="pull-right" align="left">
              <center>
                <div v-if="showInputs">
                <md-button class="md-warning md-just-icon" @click="changeBtnStatus()" style="width: 100%;"><md-icon >add</md-icon></md-button>
                <md-tooltip md-direction="left">Nuevo item</md-tooltip>
                </div>
              </center>
              <center>
                <div v-if="!showInputs">
                <md-button type="submit" class="md-success md-just-icon "><md-icon >check</md-icon></md-button>
                <md-tooltip md-direction="left">Guardar item</md-tooltip>

              </div>
              </center>
             </div>
            
          </div>
          </div>
          </form>
        </md-card-actions>
      </md-card>
    </div>

    <div class="md-layout-item md-small-size-100 md-medium-size-40 md-small-size-40 md-size-40">
          <pricing-card icon-color="icon-success">
            <md-list class="md-triple-line" slot="description" style="border-style:none;width: 100%;">
            <md-content class="md-scrollbar" v-if="ventaObject.item.length > 0">
              <md-list-item v-for="itemS in ventaObject.item" :key="itemS" style="padding: 0;">
               <div class="md-list-item-text">
                    <span>{{itemS.nombre}} <b>x</b> {{itemS.cantidad}} </span>
                    <span><b>Precio:  {{itemS.precio}}</b> </span>
                  </div>
                  <div class="md-list-action">  <h4><b>Subtotal:     $ {{itemS.cantidad * itemS.precio}}</b></h4> </div>
              </md-list-item>
            </md-content>

            <md-content class="md-scrollbar" v-if="ventaObject.item.length <= 0">
              <md-list-item style="padding: 0;">
               <div class="md-list-item-text">
                    <center><h3 class="vlign-center md-text-danger"><b><i class="fa fa-cart-arrow-down"></i></b></h3>
                      Venta vacia
                    </center>
                  </div>
              </md-list-item>
              <md-list-item style="padding: 0;">
               
              </md-list-item>
            </md-content>

             
            </md-list>


          <div slot="footer" class="md-group">
                <md-button slot="footer" type="submit" class="md-success md-lg" md-alignment="left">FACTURAR</md-button>
          </div>
          </pricing-card>
          <md-card-actions>
          </md-card-actions>

          <!-- Total -->
          <center>
            <div class="total">
              <h6>Total</h6>
              <h2><b>$</b> {{ventaObject.total}}</h2>
              <hr style="margin-top: -4%;">
            </div>
            
            
          </center>

    </div>

  </div>
</form>
</div>


<div class="form_mobile">
  
   <div class="card horizontal"> 
      <!-- <div class="fixed-action-btn" id="new_venta_btn_mobile" style="margin-bottom: 12% !important;">
                <a class="btn-floating btn-large green waves-effect" @click="showSwal(null, ventaObject.total)">
                  <i class="large material-icons">save</i>
      </a>
            </div> -->
      <md-speed-dial class="fixed-action-btn  md-bottom-right md-mode-fling" md-event="click"  style="margin-bottom: 12% !important; position:fixed;">
                      <md-speed-dial-target class="md-success md-just-icon md-round md-elevation-16">
                        <md-icon>settings</md-icon> 
                      </md-speed-dial-target>

                      <md-speed-dial-content>
                        
                        <md-button class=" md-just-icon md-round md-info">
                        <md-tooltip md-direction="right" style="">Enviar</md-tooltip>

                          <md-icon>send</md-icon>
                        </md-button>

                      <md-button class=" md-just-icon md-round md-warning">
                        <md-tooltip md-direction="right">Visualizar</md-tooltip>
                        <md-icon>assignment</md-icon>
                        </md-button>

                         <md-button class=" md-just-icon md-round md-success">
                        <md-tooltip md-direction="right">Guardar</md-tooltip>
                        <md-icon>save</md-icon>
                        </md-button>

                      </md-speed-dial-content>
      </md-speed-dial>  
      <div class="card-stacked">
        
        <div class="card-content">
          <form @submit.prevent="validationHandler">
           <div class="row valign-wrapper">
             <div class="input-field col s12">
               
               <span :class="{ 'control': true }">
               <input placeholder="Asunto"  type="text" v-model="ventaObject.asunto" name="asuntoMobile" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('asuntoMobile') }">
               <i v-show="errors.has('asuntoMobile')" class="fa fa-warning"></i>
               <span v-show="errors.has('asuntoMobile')" class="help text-danger">Vacio</span>
               </span>
             </div>
            </div>
            
            <div class="row valign-wrapper">
             <div class="input-field col s10">
               <input placeholder="Cliente" id="" type="text" class="validate" v-model="ventaObject.cliente">
             </div>
             <div class="col s2">
               <center>
               <a class="btn-floating btn-small waves-effect waves-light" @click="modalClientes = true;"><i class="material-icons">person_add</i></a>
               </center>
             </div>
            </div>

              <h6>Agregar items</h6>
              <md-divider></md-divider>
             <div class="row valign-wrapper">
             <div class="input-field col s10">
               <input placeholder="Item" v-model="itemToAdd.nombre" id="" type="text" class="validate">
             </div>
             <div class="col s2">
               <a class="btn-floating btn-small waves-effect waves-light" @click="modalItems = true;"><i class="material-icons">list</i></a>
             </div>

             </div>
             <div class="row valign-wrapper">
              <div class="input-field col s3">
               <input placeholder="#" v-model.number="itemToAdd.cantidad" value="1" id="" type="number" class="validate">
             </div>

              <div class="input-field col s7">
                <input v-model.number="itemToAdd.precio" type="number" class="form-input" />
             </div>

             <div class="col s2">
               <center>
               <a class="btn-floating btn-small waves-effect waves-light" @click="saveItem(itemToAdd);notifyVue('top', 'center','success') "><i class="material-icons">add</i></a>
               </center>
             </div>
            </div>


            <br>
     
            <div class="row">

              <div class="col s3">
               <center @click="modalSaleItems = true;">
                 <small class="text-green">Items</small>
                  <h2><b>{{ventaObject.item.length}}</b></h2>
                  <hr>
               </center>
              </div>

              
              <div class="col s9">
               <center>
                 <small>Total</small>
                  <h2><b></b>{{ventaObject.total | currency}}</h2>
                  <hr>
               </center>
              </div>
                   
            </div>

       
            </form>
        </div>
        
      </div>
    </div>
  


</div>




</div>
</template>
<script>
import { Tabs } from "@/components";
import { Collapse, PricingCard } from "@/components";
import itemsPrueba from "@/pages/incomes/items.json";
// import { Money } from "v-money";
// import vMoney from "@/components/vMoney.vue";
import swal from "sweetalert2";
import { Modal } from "@/components";

export default {
  data() {
    return {
      // money: {
      //   decimal: ",",
      //   thousands: ".",
      //   prefix: "$ ",
      //   suffix: " CLP",
      //   precision: 0,
      //   masked: false,
      //   min: 0
      // },
      modalSaleItems: false,
      modalItems: false,
      modalClientes: false,
      itemsPrueba: itemsPrueba,
      itemToAdd: {},
      ventaObject: {
        cliente: "",
        asunto: "",
        item: [],
        total: 0,
        fecha: new Date()
      },
      selectedEmployee: "",
      employees: ["Hector Gonzalez", "Simon Gomez", "Victor Espinoza"],
      itemSelectedToAdd: "",
      itemsModel: ["Telefono lg k10", "papa", "laptop", "polera azul adidas"],
      showInputs: false
    };
  },
  components: {
    Tabs,
    Collapse,
    PricingCard,
    // vMoney,
    // Money,
    Modal
  },
  methods: {
    validationHandler() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.showSwal("success-message", this.ventaObject.total);
        } else {
          this.notifyVue(
            "top",
            "center",
            "danger",
            "¡ERROR EN LOS CAMPOS DE LA VENTA!"
          );
        }
      });
    },
    itemValidationHandler() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.saveItem(this.itemToAdd);
        } else {
          this.notifyVue("top", "center", "danger", "¡ERROR AL AGREGAR ITEM!");
        }
      });
    },

    modalSaleItemsHide() {
      this.modalSaleItems = false;
    },
    modalClientesHide() {
      this.modalClientes = false;
    },
    modalItemsHide() {
      this.modalItems = false;
    },
    saveItem(itemToAdd) {
      // Cambiando el estado del boton
      this.showInputs = !this.showInputs;
      //  Haciendo push del item al arreglo VENTA!
      this.ventaObject.item.push(itemToAdd);
      // Formula calculadora de cantidad * el precio del item
      var precioProdcuto = this.itemToAdd.cantidad * this.itemToAdd.precio;
      // Introduciendo al total
      this.ventaObject.total =
        parseInt(this.ventaObject.total) + parseInt(precioProdcuto);
      this.itemToAdd = {};
      this.notifyVue("top", "center", "success", "¡ITEM AGREGADO CON EXITO!");
    },
    changeBtnStatus() {
      this.itemToAdd = {};
      this.showInputs = !this.showInputs;
    },
    notifyVue(verticalAlign, horizontalAlign, state, message) {
      this.$notify({
        message: message,
        icon: "add_alert",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: state
      });
    },
    showSwal() {
      swal({
        title: "Venta registrada!",
        text: "¿QUE ACCION DESEA TOMAR?",
        type: "success",
        showCancelButton: true,
        confirmButtonClass: "md-button md-success",
        cancelButtonClass: "md-button md-warning",
        confirmButtonText: "OPCION 1",
        cancelButtonText: "OPCION 2",
        buttonsStyling: false
      }).then(result => {
        if (!result.value) {
          swal({
            title: "CALLBACK",
            text: "...",
            type: "success",
            confirmButtonClass: "md-button md-success",
            buttonsStyling: false
          }).then(() => {
            // this.$router.push("incomes");
            console.log(this.ventaObject);
          });
        } else {
          console.log(this.ventaObject);
          this.ventaObject = {};
          // this.$router.push("incomes");
        }
      });
    },
    facturar_venta(venta) {
      alert(venta.asunto);
    }
  }
};
</script>

<style lang="scss" scoped>
.md-list {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
}

.md-content {
  max-width: 500px;
  max-height: 200px;
  overflow: auto;
}
.total {
  top: -15%;
}

// MEDIA QUERYES
.form_desktop {
  display: none;
}

@media (min-width: 992px) {
  .form_mobile {
    display: none;
  }

  .form_desktop {
    display: block;
  }
}
#form_mobile.md-layout-item {
  padding-right: 0px;
  padding-left: 0px;
}
</style>
