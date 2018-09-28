<template>
    <div>
        <md-list class="md-triple-line">

        <div v-for="venta in incomes" :key="venta.id">
              <router-link :to="{path:'/incomes/'+venta.id, params:{venta:venta}}">
            <md-list-item style="padding: 0px 0px;">
              <md-avatar>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZYxbsw4kHRFbhU9KQtnLu7TtmYITTNH58sVGKDKsq78MWo9Z" alt="People">
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
.md-layout-item {
  padding-right: 0px;
  padding-left: 0px;
}
</style>

