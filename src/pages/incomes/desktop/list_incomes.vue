<template>
  <div>
        {{incomes}}
       <md-table v-model="searched" md-card md-fixed-header style="padding:10px; margin-top: -0.5%;height: 98vh;">

              <md-table-toolbar>
                  <div class="md-toolbar-section-start">
                  <h3 class="title text-green">Mis ventas</h3>
                  </div>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="Filtrar ventas" v-model="search" @input="searchOnTable" />
                  </md-field>
              </md-table-toolbar>

              <md-table-empty-state style="margin-top: -25%;"
                md-label="No se encontraron resultados"
                :md-description="`Sin resultados para '${search}'`">
                <md-button class="md-success md-raised" @click="newSale">Crear venta</md-button>
              </md-table-empty-state>

              

              <router-link style="cursor:pointer;" slot="md-table-row" slot-scope="{ item }" :to="{
                path:'/income/'+item._id,
                query:{ item }
                }" tag="tr">
                  
                  <md-table-cell md-label="ID">{{ item._id }}</md-table-cell>
                  <md-table-cell md-label="Referencia">{{ item.name }}</md-table-cell>
                  <md-table-cell md-label="Cliente">{{(item.client == null) ? 'NO CLIENT' :item.client }}</md-table-cell>
                  <md-table-cell md-label="Fecha">{{ item.createdAt | shortDate }}</md-table-cell>
                  <md-table-cell md-label="Total">NO TOTAL</md-table-cell>
                 <md-table-cell md-label="Estado">
                    <div class="chip yellow darken-1" v-if="item.state=='draft'">
                        {{lg.income.pending}}
                        <i class="close material-icons">watch_later</i>
                    </div>
                    <div class="chip green" v-if="item.state=='sold'">
                        {{lg.income.sold}}
                        <i class="close material-icons">check</i>
                    </div>
                  </md-table-cell>
              </router-link> 
              
    </md-table>
    


  </div>
</template>

<script>
const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item =>
      toLower(item.name).includes(
        toLower(term)
      )
    );
  }
  return items;
};

export default {
  props: {
    incomes: {
      required: true
    }
  },
  name: 'IncomesTable',
  data: () => ({  
    search: null,
    searched: [],
    selected: []
  }),
  methods: {
    newSale() {
      this.$router.push('income');
    },
    searchOnTable() {
      this.searched = searchByName(this.incomes.docs, this.search);
    }
  },
  mounted() {
    this.searched = this.incomes.docs
  }
};
</script>

<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}
 .md-table + .md-table {
    margin-top: -16%
  }

  .md-scrollbar{
    max-height: 450px;
  }
</style>