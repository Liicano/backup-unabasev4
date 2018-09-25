<template>
  <div class="content">
    <FadeTransition :duration="200" mode="out-in">
      <!-- your content here -->
      <router-view></router-view>
      <h1 style="solor:red;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta molestias error maxime illo deleniti quae debitis quod, fugit nihil magni commodi excepturi repellat. Harum neque mollitia deleniti tempora corporis?</h1>
    </FadeTransition>
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
</style>
