<template>
    <div>
        <md-list class="md-triple-line" style="height: 85vh;">

<ul class="collection showData" style="border-style:none; padding:0px;">
        <div v-for="(item, i) in incomesScope" :key="`MOBILE-`+ i " id="mobile_list">
         
           <router-link :to="{path:'/income/'+item._id}" tag="li">
            <li class="collection-item avatar">

             <i class="material-icons circle yellow darken-3" v-if="item.state == 'draft'">access_time</i>
             <i class="material-icons circle green" v-else>check</i>

              <span class="title"><b style="overflow:hidden;">{{item.name}}</b></span>
              <p>{{(item.client == null) || (item.client == undefined) ? 'NO CLIENT' : item.client.name | capitalize}} <br>
                {{ (item.total == null) || (item.total == undefined) ? 0 : (item.total.net) | currency }}
              </p>
              <p  class="secondary-content">{{item.createdAt | shortDate}}</p>
            </li>
           </router-link>
      
        </div>
  </ul>

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
    return {
      incomesScope: []
    };
  },
  mounted(){
    this.incomesScope = this.incomes;
    console.log("INCOMES FROM MOBILE -> ", this.incomes)
  }
};
</script>

<style>
#mobile_list.md-layout-item {
  padding-right: 0px;
  padding-left: 0px;
}
</style>

