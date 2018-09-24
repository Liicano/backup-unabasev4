<template>
  <div>
     <md-field>
        <money class="md-input" v-bind="money">{{amount}}</money>{{amount}}
     </md-field>
  </div>
</template>

<script>
  import {Money} from 'v-money'

  export default {
    props:['amount'],
    components: {Money},

    data () {
      return {
       money: {
          decimal: ',',
          thousands: '.',
          prefix: '$ ',
          suffix: ' CLP',
          precision: 0,
          masked: true
        }
        
      }
    },
   
  }
</script>