<template>
  <div>

<!-- LISTA -->

<div class="md-layout">
<div class="md-layout-item md-size-100 md-xsmall-size-100">

<ul class="collection" style="border-radius: 15px; padding: 0;">
    <li class="collection-item avatar" v-for="income in incomes.docs" :key="income._id">
    <router-link :to="{path:'/income/'+income._id}" style="color: black;">

       <i class="material-icons circle yellow darken-2" v-if="income.state == 'draft'">alarm</i>
       <i class="material-icons circle green darken-1" v-if="income.state == 'sold'">check</i>

      <span class="title"><b>{{income.name}}</b></span>
      <p>{{(income.client == null)? 'null client' : income.client.name}}<br>
        {{income.createdAt | shortDate}}
      </p>
      <a style="text-decoration: none; color:black;" class="secondary-content valign-wrapper"><h4>{{ (income.total == null)?'null total':income.total.tax | currency}}</h4></a>
    
    </router-link>
    </li>
</ul>
</div>
</div>



  </div>
</template>

<script>
// VUEX
import {mapActions, mapGetters } from 'vuex';

export default {    
  components: {
    
  },

  data() {
    return {
      checkbox1: null,
      incomes: [],
      value: null,
      
    };
  },

  methods:{
     ...mapActions({
         getAllIncomes: 'incomes/getAllIncomes'
    })
  },
  computed:{
    ...mapGetters({
      getUser: 'users/user'
    })
  },
  
  created(){
     this.getAllIncomes( `responsable=${this.getUser._id}&isActive=true` ).then(res => {
        this.incomes = res;
     })
  },
 

  
};
</script>
<style lang="scss" scoped>
#tabla_ventas {
    display: none;
  }
  

@media (min-width: 992px) {
  .md-hide-big{
    display: none;
  }
}

.md-layout-item {
  padding-right: 0px;
  padding-left: 0px;
}

 .md-tabs {
    margin-bottom: 24px;
  }
</style>
