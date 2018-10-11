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
        <li class="collection-item" style="cursor:pointer;" @click="ventaObject.cliente = (user.receptor.nombre+' '+user.receptor.apellido); modalClientes = false;" v-for="user in data" :key="user" ><div><a style="color: inherit;" class=""><b>{{user.receptor.nombre}} {{user.receptor.apellido}}</b> <span class="pull-right">{{user.receptor.rut}}</span> </a></div></li>
      </ul>
       </div>
     </div>
    </template>

    <template slot="footer">
      <md-button class="md-simple" @click="modalClientesHide">Salir</md-button>
      
    </template>
  </modal>
<!-- Modal de clientes -->


 <!-- MODAL DE client details -->
  <modal v-if="modalClientDetails" @close="modalClientDetailsHide">
    <template slot="header">
      <md-button class="md-simple md-just-icon md-round modal-default-button" @click="modalClientDetailsHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
    <div class="row">
      <div class="col s12">

        {{this.$route.query.item.receptor}}

      </div>
    </div>
    </template>

    <template slot="footer">
      <md-button class="md-simple" @click="modalClientDetailsHide">Salir</md-button>
      
    </template>
  </modal>
<!-- Modal de cliente details -->


<!-- MODAL DE EXPORTACION -->
  <modal v-if="modalExport" @close="modalExportHide">
    <template slot="header">
      <md-button class="md-simple md-just-icon md-round modal-default-button" @click="modalExportHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
     <center> <h6>Tipo de documento</h6></center>
      <md-divider></md-divider>
      <br>
      
      <div class="row">

        <div class="col s4">
          <center>
            <md-button class="md-just-icon md-round md-danger" @click="generar_invoice()"><md-icon >picture_as_pdf</md-icon></md-button>
            <p>PDF</p>
          </center>
        </div>
        <div class="col s4">
          <center>
            <md-button class="md-just-icon md-round md-info"><md-icon >file_copy</md-icon></md-button>
            <p>WORD</p>
          </center>
        </div>
        <div class="col s4">
          <center>
            <md-button class="md-just-icon md-round md-success"><md-icon >account_balance_wallet</md-icon></md-button>
            <p>EXCEL</p>
          </center>
        </div>

      </div>
    </template>

    <template slot="footer">
      <md-button class="md-simple" @click="modalExportHide">Salir</md-button>
    </template>
  </modal>
<!-- Modal de EXPORTACION -->



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
          <h4 class="title">Venta</h4>
          
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
                <div class="md-layout-item md-small-size-10 md-size-10" v-if="!this.$route.params.id">
                  <md-button class=" md-just-icon md-round md-info" @click.native="modalClientes = true;"><md-icon >person_add</md-icon></md-button>
                  
                </div>
                 <div class="md-layout-item md-small-size-10 md-size-10" v-if="this.$route.params.id">
                  <md-button class=" md-just-icon md-round md-info" @click.native="modalClientDetails = true;"><md-icon >person</md-icon></md-button>
                  
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


 <md-card-expand-content id="cardItem">
          <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-size-85 md-small-size-100" >
                <div class="md-layout" >
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
                        <md-input type="number" placeholder="#" v-model="itemToAdd.cantidad" min="1" max="999" value="1" name="itemQuantityDesktop"></md-input>
                   </md-field>
                  </div>

                  <div class="md-layout-item md-size-30">
                   <md-field>
                    <md-input placeholder="Precio"  type="number" v-model="itemToAdd.precio" name="itemCostDesktop"></md-input>
                  </md-field>
                  </div>
                  
                  <br>
                  <md-divider></md-divider>
                  <div class="md-layout">
                    <div class="md-layout-item md-size-100">
                      <div class="left">  
                        <h5>
                         <b>SUBTOTAL: </b> {{(itemToAdd.cantidad * itemToAdd.precio) | currency}}
                        </h5>
                      </div>
                    </div>
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
  
       <!-- Total -->
          <center style="position:fixed;bottom:20px;width:54%;">
            <div class="total">
              <h6>Total</h6>
              <h2> {{(ventaObject.total) | currency}}</h2>
              <hr style="margin-top: -4%;">
            </div>
          </center>
    </div>

    <div class="md-layout-item md-small-size-100 md-medium-size-40 md-small-size-40 md-size-40">
      
          <md-card icon-color="icon-success" style="height: 81vh;">
            <div class="md-layout" align="center" style="max-height: 18%;">

              <div class="md-layout-item md-size-25">
                 <md-card-header class="md-card-header-icon md-card-header-green" v-if="!this.$route.params.id">
                    <div class="card-icon" style="cursor:pointer;" @click="validationHandler()">
                      <center>  
                        <i class="material-icons">monetization_on</i>
                        <h6 class="title" style="color:white;margin-top: -7%;"><b>Facturar</b></h6>
                      </center>
                    </div>
                      <br>
                 </md-card-header>

                   <md-card-header class="md-card-header-icon md-card-header-green" v-if="this.$route.params.id">
                    <div class="card-icon" style="cursor:pointer;" @click="validationHandler()">
                      <center>
                        <i class="material-icons">file_copy</i>
                        <h6 class="title" style="color:white;margin-top: -7%;"><b>Duplicar</b></h6>
                      </center>
                    </div>
                      <br>
                 </md-card-header>
              </div>

              
               <div class="md-layout-item md-size-25">
                 <md-card-header class="md-card-header-icon md-card-header-warning">
              <div class="card-icon" style="cursor:pointer;" @click="modalExport = true;">
                <center>
                  <i class="material-icons">import_export</i>
                  <h6 class="title" style="color:white;margin-top: -7%;"><b>Exportar</b></h6>
                </center>
              </div>
                <br>
            </md-card-header>
              </div>


                <div class="md-layout-item md-size-25" v-if="this.$route.params.id">
                 <md-card-header class="md-card-header-icon md-card-header-danger" >
                    <div class="card-icon" style="cursor:pointer;">
                      <center>
                        <i class="material-icons">delete</i>
                        <h6 class="title" style="color:white;margin-top: -7%;"><b>Eliminar</b></h6>
                      </center>
                    </div>
                      <br>
                    </md-card-header>
              </div>

               <div class="md-layout-item md-size-25">
                 <md-card-header class="md-card-header-icon md-card-header-blue">
                    <div class="card-icon" style="cursor:pointer;">
                      <center>
                        <i class="material-icons">send</i>
                        <h6 class="title" style="color:white;margin-top: -7%;"><b>Enviar</b></h6>
                      </center>
                    </div>
                      <br>
                    </md-card-header>
              </div>

              

              

                          
            </div>
      
            <md-list class="md-triple-line"  style="border-style:none;width: 100%;">
             
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
               <div class="md-list-item-text" style="margin-top:50%;" >
                    <center><h3 class="vlign-center md-text-danger"><b><i class="fa fa-cart-arrow-down"></i></b></h3>
                      Venta vacia
                    </center>
                  </div>
              </md-list-item>
             
            </md-content>
          
             
            </md-list>
            


          
          </md-card>
          <md-card-actions>
          </md-card-actions>

         

    </div>

  </div>
</form>
</div>


<div class="form_mobile">
  
   <div class="card horizontal"> 
  
      <md-speed-dial class="  md-bottom-left md-mode-fling" md-event="click" md-direction="top"  style="margin-bottom: 12% !important; position:fixed; z-index: 997;">
        <md-speed-dial-target class="md-success md-just-icon md-round md-elevation-16">
          <md-icon>expand_less</md-icon> 
        </md-speed-dial-target>

        <md-speed-dial-content>
          
          <md-button class=" md-just-icon md-round md-info">
          <md-tooltip md-direction="right">Enviar</md-tooltip>

            <md-icon>send</md-icon>
          </md-button>

        <md-button class=" md-just-icon md-round md-warning" @click="generar_invoice(null, null, ventaObject)" >  <!--@click="dowmloadPdf()" -->
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
          
            <br> <br>
            <br>
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
import { Tabs } from '@/components';
import { Collapse, PricingCard } from '@/components';
import swal from 'sweetalert2';
import { Modal } from '@/components';
import invoice from '../../assets/js/invoice.js';
import users from '@/pages/Dashboard/Tables/users.js';

export default {
  data() {
    return {
      data: users,
      modalExport: false,
      modalClientDetails: false,
      modalSaleItems: false,
      modalItems: false,
      modalClientes: false,
      itemToAdd: {},
      ventaObject: {
        cliente: '',
        asunto: '',
        item: [],
        total: 0,
        fecha: new Date()
      },
      selectedEmployee: '',
      employees: [],
      itemSelectedToAdd: '',
      itemsModel: [],
      showInputs: false,
      styleBox: 'display:none;'
    };
  },
  components: {
    Tabs,
    Collapse,
    PricingCard,
    Modal
  },
  methods: {
    validationHandler() {
      this.$validator.validate().then(result => {
        if (result) {
          if (this.ventaObject.item.length > 0) {
            this.showSwal('success-message', this.ventaObject.total);
          } else {
            this.notifyVue(
              'top',
              'center',
              'danger',
              '¡AGREGA AL MENOS 1 ITEM A LA VENTA!'
            );
          }
        } else {
          this.notifyVue(
            'top',
            'center',
            'danger',
            '¡ERROR EN LOS CAMPOS DE LA VENTA!'
          );
        }
      });
    },

    modalSaleItemsHide() {
      this.modalSaleItems = false;
    },
    modalExportHide() {
      this.modalExport = false;
    },
    modalClientDetailsHide() {
      this.modalClientDetails = false;
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
        itemToAdd.nombre != '' &&
        (itemToAdd.precio != null && itemToAdd.precio != '') &&
        itemToAdd.cantidad != null &&
        itemToAdd.cantidad != ''
      ) {
        this.ventaObject.item.push(itemToAdd);
        var precioProdcuto = this.itemToAdd.cantidad * this.itemToAdd.precio;
        this.ventaObject.total =
          parseInt(this.ventaObject.total) + parseInt(precioProdcuto);
         this.itemToAdd = {};

        this.notifyVue(
          'top',
          'center',
          'success',
          '¡ITEM AGREGADO CORRECTAMENTE!'
        );
      } else {
        this.notifyVue('top', 'center', 'danger', '¡ITEM INCOMPLETO!');
      }
    },
    changeBtnStatus() {
      this.itemToAdd = {};
    },
    notifyVue(verticalAlign, horizontalAlign, state, message) {
      this.$notify({
        message: message,
        icon: 'add_alert',
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: state
      });
    },
    showSwal() {
      swal({
        title: '¡VENTA EXITOSA!',
        type: 'success',
        showCancelButton: false,
        confirmButtonClass: 'md-button md-success',
        confirmButtonText: 'OK',
        buttonsStyling: false
      });
    },
    facturar_venta(venta) {
      alert(venta.asunto);
    },
    generar_invoice() {
      invoice(this.ventaObject);
    }
  },
   mounted(){
    let id =  this.$route.params.id;
    console.log(this.$route.query.item);
    if(id){
      
      this.ventaObject = {
        cliente: this.$route.query.item.receptor.nombre+' '+this.$route.query.item.receptor.apellido,
        asunto: this.$route.query.item.asunto,
        item: this.$route.query.item.items,
        total: this.$route.query.item.monto_total,
        fecha: this.$route.query.item.fecha
      }

     

    }else{
      
       this.ventaObject = {
        cliente: '',
        asunto: '',
        item: [],
        total: 0,
        fecha: new Date()
      }

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
  max-height: 460px;
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
