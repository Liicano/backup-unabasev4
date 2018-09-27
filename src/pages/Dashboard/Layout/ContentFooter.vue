<<<<<<< HEAD
 <!-- <template> -->
  <!-- <footer class="footer">
=======
<template>
  <footer class="footer">
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
    <div class="container">
        <nav>
            <ul>
              <li>
                <router-link v-if="$route.meta.rtlActive" :to="{path:'/dashboard'}">منزل</router-link>
<<<<<<< HEAD
                <router-link v-else :to="{path:'/dashboard'}">Dashboard</router-link>
=======
                <router-link v-else :to="{path:'/dashboard'}">Home</router-link>
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
              </li>
                <li>
                    <a v-if="$route.meta.rtlActive" href="#">
                        شركة
                    </a>
                    <a v-else href="#">
<<<<<<< HEAD
                        Sobre nosotros
=======
                        Company
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
                    </a>
                </li>
                <li>
                    <a v-if="$route.meta.rtlActive" href="#">
                        محفظة
                    </a>
                    <a v-else href="#">
<<<<<<< HEAD
                        Ayuda
                    </a>
                </li>
               
=======
                        Portfolio
                    </a>
                </li>
                <li>
                    <a v-if="$route.meta.rtlActive" href="#">
                        بلوق
                    </a>
                    <a v-else href="#">
                        Blog
                    </a>
                </li>
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
            </ul>
        </nav>
        <div class="copyright text-center">
          &copy; {{ new Date().getFullYear() }} <a href="https://www.creative-tim.com/?ref=mdp-vuejs" target="_blank">Creative Tim</a>, made with <i class="fa fa-heart heart"></i> for a better web
        </div>
    </div>
<<<<<<< HEAD
  </footer> -->

<!--</template>-->
<!--<script>
// export default {}

// </script>
// <style>

// </style>
=======
  </footer>

</template>
<script>
export default {}

</script>
<style>

</style>
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
