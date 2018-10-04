<template>
    <div>
        <md-list class="md-triple-line">

        <div v-for="venta in incomes" :key="venta.id" id="mobile_list">
              <router-link :to="{path:'/incomes/'+venta.id, params:{venta:venta}}">
            <md-list-item style="padding: 0px 0px;">
              <md-avatar>
                 <md-avatar class="md-avatar-icon teal">
                 <md-icon>attach_money</md-icon>
             </md-avatar>
              </md-avatar>

              <div class="md-list-item-text"> 
                <span>{{venta.asunto}}</span>
                <span>{{venta.receptor.nombre}} {{venta.receptor.apellido}}</span>
                <p><b>$ {{venta.monto_total}} CLP</b></p>
              </div>

              
                <small>21 Sept</small>
            
            </md-list-item>
              <md-divider class="md-inset"></md-divider>
              </router-link>
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

