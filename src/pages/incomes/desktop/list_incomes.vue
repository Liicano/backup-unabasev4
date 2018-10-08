<template>
    <div>
        <md-card>
                  <md-card-header class="md-card-header-icon md-card-header-green">
                    <div class="card-icon">
                      <md-icon>monetization_on</md-icon>
                    </div>
                    <h4 class="title">VENTAS</h4>
                  </md-card-header>
                  <md-card-content>
                    <md-table v-model="incomes" table-header-color="green" class="showData">
                     
                        <router-link style="cursor:pointer;" class="md-table-row" :to="{path:'/income', params:{venta:item}}" v-for="item in incomes" :key="item.id" tag="tr">
                        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                        <md-table-cell md-label="Referencia">{{ item.asunto }}</md-table-cell>
                        <md-table-cell md-label="Cliente">{{ item.receptor.nombre }} {{ item.receptor.apellido }}</md-table-cell>
                        <md-table-cell md-label="Fecha">{{ item.fecha }}</md-table-cell>
                       <md-table-cell md-label="Total"><b>$ </b>{{ item.monto_total }} CLP</md-table-cell>
                        </router-link>
                     
                    </md-table>
                  </md-card-content>
                </md-card>

          
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
small {
  display: block;
}
#tabla_ventas {
  display: none;
}

#new_venta_btn_desktop {
  display: none;
}
</style>

