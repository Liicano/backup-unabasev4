<template>
<div class="container-fluid">
 <span v-if="this.$route.path == '/income'">
          <div class="fixed-action-btn md-big-hide" style=" margin-bottom: 12% !important;" v-if="showDialog == false">
            <a class="btn-floating btn-large green" @click="saveIncome">
              <i class="large material-icons">save</i>  
            </a>
        </div>
        </span>

       

    <md-card class="md-elevation-5">
      
        <md-card-header class="md-card-header-icon md-card-header-green ">
          <div class="card-icon">
            <md-icon>monetization_on</md-icon>
          </div>
          <h4 class="title">Nueva venta</h4>
        </md-card-header>
        <md-card-content>
        
       


<div class="md-layout">
  <div class="md-layout-item md-size-50 md-small-size-100">
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
                    <small :md-term="term">{{ item.name }}</small>
                    <br>
                    <small class="text-info">{{item.idnumber}}</small>
                  </center>
                  </div>
                </div>
              </template>
          </md-autocomplete>
        </md-field>
  </div>

  <div class="md-layout-item md-size-50 md-small-size-100">
    <md-field>
      <label for="">Referencia</label>
      <md-input style="margin-top: 12px;" type="text" v-model="incomeObject.name" name="reference"></md-input>
    </md-field>
  </div>
</div>

<br><br>
<h3>Items</h3>
<md-divider></md-divider>
<br><br>

<div class="md-layout">
  <div class="md-layout-item md-size-45">
    <item-form :item="getItem"></item-form>
      <md-divider></md-divider>

     <md-card class="md-elevation-5 pull-right draggable" style="width: 100%; z-index:100">
         <md-card-header class="md-card-header-icon md-card-header-green ">
          <h6 class="title">Total item</h6>
      </md-card-header>
    <md-card-content>
      <div class="md-layout">
        <div class="md-layout-item md-size-33">
          <small>Neto</small>
          <h5>$1.000.000</h5>
        </div>
        <div class="md-layout-item md-size-33">
           <small>Impuesto</small>
          <h5>$1.000.000</h5></div>  
        <div class="md-layout-item md-size-33">
           <small>Total</small>
          <h5>$1.000.000</h5></div>  
      </div>  
    </md-card-content>
  </md-card>
  </div>

   <div class="md-layout-item md-size-10 md-small-size-10 valign-wrapper" align="center">
    <center>
      <md-button class="md-success md-just-icon md-rounded" @click="addItem(itemToAdd)">
        <md-icon>arrow_right_alt</md-icon>
      </md-button>
      <br>
      <small>Agregar item</small>
    </center>
   </div>

   <div class="md-layout-item md-size-45">
      <item-list :items="null"></item-list>
      <md-divider></md-divider>
      <md-card class="md-elevation-5 pull-right draggable" style="width: 100%; z-index:100">
        <md-card-header class="md-card-header-icon md-card-header-green ">
          <h6 class="title">Total venta</h6>
      </md-card-header>
    <md-card-content>
      <div class="md-layout">
        <div class="md-layout-item md-size-33">
          <small>Neto</small>
          <h5>$1.000.000</h5>
        </div>
        <div class="md-layout-item md-size-33">
           <small>Impuesto</small>
          <h5>$1.000.000</h5></div>  
        <div class="md-layout-item md-size-33">
           <small>Total</small>
          <h5>$1.000.000</h5></div>  
      </div>  
    </md-card-content>
  </md-card>
   </div>
</div>
</md-card-content>
</md-card>

  


</div>
</template>
<script>

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: document.body,
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
   
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

// VUEX
import { mapGetters, mapActions } from 'vuex';

import interact from 'interactjs'
import { Tabs } from '@/components';
import { Collapse, PricingCard } from '@/components';
import swal from 'sweetalert2';
import { Modal } from '@/components';
import itemForm from './components/income_form';
import itemList from './components/income_list';

export default {
  data() {
    return {
      value: '',
      showDialog: false,
      itemToAdd: {},
      incomeObject: {}
    };
  },
  components: {
    Tabs,
    Collapse,
    PricingCard,
    Modal,
    itemForm,
    itemList,
  
  },
  methods: {
    // ACTIONS DEL STORE
    ...mapActions({
      // GETTERS
      getCurrentIncome: 'incomes/getIncome',
      getAllUsers: 'users/getAllUsers',
      getAllItems: 'items/getAllItems',

      // SETTERS
      postIncome: 'incomes/postIncome',
      createInvoice: 'incomes/createInvoice',
      setItem: 'items/setItem',
      deleteLine: 'incomes/deleteLine',
      newLine: 'incomes/newLine'
    }),

    // OBTENER VALORES E ID'S

    getIdClient(val) {
      this.value = val.name;
      this.incomeObject.client = val._id;
    },

    // MOSTRAR DATA DEL ITEM
    handleItem(item, event) {
      if (event) {
        this.setItem(item).then(res => {
          this.itemToAdd = this.getItem;
          this.showDialog = event;
        });
      } else {
        this.setItem({}).then(res => {
          this.itemToAdd = this.getItem;
          this.showDialog = event;
        });
      }
    },

    // ELIMINAR ITEM DE LA VENTA
    deleteItem(id) {
      this.deleteLine(id).then(res => {
        this.$notify({
          message: 'ITEM ELIMINADO CON EXITO',
          icon: 'add_alert',
          horizontalAlign: 'center',
          verticalAlign: 'top',
          type: 'success'
        });
        this.itemToAdd = {};
        this.handleItem(itemToAdd, false);
      });
    },

    // GUARDAR INCOME
    saveIncome() {
      this.postIncome(this.incomeObject);

      swal({
        title: '¡Venta creada!',
        text: '¿Visualizar cotizacion?',
        type: 'success',
        showCancelButton: true,
        confirmButtonText: 'SI',
        cancelButtonText: 'NO',
        confirmButtonClass: 'md-button md-success',
        cancelButtonClass: 'md-button md-danger',
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.createInvoice(this.getIncome);
        } else if (result.dismiss === swal.DismissReason.cancel) {
          this.$router.push('/incomes');
        }
      });
    },

    // GUARDAR ITEM EN LA VENTA
    addItem(item) {
      this.newLine(item).then(res => {
        this.$notify({
          message: 'ITEM AGREGADO CON EXITO',
          icon: 'add_alert',
          horizontalAlign: 'center',
          verticalAlign: 'top',
          type: 'success'
        });
      });

      this.handleItem(itemToAdd, false);
    }
  },

  computed: {
    ...mapGetters({
      getIncome: 'incomes/getIncome',
      getUsers: 'users/getUsers',
      user: 'users/user',
      getItem: 'items/getItem'
    })
  },

  created() {
    if (this.$route.params.id) {
      this.getCurrentIncome(this.$route.params.id).then(res => {
        this.incomeObject = res;
        this.value = this.incomeObject.client.name;
      });
    }
    this.incomeObject = this.getIncome;
    this.getAllItems();
    this.getAllUsers();

    //  this.incomeObject.responsable = this.user._id;

    //  console.log("this.incomeObject  ", this.incomeObject)
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

.md-menu-content-bottom-start {
  z-index: 110;
}

#drag-1, #drag-2 {
  width: 25%;
  height: 100%;
  min-height: 6.5em;
  margin: 10%;
  background-color: #29e;
  color: white;
  border-radius: 0.75em;
  padding: 4%;
  user-select: none;
  -webkit-transform: translate(0px, 0px);
          transform: translate(0px, 0px);
}


</style>
