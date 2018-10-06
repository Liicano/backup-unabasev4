<template>
    <div>
        <md-list class="md-triple-line">

        <div v-for="venta in incomes" :key="venta.id" id="mobile_list">
         <ul class="collection" style="border-style:none; padding:0px;">

           <router-link :to="{path:'/incomes/'+venta.id, params:{venta:venta}}" tag="li">
            <li class="collection-item avatar">
              <img src="../../../../public/favicon.png" class="circle" alt="">
              <span class="title"><b style="overflow:hidden;">{{venta.asunto}}</b></span>
              <p>{{(venta.receptor.nombre) | capitalize}} {{venta.receptor.apellido}} <br>
                {{(venta.monto_total) | currency}}
              </p>
              <p  class="secondary-content">21 Sept</p>
            </li>
           </router-link>
    
   
  </ul>
          
        </div>
          </md-list>
          
    </div>
</template>
<script>
export default {
  props: {
    incomes: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style>
#mobile_list.md-layout-item {
  padding-right: 0px;
  padding-left: 0px;
}
</style>

