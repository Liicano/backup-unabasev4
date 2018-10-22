<template>
<div>
  
<!-- MODAL DE EXPORTACION -->
  <modal v-if="modalExport" @close="modalExportHide">
    <template slot="header">
      <md-button class="md-simple md-just-icon md-round modal-default-button" @click="modalExportHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
     <center> <h6>{{lg.income.documentTipe}}</h6></center>
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
      <md-button class="md-simple" @click="modalExportHide">{{lg.base.exit}}</md-button>
    </template>
  </modal>
<!-- Modal de EXPORTACION -->




  <form @submit.prevent="validationHandler">
  <div class="md-layout">
      <div class="md-layout-item md-small-size-100 md-medium-size-60 md-small-size-60 md-size-60">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>monetization_on</md-icon>
          </div>
          <h4 class="title">{{lg.income.income}}</h4>
          
        </md-card-header>
       
        <md-card-content>
        <!-- Formulario -->

          <div class="md-layout">
          <div class="md-layout-item md-xsmall-size-50 md-medium-size-50 md-small-size-50 md-size-50">
               <span :class="{ 'control': true }">
                 <label for="">Cliente</label>    
                    <md-autocomplete v-model="ventaObject.client" :md-options="getUsers.docs">
                        <template slot="md-autocomplete-item" slot-scope="{ item, term }">
                          <span class="color" :style="`background-color: ${item.color}`"></span>
                          <md-highlight-text :md-term="term">{{ item.name }}</md-highlight-text>
                        </template>

                    </md-autocomplete>
                    <span v-show="errors.has('asunto')" class="help text-danger">{{lg.base.empty}}</span>
                 </span>
                        
            </div>
              
             <div class="md-layout-item md-xsmall-size-50 md-medium-size-50 md-small-size-50 md-size-50">
               <span :class="{ 'control': true }">
                  <label for="">Referencia</label>   
                  <md-input v-model="ventaObject.asunto" type="text"  name="asunto" v-validate="'required'" :class="{'is-danger': errors.has('asunto') }"></md-input>
                    <span v-show="errors.has('asunto')" class="help text-danger">{{lg.base.empty}}</span>
              </span>
                        
            </div>


          </div>
        
         
         <br>
            <!-- <small>Agregar nota</small><br> -->
            <md-card-expand-trigger class="">
              <md-button class="md-icon-button md-simple md-just-icon md-dense md-mini">
                <md-icon>note</md-icon>
              </md-button>
          </md-card-expand-trigger>
          
         
         

       <md-card-expand-content id="cardItem">
          <md-card-content>
        <div class="md-layout">
           <div class="md-layout-item md-xsmall-size-100 md-medium-size-100 md-small-size-100 md-size-100">
               <md-field>
                 <md-input v-model="ventaObject.nota" placeholder="Nota"  type="text" name="nota"></md-input>
               </md-field>
            </div>
        </div>

          </md-card-content></md-card-expand-content>


        <br>
        <br><br>
          
 <!-- <div class="md-layout">
            <div class="md-layout-item md-size-85 md-small-size-100" >
                <div class="md-layout" >
                  <div class="md-layout-item md-size-35">
                  <div class="md-autocomplete md-success">
                     <md-autocomplete class="search md-success" style="" v-model="itemToAdd.name" :md-options="itemsModel" :md-open-on-focus="false" name="itemDesktop">
                      <label v-if="$route.meta.rtlActive">{{lg.income.itemName}}</label>
                      <label v-else>{{lg.income.itemName}}</label>
                    </md-autocomplete>
                 </div>

                  </div>
                 

                  <div class="md-layout-item md-size-15">
                   <md-field>
                        <md-input type="number" placeholder="#" v-model="itemToAdd.quantity" min="1" max="999" value="1" name="itemQuantityDesktop"></md-input>
                   </md-field>
                  </div>

                  <div class="md-layout-item md-size-30">
                   <md-field>
                    <md-input :placeholder="`${lg.income.price}`"  type="number" v-model="itemToAdd.price" name="itemCostDesktop"></md-input>
                  </md-field>
                  </div>



                  <div class="md-layout-item md-size-20">
                  
                     <md-field>
                      <label for="">{{lg.base.tax}}</label>
                        <md-select name="" id="">
                          <md-option value="19">19 %</md-option>
                          <md-option value="25">25 %</md-option>
                          
                        </md-select>
                    </md-field>

                  </div>

                  <br>
                  <md-divider></md-divider>
                  <div class="md-layout">
                    <div class="md-layout-item md-size-100">
                      <div class="right">  
                        <h5>
                         <b>Neto: </b> {{(itemToAdd.quantity * itemToAdd.price) | currency}}
                        </h5>
                        
                         <h5>
                         <b>Impuesto: </b> {{(itemToAdd.quantity * itemToAdd.price) | currency}}
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
                  <md-tooltip md-direction="left">{{lg.income.save}} item</md-tooltip>
                </div>
                </center>
             </div>
            
          </div>
          </div> -->
        


        <!-- /Formulario -->
        </md-card-content>

       
      </md-card>
  
       <!-- Total -->
          <center style="position:fixed;bottom:0px;width:54%;">
            <div class="total">
              <h6>{{lg.income.total}}</h6>
              <h2> {{(ventaObject.total) | currency}}</h2>
              <hr style="margin-top: -4%;">
            </div>
          </center>
    </div>

    <div class="md-layout-item md-small-size-100 md-medium-size-40 md-small-size-40 md-size-40 md-small-hide">
      
          <md-card icon-color="icon-success" style="height: 81vh;">
            <div class="md-layout" align="center" style="max-height: 18%;">

              <div class="md-layout-item md-size-25">
                 <md-card-header class="md-card-header-icon md-card-header-green" v-if="!this.$route.params.id">
                    <div class="card-icon" style="cursor:pointer;" @click="validationHandler()">
                      <center>  
                        <i class="material-icons">monetization_on</i>
                        <h6 class="title" style="color:white;margin-top: -7%;"><b>{{lg.income.checkIn}}</b></h6>
                      </center>
                    </div>
                      <br>
                 </md-card-header>

                   <md-card-header class="md-card-header-icon md-card-header-green" v-if="this.$route.params.id">
                    <div class="card-icon" style="cursor:pointer;" @click="validationHandler()">
                      <center>
                        <i class="material-icons">file_copy</i>
                        <h6 class="title" style="color:white;margin-top: -7%;"><b>{{lg.income.duplicate}}</b></h6>
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
                  <h6 class="title" style="color:white;margin-top: -7%;"><b>{{lg.base.export}}</b></h6>
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
                        <h6 class="title" style="color:white;margin-top: -7%;"><b>{{lg.base.delete}}</b></h6>
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
                        <h6 class="title" style="color:white;margin-top: -7%;"><b>{{lg.base.send}}</b></h6>
                      </center>
                    </div>
                      <br>
                    </md-card-header>
              </div>

              

                          
            </div>
      
            <md-list class="md-triple-line"  style="border-style:none;width: 100%;">
             
            <!-- <md-content class="md-scrollbar" v-if="(ventaObject != undefined) && (ventaObject.item.length > 0)">
              <md-list-item v-for="(itemS, index) in ventaObject.item" :key="itemS" style="padding: 0;">
               <div class="md-list-item-text">
                    <span>{{(itemS.name) | uppercase}} <b>x</b> {{itemS.quantity}}</span>
                    <span><b>Precio:  {{(itemS.price) | currency}}</b> </span>
               </div>
                  
                <div class="md-list-action">  <h4><b> {{(itemS.quantity * itemS.price) | currency}}</b></h4> </div>
                 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;      
                 <a class="btn-floating btn-small red waves-effect waves-light" @click="ventaObject.item.splice(index, 1)"><i class="material-icons">delete</i></a>
              </md-list-item>
            </md-content> -->
            
            <!-- <md-content class="md-scrollbar" v-if="(ventaObject != undefined) && (ventaObject.item.length <= 0)">
              <md-list-item style="padding: 0;">
               <div class="md-list-item-text" style="margin-top:50%;" >
                    <center><h3 class="vlign-center md-text-danger"><b><i class="fa fa-cart-arrow-down"></i></b></h3>
                      {{lg.income.emptySale}}
                    </center>
                  </div>
              </md-list-item>
             
            </md-content> -->
          
             
            </md-list>
            


          
          </md-card>
          <md-card-actions>
          </md-card-actions>

         

    </div>

  </div>
</form>




</div>
</template>
<script>
// VUEX
import { mapGetters, mapActions } from 'vuex';

import { Tabs } from '@/components';
import { Collapse, PricingCard } from '@/components';
import swal from 'sweetalert2';
import { Modal } from '@/components';
import invoice from '../../assets/js/invoice.js';
import users from '@/pages/Dashboard/Tables/users.js';

export default {
  data() {
    return {
      modalExport: false,
      modalSaleItems: false,
      modalItems: false,
      itemToAdd: {},
      ventaObject: {},
      itemSelectedToAdd: '',
      itemsModel: [],
      value: null,
      
      
    };
  },
  components: {
    Tabs,
    Collapse,
    PricingCard,
    Modal
  },
  methods: {
     ...mapActions({
         getCurrentIncome: 'incomes/getIncome',
         getAllUsers: 'users/getAllUsers'
    }),

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
              this.lg.validations.ShoppingCartLength
            );
          }
        } else {
          this.notifyVue(
            'top',
            'center',
            'danger',
            this.lg.validations.emptyFields
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

    modalItemsHide() {
      this.modalItems = false;
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
        title: this.lg.validations.SuccessIncome,
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
    },

    

  },

  created(){
     this.getCurrentIncome(this.$route.params.id);
     this.getAllUsers();
     console.log(this.getIncome);
     console.log(this.getUsers);
     
  },
   
   computed:{
     ...mapGetters({
       getIncome: 'incomes/getIncome',
       getUsers: 'users/getUsers'
     })
  },

   mounted(){
    
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

// .md-layout-item {
//   padding-right: 0px;
//   padding-left: 0px;
// }
</style>
