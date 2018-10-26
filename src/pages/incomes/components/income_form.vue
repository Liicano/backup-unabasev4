<template>
  <div>

     <div class="md-layout">
         <div class="md-layout-item md-size-100 md-small-size-100">
              <md-field>
                    <label>Nombre</label>
                      <md-autocomplete  :value="itemProp.name" name="client" :md-options="getItems.docs.map(x=>({
                      '_id':x._id,
                      'name':x.name,
                      'tax':x.tax,
                      'toLowerCase':()=>x._id.toLowerCase(),  
                      'toString':()=>x.name
                    }))" @md-selected="setItem()">
                        <template slot="md-autocomplete-item" slot-scope="{ item, term }">
                         <div class="md-layout">
                           <div class="md-layout-item md-size-100 md-small-size-100">
                            <md-highlight-text :md-term="term">{{ item.name.toUpperCase() }}</md-highlight-text><br>
                             <!-- <small class="text-info">Licores</small> -->
                           </div>
                         </div>
                        </template>
                    </md-autocomplete>
                  </md-field>
         </div>
     </div>


     <div class="md-layout">
         <div class="md-layout-item md-size-100 md-samll-size-100">
             <md-field>
                 <md-field>
                    <!-- <label for="">Cantidad</label> -->
                    <md-input type="number" min="0" max="9999" :value="1" v-model="localItem.quantity"></md-input>
                  </md-field>
             </md-field>
         </div>
     </div>

     <div class="md-layout">
         <div class="md-layout-item md-size-100 md-samll-size-100">
             <md-field>
                <label for="">Precio</label>
                <md-input type="number" v-model="localItem.price"></md-input>
             </md-field>
         </div>
     </div>

     <div class="md-layout">
         <div class="md-layout-item md-size-100 md-samll-size-100">
             <md-field>
               <label for="movie">19%</label>
                <md-select name="movie" id="" v-model="localItem.tax"> 
                    <md-option  v-for="tax in getTaxes.docs" :key="tax._id">{{tax.number}} % <small>{{tax.name}}</small>   </md-option>
                </md-select>
             </md-field>
         </div>
     </div>
    
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import {Modal} from '@/components'

  export default {
  props:{
      itemProp: {}
  },
  
  components: {
    Modal
  },
  
    data() {
    return {
     localItem: {},
     localItemList: []
    };
  },

  created(){
    this.getAllItems;
    this.localItem = this.itemProp
    this.getAllTaxes();
    console.log(this.localItem);
    console.log("itemState --- ",this.itemState)
  },

  methods:{
       // ACTIONS
       ...mapActions({
         getAllItems: 'items/getAllItems',
         getAllTaxes: 'tax/getAllTaxes'
    }),
    ...mapMutations({
        changeItem: 'items/SET_ITEM'
    }),

    setItem(){
    //   this.changeItem(itemState)
    }
 },
 computed:{
   
     ...mapState({
       itemState: state => state.items.item
    }),

     ...mapGetters({
         getItems: 'items/getItems',
         getTaxes: 'tax/getTaxes',
     })
 }
  }
</script>
<style>

</style>
