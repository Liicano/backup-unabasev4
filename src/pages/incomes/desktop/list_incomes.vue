<template>
  <div>
       <md-table v-model="incomes.docs" md-card md-fixed-header style="padding:10px; margin-top: -0.5%;height: 98vh;">
          <md-table-toolbar>
                  <div class="md-toolbar-section-start">
                  <h3 class="title text-green">{{lg.income.salesTableTitle}}</h3>
                  </div>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input :placeholder="`${lg.base.Search}`" v-model="search" @input="searchOnTable" />
                  </md-field>
              </md-table-toolbar>

              <md-table-empty-state style="margin-top: -25%;"
                :md-label="`${lg.base.EmptyState}`"
                :md-description="`${lg.base.EmptyStateSub} '${search}'`">
                <md-button class="md-success md-raised" @click="newSale">Crear venta</md-button>
              </md-table-empty-state>

              

              <router-link style="cursor:pointer;" slot="md-table-row" slot-scope="{ item }"  :to="{
                path:'/income/'+item._id,
                query:{ item }
                }" tag="tr">
                  
                  <md-table-cell :md-label="`${lg.income.Id}`">{{ item._id }}</md-table-cell>
                  <md-table-cell :md-label="`${lg.income.Reference}`">{{ item.name }}</md-table-cell>
                  <md-table-cell :md-label="`${lg.income.Client}`">{{(item.client == null) ? 'NULL CLIENT' :item.client }}</md-table-cell>
                  <md-table-cell :md-label="`${lg.income.Date}`">{{ item.createdAt | shortDate }}</md-table-cell>
                  <md-table-cell :md-label="`${lg.income.Total}`">NULL TOTAL</md-table-cell>
                 <md-table-cell :md-label="`${lg.income.State}`">
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
  if (term != null || term != undefined) {
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
    sales: []
    
  }),
  methods: {
    newSale() {
      this.$router.push('income');
    },
    searchOnTable() {
      this.sales = searchByName(this.sales, this.search);
    }
  },
  mounted(){
    this.sales = this.incomes.docs
    console.log("SALES ->",this.sales);
  },
 
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