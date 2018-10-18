}<template>
  <div>
       <md-table v-model="incomes" md-card  style="padding:10px; margin-top: -0.5%;height: 98vh;">
          <md-table-toolbar>
                  <div class="md-toolbar-section-start">
                  <h3 class="title text-green">{{lg.income.salesTableTitle}}</h3>
                  </div>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input :placeholder="`${lg.base.Search}`" id="search" @input="searchOnTable()" />
                  </md-field>
              </md-table-toolbar>
 
              <!-- <md-table-empty-state style="margin-top: -25%;"
                :md-label="`${lg.base.EmptyState}`" 
                :md-description="`${lg.base.EmptyStateSub} '${search}'`">
                <md-button class="md-success md-raised" @click="newSale">Crear venta</md-button>
              </md-table-empty-state> -->
  
                <md-table-row slot="md-table-row">
                  <!-- <md-table-head>{{lg.income.Id}}</md-table-head> -->
                  <md-table-head>{{lg.income.Reference}}</md-table-head>
                  <md-table-head>{{lg.income.Client}}</md-table-head>
                  <md-table-head>{{lg.income.Date}}</md-table-head>
                  <md-table-head>{{lg.income.Total}}</md-table-head>
                  <md-table-head>{{lg.income.State}}</md-table-head>
                  
                </md-table-row>

                <router-link id="tablaSales" class="tableRow" style="cursor:pointer;" slot="md-table-row" v-for="(item, i) in incomes" 
                :key="`DESKTOP-`+ i "  
                :to="{path:'/income/'+item._id}" 
                 tag="tr">

                  <!-- <md-table-cell>{{ item._id }}</md-table-cell> -->
                  <md-table-cell>{{ item.name }}</md-table-cell>
                  <md-table-cell>{{(item.client == null) ? 'NULL CLIENT' :item._id }}</md-table-cell>
                  <md-table-cell>{{ item.createdAt | shortDate }}</md-table-cell>
                  <md-table-cell>NULL TOTAL</md-table-cell>
                 <md-table-cell>
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

export default {
  props: {
    incomes: {
      required: true
    }
  },
  name: 'IncomesTable',
  data: () => ({  
    search: null,
  })
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