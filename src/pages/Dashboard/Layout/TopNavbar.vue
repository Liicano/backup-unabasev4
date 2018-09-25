<template>
  <md-toolbar
    md-elevation=""
    class="md-transparent"
    :class="{'md-toolbar-absolute md-white md-fixed-top': $route.meta.navbarAbsolute}">
    <div class="md-toolbar-row">
      <!-- <div class="md-toolbar-section-start" v-if="$route.path == '/ventas'">
        <md-list>
            <md-list-item>  
               <md-menu md-size="big" md-direction="top-start" :md-active.sync="toggleCard">
      <md-button class="md-icon-button md-success" md-menu-trigger>
        <md-icon>add</md-icon>
      </md-button>
      <md-menu-content>

        <center>
          <div class="author-card">
           <div class="author-card-info">
            <span>Metodo de entrada</span>
            <center>
               <md-divider></md-divider><br>
              <div class="author-card-links text-center"> 
               
               <router-link :to="{path:'/income'}">Manual</router-link>
               <a href="/" target="_blank" rel="noopener">Fotografia</a>
            </div>
            </center>
          </div>
        </div>
        </center>
      </md-menu-content>
    </md-menu>

    <md-menu>
      <md-button class="md-icon-button md-info"> 
        <md-icon>send</md-icon>
      </md-button> -->

      <!-- <md-menu-content>
        <md-menu-item>
          <md-icon>phone</md-icon>
          <span>My Item 1</span>
        </md-menu-item>

        <md-menu-item>
          <md-icon>phone</md-icon>
          <span>My Item 2</span>
        </md-menu-item>

        <md-menu-item>
          <md-icon>phone</md-icon>
          <span>My Item 3</span>
        </md-menu-item>
      </md-menu-content> -->
    <!-- </md-menu> -->

    <!-- <md-menu md-size="big" md-direction="bottom-end">
      <md-button class="md-icon-button md-primary" md-menu-trigger>
        <md-icon>share</md-icon>
      </md-button> -->

      <!-- <md-menu-content>
        <md-menu-item>
          <span>Find on map</span>
          <md-icon>near_me</md-icon>
        </md-menu-item>

        <md-menu-item>
          <span>Call</span>
          <md-icon>phone</md-icon>
        </md-menu-item>
      </md-menu-content> -->
    <!-- </md-menu> -->

            <!-- </md-list-item>
           
          </md-list>
         -->
      </div> 
      <div class="md-toolbar-section-end">
        <md-button class="md-just-icon md-round md-simple md-toolbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete" >
            <md-autocomplete class="search" style="width:100%;" v-model="selectedEmployee" :md-options="employees" :md-open-on-focus="false">
              <label>Buscar</label>
            </md-autocomplete>
          </div>
          <md-list>
            <md-list-item to="/">
              <i class="material-icons">home</i>
              <p class="hidden-lg hidden-md">Inicio</p>
            </md-list-item>

            <li class="md-list-item">
              <a class="md-list-item-router md-list-item-container md-button-clean dropdown">
                <div class="md-list-item-content">
                  <drop-down direction="down">
                    <md-button slot="title" class="md-button md-just-icon md-simple" data-toggle="dropdown">
                      <md-icon>notifications</md-icon>
                      <span class="notification">2</span>
                      <p class="hidden-lg hidden-md">Notificaciones</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">Bienvenido a unabase</a></li>
                      <li><a href="#">Otro mensaje personalizado</a></li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li>

            <md-list-item to="/pages/user">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Perfil</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    <!-- </div> -->

  </md-toolbar>
</template>

<script>

export default{
  data () {
    return {
      selectedEmployee: '',
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone'
      ]
    }
  },
  methods: {
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    minimizeSidebar () {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .md-menu,
  .toggle {
    margin: 24px;
  }

  .author-card {
    padding: 8px 16px;
    display: flex;
    align-items: center;

    .md-avatar {
      margin-right: 16px;
    }

    .author-card-info {
      display: flex;
      flex-flow: column;
      flex: 1;
    }

    span {
      font-size: 16px;
    }

    .author-card-links {
      display: flex;

      a + a {
        margin-left: 8px;
      }
    }
  }
</style>