<template>
  <div class=" md-layout text-center">
   
    <div class="main md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100">
    
        <h2 class="title " slot="title">Register</h2>
    

          <md-field  slot="title" class="md-form-group mdl-typography--text-center"  >
            <md-icon>email</md-icon>
            <md-input v-model="email" type="email" :placeholder="lg.user.email"></md-input>
          </md-field>


          <md-field class="md-form-group" >
            <md-icon>lock</md-icon>
            <md-input v-model="password" type="password" :placeholder="lg.user.password"></md-input>
          </md-field>

          <md-checkbox v-model="boolean">{{ lg.base.term1 }} <a to='/terms'>{{ lg.base.term2 }}</a>.</md-checkbox>
          <div class="button-container">
            <md-button href class="md-success md-round mt-4" slot="footer" to='/login' >{{lg.user.login}}</md-button>
            <md-button href class="md-success md-round mt-4" slot="footer" @click="register" >{{lg.user.register}}</md-button>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {};
  }
};
</script>
<style scoped>
div.main {
  background-color: white;
  border-radius: 10px;
  padding-bottom: 10px;
  opacity: 0.5;
  text-align: center;
}
.title {
  color: #000000;
}
</style>

