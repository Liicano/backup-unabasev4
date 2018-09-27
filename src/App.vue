<template>
  <div>

    <div class="container-fluid">
       <router-view></router-view>
    </div>
   
  
  <div>
    <br>
    <!-- FOOTER MENU -->
      <div class="phone-viewport" id="bottom_navbar">
            <md-bottom-bar md-sync-route style="background-color: rgb(67,175,124);">
             
              <md-bottom-bar-item to="/dashboard" md-label="Inicio" md-icon="home"></md-bottom-bar-item>
              <md-bottom-bar-item to="/ventas" md-label="Compras" md-icon="local_mall"></md-bottom-bar-item>
              <md-bottom-bar-item to="/ventas" md-label="Ventas" md-icon="monetization_on"></md-bottom-bar-item>
              <md-badge class="md-primary md-square left" md-content="4" md-dense style="">
              <md-bottom-bar-item to="/ventas" md-label="Bandeja" md-icon="message"></md-bottom-bar-item>
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
}

@media (min-width: 992px) {
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
</style>

<script>
export default {};
</script>
