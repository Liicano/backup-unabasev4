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

                              <md-autocomplete id="autocompletadoUsers" name="cliente" class="search md-success"  style="" v-model="ventaObject.cliente" :md-options="employees" :md-open-on-focus="false" v-validate="'required'" :class="{'is-danger': errors.has('cliente') }">
                                <label v-if="$route.meta.rtlActive">Cliente</label>
                                <label v-else>Cliente</label>
                              </md-autocomplete>
                              <i v-show="errors.has('cliente')" class="fa fa-warning"></i>
                              <span v-show="errors.has('cliente')" class="help text-danger">Vacio</span>

                           </span>
                        
                        </div> 
                </div>
                <div class="md-layout-item md-small-size-10 md-size-10">
                  <md-button class=" md-just-icon md-round" @click.native="modalClientes = true;"><md-icon >person_add</md-icon></md-button>
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
                  <md-input v-model="ventaObject.asunto" type="text" name="asunto" v-validate="'required'" :class="{'is-danger': errors.has('asunto') }"></md-input>
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
                 <md-input v-model="ventaObject.nota"  type="text" name="nota"></md-input>
               </md-field>
              </div>
            </div>

        </div>

          
        </div>

        <br>
          
          <span>
            
            
            <h3 v-if="!showInputs" class="pull-left">Agregar items</h3>

            <md-card-expand-trigger class="pull-right">
            <md-button class="md-icon-button md-success md-just-icon md-dense md-mini" @click="changeBtnStatus()">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
            </span>

          <br><br><br>
          <md-divider></md-divider>


 <md-card-expand-content>
          <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-size-85 md-small-size-100" >
                <div class="md-layout" v-if="!showInputs">
                  <div class="md-layout-item md-size-55">
                  
                  <div class="md-autocomplete md-success">
                     <md-autocomplete class="search md-success" style="" v-model="itemToAdd.nombre" :md-options="itemsModel" :md-open-on-focus="false" name="itemDesktop">
                      <label v-if="$route.meta.rtlActive">Nombre del item</label>
                      <label v-else>Nombre del item</label>
                    </md-autocomplete>
                 </div>

                  </div>
                 

                  <div class="md-layout-item md-size-15">
                   <md-field>
                        <md-input type="number" placeholder="#" v-model="itemToAdd.cantidad" name="itemQuantityDesktop"></md-input>
                   </md-field>
                  </div>

                  <div class="md-layout-item md-size-30">
                   <md-field>
                    <md-input placeholder="Precio"  type="number" v-model="itemToAdd.precio" name="itemCostDesktop"></md-input>
                  </md-field>
                  </div>
                  
                </div>
            </div>
          <div class="md-layout-item md-size-15 md-small-size-100" md-alignment="right">
                

               <div class="pull-right" align="left">
                <center class="pull-right">
                  
                  <div v-if="!showInputs">
                  <md-button class="md-success md-dense md-mini md-just-icon" @click="saveItem(itemToAdd);"><md-icon >add</md-icon></md-button>
                  <md-tooltip md-direction="left">Guardar item</md-tooltip>
                </div>
                </center>
             </div>
            
          </div>
          </div>
         
          </md-card-content>
        </md-card-expand-content>




         <div class="md-layout">

              <div class="md-layout-item md-xsmall-size-20 md-medium-size-25 md-small-size-25 md-size-25">

              </div>
           </div>


        <!-- /Formulario -->
        </md-card-content>

       
      </md-card>
    </div>

    <div class="md-layout-item md-small-size-100 md-medium-size-40 md-small-size-40 md-size-40">
          <pricing-card icon-color="icon-success">
            <md-list class="md-triple-line" slot="description" style="border-style:none;width: 100%;">
            <md-content class="md-scrollbar" v-if="ventaObject.item.length > 0">
              <md-list-item v-for="itemS in ventaObject.item" :key="itemS" style="padding: 0;">
               <div class="md-list-item-text">
                    <span>{{(itemS.nombre) | uppercase}} <b>x</b> {{itemS.cantidad}} </span>
                    <span><b>Precio:  {{(itemS.precio) | currency}}</b> </span>
                  </div>
                  <div class="md-list-action">  <h4><b>Subtotal:     $ {{(itemS.cantidad * itemS.precio) | currency}}</b></h4> </div>
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
              <h2><b>$</b> {{(ventaObject.total) | currency}}</h2>
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
          <md-icon>arrow_upward</md-icon> 
        </md-speed-dial-target>

        <md-speed-dial-content>
          
          <md-button class=" md-just-icon md-round md-info">
          <md-tooltip md-direction="right">Enviar</md-tooltip>

            <md-icon>send</md-icon>
          </md-button>

        <md-button class=" md-just-icon md-round md-warning" @click="dowmloadPdf()">
          <md-icon>assignment</md-icon>
          </md-button>

            <md-button @click="validationHandler()" class=" md-just-icon md-round md-success">
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
               <input placeholder="Asunto"  type="text" v-model="ventaObject.asunto" name="asuntoMobile" v-validate="'required'" :class="{'is-danger': errors.has('asuntoMobile') }">
               <i v-show="errors.has('asuntoMobile')" class="fa fa-warning"></i>
               <span v-show="errors.has('asuntoMobile')" class="help text-danger">Vacio</span>
               </span>
             </div>
            </div>
            
            <div class="row valign-wrapper">
             <div class="input-field col s10">
                <span :class="{ 'control': true }">
                  <input placeholder="Cliente" id="" type="text" class="validate" name="clienteMobile" v-validate="'required'"  v-model="ventaObject.cliente">
                  <i v-show="errors.has('clienteMobile')" class="fa fa-warning"></i>
                  <span v-show="errors.has('clienteMobile')" class="help text-danger">Vacio</span>
                </span>
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
               <input placeholder="Item" v-model="itemToAdd.nombre" id="" type="text" class="validate" name="itemMobile">
             </div>
             <div class="col s2">
               <a class="btn-floating btn-small waves-effect waves-light" @click="modalItems = true;"><i class="material-icons">list</i></a>
             </div>

             </div>
             <div class="row valign-wrapper">
              <div class="input-field col s3">
               
                  <input placeholder="#" v-model.number="itemToAdd.cantidad" id="" type="number" class="validate" name="quantityMobile">
             </div>

              <div class="input-field col s7">
                <input v-model.number="itemToAdd.precio" type="number" class="form-input" name="priceMobile"/>
             </div>

             <div class="col s2">
               <center>
               <a class="btn-floating btn-small waves-effect waves-light" @click="saveItem(itemToAdd)"><i class="material-icons">add</i></a>
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
import jsPDF from "jspdf";

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
      this.$validator.validate().then(result => {
        if (result) {
          if (this.ventaObject.item.length > 0) {
            this.showSwal("success-message", this.ventaObject.total);
          } else {
            this.notifyVue(
              "top",
              "center",
              "danger",
              "¡AGREGA AL MENOS 1 ITEM A LA VENTA!"
            );
          }
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
      console.log(itemToAdd);
      if (
        itemToAdd.nombre != null &&
        itemToAdd.nombre != "" &&
        (itemToAdd.precio != null && itemToAdd.precio != "") &&
        itemToAdd.cantidad != null &&
        itemToAdd.cantidad != ""
      ) {
        this.ventaObject.item.push(itemToAdd);
        var precioProdcuto = this.itemToAdd.cantidad * this.itemToAdd.precio;
        this.ventaObject.total =
          parseInt(this.ventaObject.total) + parseInt(precioProdcuto);
        this.itemToAdd = {};

        this.notifyVue(
          "top",
          "center",
          "success",
          "¡ITEM AGREGADO CORRECTAMENTE!"
        );
      } else {
        this.notifyVue("top", "center", "danger", "¡ITEM INCOMPLETO!");
      }
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
    },

    dowmloadPdf() {
      var imgData =
        "data:image/jpeg;base64,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";

      let pdfName = "OC";
      var doc = new jsPDF();
      doc.text("PDF DE PRUEBA", 10, 10);
      doc.addImage(imgData, "JPG", 15, 40, 180, 160);

      doc.save(pdfName + ".pdf");
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
