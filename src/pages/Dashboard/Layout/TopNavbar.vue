<template>
<<<<<<< HEAD
<div>
   <md-toolbar
   id="desktop_navbar"
    md-elevation=""
    class="md-transparent"
    :class="{'md-toolbar-absolute md-white md-fixed-top': $route.meta.navbarAbsolute}">
    
      <div class="md-toolbar-section-end">
        <!-- <md-button class="md-just-icon md-round md-simple md-toolbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button> -->

        <div class="md-collapse">
          <div class="md-autocomplete" >
            <md-autocomplete class="search" style="width:100%;" v-model="selectedEmployee" :md-options="employees" :md-open-on-focus="false">
              <label>Buscar</label>
=======
  <md-toolbar
    md-elevation="0"
    class="md-transparent"
    :class="{'md-toolbar-absolute md-white md-fixed-top': $route.meta.navbarAbsolute}">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{$route.name}}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button class="md-just-icon md-round md-simple md-toolbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete">
            <md-autocomplete class="search" v-model="selectedEmployee" :md-options="employees" :md-open-on-focus="false">
              <label v-if="$route.meta.rtlActive">بحث...</label>
              <label v-else>Search...</label>
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
            </md-autocomplete>
          </div>
          <md-list>
            <md-list-item to="/">
<<<<<<< HEAD
              <i class="material-icons">home</i>
              <p class="hidden-lg hidden-md">Inicio</p>
            </md-list-item>

            <li class="md-list-item">
              <a class="md-list-item-router md-list-item-container md-button-clean dropdown">
=======
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item>

            <li class="md-list-item">
              <a href="#/components/notifications" class="md-list-item-router md-list-item-container md-button-clean dropdown">
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
                <div class="md-list-item-content">
                  <drop-down direction="down">
                    <md-button slot="title" class="md-button md-just-icon md-simple" data-toggle="dropdown">
                      <md-icon>notifications</md-icon>
<<<<<<< HEAD
                      <span class="notification">2</span>
                      <p class="hidden-lg hidden-md">Notificaciones</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">Bienvenido a unabase</a></li>
                      <li><a href="#">Otro mensaje personalizado</a></li>
=======
                      <span class="notification">5</span>
                      <p class="hidden-lg hidden-md">Notifications</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">Mike John responded to your email</a></li>
                      <li><a href="#">You have 5 new tasks</a></li>
                      <li><a href="#">You're now friend with Andrew</a></li>
                      <li><a href="#">Another Notification</a></li>
                      <li><a href="#">Another One</a></li>
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li>

            <md-list-item to="/pages/user">
              <i class="material-icons">person</i>
<<<<<<< HEAD
              <p class="hidden-lg hidden-md">Perfil</p>
=======
              <p class="hidden-lg hidden-md">Profile</p>
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
            </md-list-item>
          </md-list>
        </div>
      </div>
<<<<<<< HEAD
   

  </md-toolbar>
  <div class="">
    <div class="">
      <ul id="mobile_navbar" class="tabs">

        <li class="tab col s1" style="width:10%">
          <a href="#/ventas">
            <a href="#/dashboard"><md-icon>home</md-icon></a>
          </a>
        </li>
    <li class="tab col s12">
      <div class="container-fluid">
       <md-autocomplete placeholder="Buscar" class="" style="width:100%;" v-model="itemSearch" :md-options="employees" :md-open-on-focus="false">
       </md-autocomplete>
       </div>
    </li>
    <li class="tab col s1" style="width:10%;">
      <a href="#/ventas">
      <img id="profile_img" src="https://materializecss.com/images/yuna.jpg" alt="" class="circle responsive-img">
      </a>
    </li>
  </ul>
    </div>
  </div>
</div>
</template>


<script>
export default {
  data() {
    return {
      selectedEmployee: "",
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    }
  }
};
</script>


<style lang="scss" scoped>
#mobile_navbar{
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: white;
  border-radius: 5px;
}
#desktop_navbar{
  display:none;
}
@media (min-width: 992px) {
 #mobile_navbar {
      display: none;
  }
  #desktop_navbar {
    display: block;
  }
}

.md-menu,
.toggle {
  margin: 0px;
}

#profile_img {
 width: 85%;
  margin-right: -50%;
}


textarea:focus {
  border-bottom: none !important;
  box-shadow: none !important;
}
</style>
=======
    </div>

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
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
