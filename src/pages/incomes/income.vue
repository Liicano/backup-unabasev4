<template>
<div>
 
        <div class="fixed-action-btn md-big-hide" style=" margin-bottom: 12% !important;" v-if="showDialog == false">
            <a class="btn-floating btn-large green" @click="saveIncome">
              <i class="large material-icons">save</i>
            </a>
        </div>


  
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
          <div class="md-layout-item md-xsmall-size-50 md-medium-size-50 md-small-size-50 md-size-50" >
               <span :class="{ 'control': true }" v-if="getUsers.docs">
                 <md-field>
                   <label>Cliente</label>
                      <md-autocomplete v-model="value" name="client" :md-options="getUsers.docs.map(x=>({
                      '_id':x._id,
                      'name':x.name,
                      'idnumber':x.idnumber,
                      'toLowerCase':()=>x.name.toLowerCase(),
                      'toString':()=>x.name
                    }))" @md-selected="getIdClient">
                        <template slot="md-autocomplete-item" slot-scope="{ item, term }">
                         <div class="md-layout">
                           <div class="md-layout-item md-size-100 md-small-size-100">
                            <center>
                              <md-highlight-text :md-term="term">{{ item.name }}</md-highlight-text><br>
                             <small class="text-info">idnumber</small>
                            </center>
                           </div>
                         </div>
                        </template>
                    </md-autocomplete>
                 </md-field>
                    <span v-show="errors.has('client')" class="help text-danger">{{lg.base.empty}}</span>
                 </span>
                        
            </div>
              
             <div class="md-layout-item md-xsmall-size-50 md-medium-size-50 md-small-size-50 md-size-50">
               <md-field>
                 <label for="">Referencia</label>
                 <span :class="{ 'control': true }" >
                  <md-input style="margin-top: 12px;" type="text" v-model="incomeObject.name" name="reference" v-validate="'required'" :class="{'is-danger': errors.has('reference') }" ></md-input>
                  <span v-show="errors.has('asunto')" class="help text-danger">{{lg.base.empty}}</span>
                 </span>
               </md-field>
             </div>


          </div>
<br>
            
           <div class="md-layout">
             <div class="md-layout-item md-size-100 md-small-size-100">
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
                          <md-input md-autogrow v-model="incomeObject.description" placeholder="Nota"  type="text" name="nota"></md-input>
                        </md-field>
                      
                      </div>
                  </div>
                  </md-card-content>
              </md-card-expand-content>
             </div>
           </div>


           <div class="md-layout">
             <div class="md-layout-item md-size-100 md-small-size-100">
               
            <md-dialog :md-active.sync="showDialog" :md-backdrop="false">
              <md-dialog-title>
                 <md-button class="md-simple md-just-icon md-round pull-right" @click="showDialog = false">
                <md-icon>
                  <i class="material-icons">close</i>
                </md-icon>
              </md-button>
              </md-dialog-title>
            
              <div class="md-layout">
                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>Nombre del item</label>
                      <md-autocomplete v-model="itemToAdd.name" name="client" :md-options="getItems.docs.map(x=>({
                      '_id':x._id,
                      'name':x.name,
                      'tax':x.tax,
                      'toLowerCase':()=>x._id.toLowerCase(),
                      'toString':()=>x.name
                    }))" @md-selected="getNameAndId">
                        <template slot="md-autocomplete-item" slot-scope="{ item, term }">
                         <div class="md-layout">
                           <div class="md-layout-item md-size-100 md-small-size-100">
                            <md-highlight-text :md-term="term">{{ item.name }}</md-highlight-text><br>
                             <small class="text-info">Impuesto: {{item.tax}}</small>
                           </div>
                         </div>
                        </template>
                    </md-autocomplete>
                  </md-field>
                </div>
              </div>

              <div class="md-layout">
                <div class="md-layout-item md-size-30 md-small-size-50">
                  <md-field>
                    <label for="">Cantidad</label>
                    <md-input type="text" v-model="itemToAdd.quantity"></md-input>
                  </md-field>
                </div>

                  <div class="md-layout-item md-size-70 md-small-size-50">
                    <md-field>
                      <label for="">Precio</label>
                      <md-input type="text" v-model="itemToAdd.price"></md-input>
                    </md-field>
                  </div>
              </div>

                <div class="md-layout">
                  <div class="md-layout-item md-size-100 md-small-size-100">
                    <md-field>
                      <label for="movie">Impuesto</label>
                      <md-select name="movie" id="" v-model="itemToAdd.tax"> 
                        <md-option :value="tax._id" v-for="tax in getTaxes.docs" :key="tax._id">{{tax.number}} % <small>{{tax.name}}</small>   </md-option>
                      </md-select>
                     </md-field>
                  </div>
                </div>
<br>
              <div class="md-layout">
                <div class="md-layout-item md-size-50">
                 <center>
                    <small>Neto</small><br>
                  <h2 v-if="itemToAdd.price">{{itemToAdd.quantity * itemToAdd.price | currency}}</h2>
                  <h2 v-else>$ 0</h2>
                 </center>

                </div>
                <div class="md-layout-item md-size-50">
                  <center>
                    <small>Impuesto</small><br>
                  <h2 v-if="itemToAdd.price">{{ (((itemToAdd.quantity * itemToAdd.price)*0.19)+(itemToAdd.quantity * itemToAdd.price)) | currency }}</h2>
                  <h2 v-else>$ 0</h2>
                  </center>
                </div>
              </div>

              <md-divider></md-divider><br>
              

            <md-dialog-actions>
            <div class="md-layout">
              <div class="md-layout-item md-size 30"></div>
              <div class="md-layout-item md-size 30">
                <center>
                    <md-button class="md-success md-just-icon md-round" @click="saveItem">
                      <md-icon>
                        <i class="material-icons">add</i>
                      </md-icon>
                    </md-button>
                    <br>
                    <small>Agregar</small>
                </center>
              </div>
              <div class="md-layout-item md-size 30"></div>
            </div>
            </md-dialog-actions>
    </md-dialog>

            <center>
              <md-button class="md-success md-raised md-dense" @click="showDialog = true">Agregar items</md-button>
            </center>

             </div>
           </div>

         
         <br>
         <md-divider></md-divider>
         <br>

         <div class="md-layout">
                <div class="md-layout-item md-size-50">
                 <center>
                    <small>Neto</small><br>
                  <h2>{{incomeObject.total.net | currency}}</h2>
                  
                 </center>

                </div>
                <div class="md-layout-item md-size-50">
                  <center>
                    <small>Total</small><br>
                  <h2>{{ incomeObject.total.tax | currency}}</h2>
                 
                  </center>
                </div>
              </div>

         <br>
         <md-divider></md-divider>
         <br>


          <div class="md-layout md-big-hide">
                <div class="md-layout-item md-size-100">
                   <ul class="collection" style="border-style:none; padding: 0;">
                      <li class="collection-item avatar" style="padding: 0;" v-for="item in incomeObject.lines" :key="item._id">
                        <span class="title"><b>{{item.name}}</b></span>
                        <p>{{item.quantity}} x {{item.price | currency}} <br>
                         Impuesto: 19%
                        </p>
                        <a style="color: black;" class="secondary-content">{{ (((item.quantity * item.price)*0.19)+(item.quantity * item.price)) | currency }}</a>
                      </li>

                    </ul>

                </div>
              </div>
      


        <br>
       
          
        </md-card-content>

       
      </md-card>

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
             
            <!-- <md-content class="md-scrollbar" v-if="(incomeObject != undefined) && (incomeObject.item.length > 0)">
              <md-list-item v-for="(itemS, index) in incomeObject.item" :key="itemS" style="padding: 0;">
               <div class="md-list-item-text">
                    <span>{{(itemS.name) | uppercase}} <b>x</b> {{itemS.quantity}}</span>
                    <span><b>Precio:  {{(itemS.price) | currency}}</b> </span>
               </div>
                  
                <div class="md-list-action">  <h4><b> {{(itemS.quantity * itemS.price) | currency}}</b></h4> </div>
                 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;      
                 <a class="btn-floating btn-small red waves-effect waves-light" @click="incomeObject.item.splice(index, 1)"><i class="material-icons">delete</i></a>
              </md-list-item>
            </md-content> -->
            
            <!-- <md-content class="md-scrollbar" v-if="(incomeObject != undefined) && (incomeObject.item.length <= 0)">
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

export default {
  data() {
    return {
      value:'',
      showDialog: false,
      modalExport: false,
      modalSaleItems: false,
      modalItems: false,
      itemToAdd: {},
      incomeObject: {
        name: '',
        description: '',
        dates: {
          expiration: new Date()
        },
        client: '',
        creator: '',
        responsable: '',
        lines: [],
        total: {
          net: 0,
          tax: 0
        },
        state: String,
        isActive: true,
        currency: ''
      },
      itemSelectedToAdd: '',
      itemsModel: [],
      searchTerm: null,
      itemId: null,
      clientId: null
      
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
         getAllUsers: 'users/getAllUsers',
         getAllItems: 'items/getAllItems',
         getAllTaxes: 'tax/getAllTaxes',
         postIncome: 'incomes/postIncome'
    }),
    getNameAndId(val){
      this.itemToAdd.name = val.name;
      this.itemToAdd.item = val._id;
    },
    getIdClient(val){
      this.value = val.name;
      this.incomeObject.client = val._id;
    },
    saveIncome(){
      console.log(this.incomeObject);
      this.postIncome(this.incomeObject);

    },

    validationHandler() {
      this.$validator.validate().then(result => {
        if (result) {
          if (this.incomeObject.item.length > 0) {
            this.showSwal('success-message', this.incomeObject.total);
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
      invoice(this.incomeObject);
    },
    saveItem(){
       this.incomeObject.total.net += (this.itemToAdd.quantity * this.itemToAdd.price);
       this.incomeObject.total.tax += ( (((this.itemToAdd.quantity * this.itemToAdd.price)*0.19)+(this.itemToAdd.quantity * this.itemToAdd.price)) );

      this.incomeObject.lines.push(this.itemToAdd);
      this.itemToAdd = {};
      this.showDialog = false;
     
    }

  },

  created(){
     if(this.$route.params.id)this.getCurrentIncome(this.$route.params.id);
     this.getAllItems();
     this.getAllUsers();
     this.getAllTaxes();
  },
   
   computed:{
     ...mapGetters({
       getIncome: 'incomes/getIncome',
       getUsers: 'users/getUsers',
       getItems: 'items/getItems',
       getTaxes: 'tax/getTaxes'
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

.md-menu-content-bottom-start{
 z-index: 110;
}
</style>
