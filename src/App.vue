<template>
  <div>

    <div class="container-fluid">
       <router-view></router-view>
    </div>
   
  <div>
    <br>
    <!-- FOOTER MENU -->
      <div class="phone-viewport" id="bottom_navbar" style="background-color: white;" v-if="(this.$route.path != '/login') && (this.$route.path != '/register')">
            <md-bottom-bar md-sync-route>
              <md-bottom-bar-item class="" style="background-color: #43AF7C !important;" to="/dashboard" :md-label="`${lg.modules.home}`" md-icon="home"></md-bottom-bar-item>
              <md-bottom-bar-item class="" style="background-color: #43AF7C !important;" to="/" :md-label="`${lg.modules.outcome}`" md-icon="local_mall"></md-bottom-bar-item>
              <md-bottom-bar-item class="" style="background-color: #43AF7C !important;" to="/incomes" :md-label="`${lg.modules.income}`" md-icon="monetization_on"></md-bottom-bar-item>
              <md-badge class="md-primary md-square left" md-content="4" md-dense style="">
              <md-bottom-bar-item class="" style="background-color: #43AF7C !important;" to="/" :md-label="`${lg.modules.message}`" md-icon="message"></md-bottom-bar-item>
              </md-badge>
            </md-bottom-bar>
      </div>
<!-- / FOOTER MENU -->


  </div>
  
  </div>
</template>
<style>
.md-field:after,
.md-field:before {
  display: none;
}

.phone-viewport {
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  height: 60px !important;
}

@media (min-width: 618px) {
  #bottom_navbar {
    display: none;
  }
}

.md-badge {
  position: absolute;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  left: 60%;
  font-size: 10px;
  font-style: normal;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: #fff;
  pointer-events: none;
  z-index: 6;
}
.md-menu-content{
  z-index: 100;
}

.md-big-hide{
   display:none;
}
@media (max-width: 618px) {
 .md-big-hide{
   display: block;
}
}
</style>

<script>
export default {};
</script>
