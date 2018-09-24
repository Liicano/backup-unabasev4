<template>
  <div>
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
                        <div class="md-autocomplete md-success green">
                          <md-autocomplete id="autocompletadoUsers" class="search md-success"  style="" v-model="ventaObject.responsable" :md-options="employees" :md-open-on-focus="false">
                            <label v-if="$route.meta.rtlActive">Responsable</label>
                            <label v-else>Responsable</label>
                          </md-autocomplete>
                        </div> 
                </div>
                <div class="md-layout-item md-small-size-10 md-size-10">
                  <md-button class="md-info md-just-icon md-round" @click.native="modalClientes = true;"><md-icon >person_add</md-icon></md-button>
                  <md-tooltip direction="bottom">Agregar cliente</md-tooltip>
                </div>
              </div>
          </div>

            
          <!-- <div class="md-layout-item md-xsmall-size-85 md-medium-size-40 md-small-size-40 md-size-40">
            <h5 class="title pull-right" style=""><b> <md-icon>calendar_today</md-icon>  15/09/2018</b></h5>
          </div> -->

          </div>
        
         
        <center><h3>Datos de la venta</h3></center>
          <md-divider></md-divider>
          <br>
        <div class="md-layout">
          
            <div class="md-layout-item md-xsmall-size-100 md-medium-size-45 md-small-size-45 md-size-45">

             <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label">
               Asunto
              </label>
              <div class="md-layout-item">
                <md-field>
                  <md-input v-model="ventaObject.asunto" type="text"></md-input>
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
                  <md-input v-model="ventaObject.nota"  type="text"></md-input>
                </md-field>
              </div>
            </div>

        </div>

          
        </div>

        <br>
       
          
          <center><h3>Agregar items</h3></center>
          <md-divider></md-divider><br>
         <div class="md-layout">

              <div class="md-layout-item md-xsmall-size-20 md-medium-size-25 md-small-size-25 md-size-25">

              </div>
           </div>


        <!-- /Formulario -->
        </md-card-content>

        <md-card-actions md-alignment="right">
          <div class="md-layout">
            <div class="md-layout-item md-size-85 md-small-size-100" >
                <div class="md-layout" v-if="!showInputs">
                  <div class="md-layout-item md-size-55">
                  
                  <div class="md-autocomplete md-success green" >
                    <md-autocomplete class="search md-success" style="" v-model="itemToAdd.nombre" :md-options="itemsModel" :md-open-on-focus="false">
                      <label v-if="$route.meta.rtlActive">Nombre del item</label>
                      <label v-else>Nombre del item</label>
                    </md-autocomplete>
                 </div>

                  </div>

                  <div class="md-layout-item md-size-15">
                   <md-field>
                    <label>#</label>
                    <md-input type="number" v-model="itemToAdd.cantidad" ></md-input>
                  </md-field>
                  </div>

                  <div class="md-layout-item md-size-25">
                   <md-field>
                    <label>Precio</label>
                    <md-input  type="number" v-model="itemToAdd.precio"></md-input>
                  </md-field>
                  </div>
                  
                </div>
            </div>
          <div class="md-layout-item md-size-15 md-small-size-100 pull-right" md-alignment="right">
             <div class="pull-right" align="left">
                <div v-if="showInputs">
                <md-button class="md-warning md-just-icon md-round" @click="changeBtnStatus()"><md-icon >add</md-icon></md-button>
                <md-tooltip md-direction="left">Nuevo item</md-tooltip>
              </div>
              <center>
                <div v-if="!showInputs">
                <md-button class="md-success md-just-icon md-round" @click="saveItem(itemToAdd);notifyVue('top', 'center','success') "><md-icon >check</md-icon></md-button>
                <md-tooltip md-direction="left">Guardar item</md-tooltip>

              </div>
              </center>
             </div>
          </div>
          </div>
        </md-card-actions>
      </md-card>
    </div>


  <!-- MODAL DE CLIENTES -->
  <modal v-if="modalClientes" @close="modalClientesHide">
    <template slot="header">
      <md-button class="md-simple md-just-icon md-round modal-default-button" @click="modalClientesHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
      <div class="md-layout">
       <div class="md-layout-item md-small-size-55 md-size-55">
         <h4><span><i class="fa fa-credit-card"></i></span>  Documento de identidad </h4>
       </div>
        <div class="md-layout-item md-small-size-40 md-size-40">
           
        </div>
      </div>
      <hr>
     <div class="md-layout">
       <div class="md-layout-item md-small-size-60 md-size-60">
         <md-field>
            <label>RUT</label>
            <md-input type="text" minlength="1" maxlength="8"></md-input>
         </md-field>
       </div>
       <div class="md-layout-item md-small-size-30 md-size-30">
         <md-field>
            <label>DV</label>
            <md-input type="text" minlength="1" maxlength="1"></md-input>
         </md-field>
       </div>
     </div>

     
      <h4><span><i class="fa fa-user"></i></span>  Nombres y apellidos</h4>
      <hr>
      <br>
     <div class="md-layout">
       <div class="md-layout-item md-small-size-45 md-size-45">
         <md-field>
            <label>Nombre</label>
            <md-input type="text"></md-input>
         </md-field>
       </div>
       <div class="md-layout-item md-small-size-45 md-size-45">
          <md-field>
            <label>Apellido</label>
          <md-input type="text"></md-input>
          </md-field>
       </div>
     </div>

     
      <h4><span><i class="fa fa-map"></i></span>Direccion</h4>
      <hr>
      <br>
     <div class="md-layout">
       <div class="md-layout-item md-small-size-45 md-size-35">
         <md-field>
            <label>Comuna</label>
            <md-input type="text"></md-input>
         </md-field>
       </div>
       <div class="md-layout-item md-small-size-45 md-size-55">
          <md-field>
            <label>Direccion</label>
          <md-input type="text"></md-input>
          </md-field>
       </div>
     </div>
    </template>

    <template slot="footer">
      <md-button class="md-simple" @click="modalClientesHide">Salir</md-button>
      <md-button class="md-success md-simple" >Guardar</md-button>
    </template>
  </modal>
<!-- Modal de clientes -->

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
                <md-button slot="footer" class="md-success md-lg" md-alignment="left" @click.native="showSwal('success-message', ventaObject.total)">FACTURAR</md-button>
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

  

  </div>
  
</template>
<script>
import {Tabs} from '@/components'
import {Collapse, PricingCard} from '@/components'
import itemsPrueba from '@/pages/ventas/items.json'
import vMoney from '@/components/vMoney.vue'
import swal from 'sweetalert2'
import {Modal} from '@/components'


export default {
   data () {
    return {
      modalClientes: false,
      itemsPrueba: itemsPrueba,
      itemToAdd:{},
      ventaObject:{
        'responsable':'',
        'asunto':'',
        'nota':'',
        'item':[],
        'total': 0,
        'fecha':''
      },
      selectedEmployee: '',
      employees: [
        'Hector Gonzalez',
        'Simon Gomez',
        'Victor Espinoza'
      ],
      itemSelectedToAdd: '',
      itemsModel: [
          'Telefono lg k10',
          'papa',
          'laptop',
          'polera azul adidas'
      ],
      showInputs: false,
      
    }
  },
  components: {
    Tabs,
    Collapse,
    PricingCard,
    vMoney,
    Modal
},
  methods:{
    modalClientesHide(){
      this.modalClientes = false;
    },
    saveItem(itemToAdd){
      // Cambiando el estado del boton
     this.showInputs = !this.showInputs;
    //  Haciendo push del item al arreglo VENTA! 
      this.ventaObject.item.push(itemToAdd);
    // Formula calculadora de cantidad * el precio del item
    var precioProdcuto = (this.itemToAdd.cantidad * this.itemToAdd.precio);
    // Introduciendo al total
      this.ventaObject.total= parseInt(this.ventaObject.total) + parseInt(precioProdcuto);
    },
    changeBtnStatus(){
      this.itemToAdd = {}
      this.showInputs = !this.showInputs;
    },
    notifyVue (verticalAlign, horizontalAlign, state) {
      this.$notify(
        {
          message: '¡NUEVO ITEM AL CARRITO!',
          icon: 'add_alert',
          horizontalAlign: horizontalAlign,
          verticalAlign: verticalAlign,
          type: state
        })
    },
    showSwal(type, totalVenta) {
      swal({
            title: 'Venta registrada!',
            text: '$ '+totalVenta+' CLP',
            type: 'success',
            showCancelButton: true,
            confirmButtonClass: 'md-button md-success',
            cancelButtonClass: 'md-button md-info',
            confirmButtonText: 'ok',
            cancelButtonText: 'enviar',
            buttonsStyling: false
      }).then((result) => {
            if (!result.value) {
              swal({
                title: 'Correo enviado!',
                text: 'hectorluisgonzalezlarreal@gmail.com',
                type: 'success',
                confirmButtonClass: 'md-button md-success',
                buttonsStyling: false
              }).then(() => {
                this.$router.push('ventas') 
              })
            }else{
              this.ventaObject = {};
              this.$router.push('ventas') 
            }
          })
    },
    facturar_venta(venta) {
      alert(venta.asunto);
    
    }
   
  },
  
}
</script>

<style lang="scss" scoped>
  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }

  .md-content {
    max-width: 500px;
    max-height: 200px;
    overflow: auto;
  }
  .total {
    top: -15%;
  }
</style>
