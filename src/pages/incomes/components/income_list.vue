<template>
  <div>

     <div class="md-layout">
         <div class="md-layout-item md-size-100 md-small-size-100">
             
             <ul class="collection" style="border:none;">
             <li class="collection-item avatar" style="padding: 10px; cursor:pointer;">
                <span class="title"><b>PAPA</b></span>
                <p>4 * 200.000<br>
                   $ 1.000.000
                </p>
                <a href="#!" style="color:gray;" class="secondary-content"><h3>$ 1.190.000</h3></a>
                </li>
                <md-divider></md-divider>
                 <li class="collection-item avatar" style="padding: 10px; cursor:pointer;">
                <span class="title"><b>PAPA</b></span>
                <p>4 * 200.000<br>
                   $ 1.000.000
                </p>
                <a href="#!" style="color:gray;" class="secondary-content"><h3>$ 1.190.000</h3></a>
                </li>
                <md-divider></md-divider>
                 <li class="collection-item avatar" style="padding: 10px; cursor:pointer;">
                <span class="title"><b>PAPA</b></span>
                <p>4 * 200.000<br>
                   $ 1.000.000
                </p>
                <a href="#!" style="color:gray;" class="secondary-content"><h3>$ 1.190.000</h3></a>
                </li>
                <md-divider></md-divider>
                 <li class="collection-item avatar" style="padding: 10px; cursor:pointer;">
                <span class="title"><b>PAPA</b></span>
                <p>4 * 200.000<br>
                   $ 1.000.000
                </p>
                <a href="#!" style="color:gray;" class="secondary-content"><h3>$ 1.190.000</h3></a>
                </li>
                <md-divider></md-divider>
                
             </ul>

         </div>
     </div>


    


    
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import {Modal} from '@/components'

  export default {
  props:{
      items: []
  },
  
  components: {
    Modal
  },
  
    data() {
    return {
     localItems: {},
    };
  },

  created(){
   this.localItems = this.items
  },

  methods:{
       
 },
 computed:{
     
 }
  }
</script>
<style>

</style>
