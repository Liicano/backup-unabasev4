<template>
  <div class="content">
    <FadeTransition :duration="200" mode="out-in">
      <!-- your content here -->
      <router-view></router-view>
    </FadeTransition>
<<<<<<< HEAD
    
=======
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
  </div>
</template>
<script>
  import {FadeTransition} from 'vue2-transitions'
  export default {
    components: {
      FadeTransition
    }
  }
</script>
<style>
<<<<<<< HEAD
.phone-viewport {
    height: 200px;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
     position: fixed;
    bottom: 0;
    width: 100%;
  }
=======
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
</style>
