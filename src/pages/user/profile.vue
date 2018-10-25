<template>
<div>



<!-- MOBILE -->
 <div class="container-fluid" v-if="isMobileLocal">
   
    <div align="left">
        <h4>&nbsp;&nbsp;<b>Mi perfil</b>
    </h4>
        
    </div>
    <div>
        
    </div>
  
   <br>

        <div class="md-layout">
                <div class="md-layout-item md-small-size-100">
                   <center>
                        <div class="file-input img-circle">
                        <div class="image-container" v-if="!user.image">
                        <img :src="imageCircle" />
                        </div>
                        <div class="image-container" v-else>
                        <img :src="user.image" />
                        </div>
                        <div class="button-container">
                       <md-button class="md-success md-round md-fileinput">
                            <template>Cambiar</template>
                            <input type="file" name="circle" @change="onFileChange">
                        </md-button>
                        </div>
              </div>
                   </center>
                </div>
        </div>

    <br>

      


        <div class="md-layout">
                <div class="md-layout-item md-small-size-80">
                    <md-field>
                        <label for="first-name">Nombre de usuario</label>
                        <md-input name="first-name" id="first-name" v-model="userData.username"/>
                    </md-field>
                </div>
                 <div class="md-layout-item md-small-size-20 valign-wrapper">
                     <center class="" style="color: green;">
                        <small class="text-green">Disponible</small>
                    </center>

                     <!-- <center class="" style="color: red;">
                        <small class="text-green">No disponible</small>
                    </center> -->

                 </div>
        </div>

          <div class="md-layout">
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="first-name">Nombre completo</label>
                        <md-input name="first-name" id="first-name" v-model="userData.name"/>
                    </md-field>
                </div>

        </div>

          <div class="md-layout">
                <div class="md-layout-item md-small-size-100">
                    <md-field>
                        <label for="first-name">Email</label>
                        <md-input name="email" id="email" v-model="userData.email"/>
                    </md-field>
                </div>
          </div>

          <div class="md-layout">
              <div class="md-layout-item md-small-size-100">
               
                  <md-card>
                    <md-card-expand>
                        <md-card-actions md-alignment="space-between">
                            <h6>Mi direccion</h6>
                        <md-card-expand-trigger>
                            <md-button class="md-icon-button md-success">
                            <md-icon>keyboard_arrow_down</md-icon>
                            </md-button>
                        </md-card-expand-trigger>
                        </md-card-actions>

                        <md-card-expand-content>
                        <md-card-content>
                            
                             <div class="md-layout">
                                <div class="md-layout-item md-small-size-100">
                                    <md-field>
                                        <label for="first-name">Pais</label>
                                        <md-input name="country" id="country" v-model="userData.address.country"/>
                                    </md-field>
                                </div>
                             </div>

                             
                             <div class="md-layout">
                                <div class="md-layout-item md-small-size-100">
                                    <md-field>
                                        <label for="first-name">Ciudad</label>
                                        <md-input name="city" id="city" v-model="userData.address.city"/>
                                    </md-field>
                                </div>
                             </div>

                             <div class="md-layout">
                                <div class="md-layout-item md-small-size-100">
                                    <md-field>
                                        <label for="first-name">Region</label>
                                        <md-input name="region" id="region" v-model="userData.address.region"/>
                                    </md-field>
                                </div>
                             </div>

                             <div class="md-layout">
                                <div class="md-layout-item md-small-size-100">
                                    <md-field>
                                        <label for="first-name">Distrito</label>
                                        <md-input name="distric" id="distric" v-model="userData.address.distric"/>
                                    </md-field>
                                </div>
                             </div>

                             <div class="md-layout">
                                <div class="md-layout-item md-small-size-65">
                                    <md-field>
                                        <label for="first-name">Calle</label>
                                        <md-input name="street" id="street" v-model="userData.address.street"/>
                                    </md-field>
                                </div>

                                <div class="md-layout-item md-small-size-35">
                                    <md-field>
                                        <label for="first-name">Casa</label>
                                        <md-input name="house" id="house" v-model="userData.address.number"/>
                                    </md-field>
                                </div>
                             </div>

                        </md-card-content>
                        </md-card-expand-content>
                    </md-card-expand>
                </md-card>

              </div>
          </div>
            <br>
           <div class="md-layout">
              <div class="md-layout-item md-small-size-100">
                        <div class="row">
                              <div class="col s4">
                                  <center>
                                      <md-button class="md-success md-just-icon md-round" @click="saveProfile()">
                                      <md-icon>save</md-icon>
                                  </md-button><br>
                                  <small>Guardar</small>
                                  </center>
                              </div>

                              <div class="col s4">
                                  <center>
                                      <md-button class="md-info md-just-icon md-round">
                                      <md-icon>business_center</md-icon>
                                  </md-button><br>
                                  <small>Empresas</small>
                                  </center>
                              </div>
                              <div class="col s4">
                                <center>
                                       <md-button class="md-danger md-just-icon md-round">
                                      <md-icon>logout</md-icon>
                                  </md-button><br>
                                  <small>Cerrar sesion</small>
                                </center>
                              </div>
                              
                          </div>

              </div>
          </div>
          <br>
          <br>

          
 </div>









<!-- DESKTOP -->
<div v-else>
<br><br>
   <div class="row">
       <div class="col s4">
         
            <md-card>
            <md-card-header class="md-card-header-icon">
                <div class="card-icon">
                <md-icon>map</md-icon>
                </div>
                <h4 class="title">Direccion</h4>
            </md-card-header>
                <br>
                <md-divider class="md-inset"></md-divider>

            <md-card-content>
            
            <div class="row">
                <div class="col s12">
                        <md-field>
                            <label>Pais</label>
                            <md-input type="text" v-model="userData.address.country"></md-input>
                        </md-field>
                </div>

                 <div class="col s12">
                        <md-field>
                            <label>Region</label>
                            <md-input type="text" v-model="userData.address.region"></md-input>
                        </md-field>
                </div>

                 <div class="col s12">
                        <md-field>
                            <label>Ciudad</label>
                            <md-input type="text" v-model="userData.address.city"></md-input>
                        </md-field>
                </div>

                 <div class="col s12">
                        <md-field>
                            <label>Distrito</label>
                            <md-input type="text" v-model="userData.address.distric"></md-input>
                        </md-field>
                </div>
                
                 <div class="col s12">
                       <div class="row">
                           <div class="col s8">
                                <md-field>
                                    <label>Calle</label>
                                    <md-input type="text" v-model="userData.address.street"></md-input>
                                </md-field>
                           </div>

                            <div class="col s4">
                                <md-field>
                                    <label>Casa</label>
                                    <md-input type="text" v-model="userData.address.number"></md-input>
                                </md-field>
                           </div>
                       </div>
                </div>


            </div>

            </md-card-content>
    </md-card>
  
       </div>
       <div class="col s4">
           <md-card class="md-card-profile">
                <div class="md-card-avatar">
                    <img class="img" :src="userData.google.imgUrl">
                    <h1>2</h1>
                </div>

                <md-card-content>
                    <h6 class="category text-gray">25577270-k</h6>
                    <h4 class="card-title" style="margin-top: -1px;">Hector Gonzalez</h4>
                    <div class="card-description">
                        <div class="row">
                            <div class="col s8">
                                    <md-field>
                                        <label>Nombre de usuario</label>
                                        <md-input type="text" v-model="userData.username"></md-input>
                                    </md-field>
                            </div>
                            <div class="col s4 valign-wrapper" style="color:green;">
                                <p>Disponible</p>
                            </div>
                        </div>

                            <div class="row" style="margin-top: -20%;">
                                 <div class="col s12">
                                        <md-field>
                                            <label>Documento de identidad</label>
                                            <md-input type="text" v-model="userData.idnumber"></md-input>
                                        </md-field>
                                </div>

                                <div class="col s12">
                                        <md-field>
                                            <label>Nombre</label>
                                            <md-input type="text" v-model="userData.name"></md-input>
                                        </md-field>
                                </div>

                                <div class="col s12">
                                        <md-field>
                                            <label>Password</label>
                                            <md-input type="text" v-model="userData.password"></md-input>
                                        </md-field>
                                </div>
                            </div>

                    </div>
                   <div class="row">
                         <div class="col s6">
                                  <center>
                                      <md-button class="md-success md-just-icon md-round" @click="saveProfile()">
                                      <md-icon>save</md-icon>
                                  </md-button><br>
                                  <small>Guardar</small>
                                  </center>
                              </div>

                              <div class="col s6">
                                  <center>
                                      <md-button class="md-info md-just-icon md-round">
                                      <md-icon>business_center</md-icon>
                                  </md-button><br>
                                  <small>Empresas</small>
                                  </center>
                              </div>
                           
                   </div>
                </md-card-content>
            </md-card>
       </div>

         <div class="col s4">
             
             <div class="row">
                 <div class="col s12">
                     <md-card>
                <md-card-header class="md-card-header-icon">
                    <div class="card-icon ">
                    <md-icon>email</md-icon>
                    </div>
                    <h4 class="title">Correos</h4>
                    <md-button class=" pull-right md-info md-mini md-dense md-just-icon md-round" v-if="!editEMail" @click="editEMail = !editEMail"><md-icon >edit</md-icon></md-button>  
                    <md-button class=" pull-right md-success md-mini md-dense md-just-icon md-round" v-else @click="editEMail = !editEMail"><md-icon >add</md-icon></md-button>  

                </md-card-header>
                    <br>
                    <md-divider class="md-inset"></md-divider>
                <md-card-content>
                <br>

                <div v-if="(userData.emails) && (userData.emails.length > 0)">

                <div class="row" style="cursor:pointer;" v-for="(email, index ) in userData.emails" :key="email">
                    <div class="col s10" style="overflow: hidden;" @click="showButton = !showButton">
                        <div class="row">
                            <div class="col s8">
                                <input type="text" v-value="email">
                            </div>
                            <div class="col s4">
                                <input type="text" v-value="index">
                            </div>
                        </div>
                    </div>
                    <div class="col s2">
                        <button class="btn-floating red btn-mini btn-small valig-wrapper" v-if="showButton"><i class="material-icons">delete</i></button><br>
                    </div>
                </div>

                </div>
                <div  v-else>
                 <div class="row" style="cursor:pointer;">
                    <div class="col s12">
                        <h5>{{userData.google.email}}</h5>
                        <small>Google</small>
                    </div>
                </div>
                </div>
            

            </md-card-content>
        </md-card>
                 </div>
             </div>
            

            <div class="row">
                 <div class="col s12">
                     <md-card>
                <md-card-header class="md-card-header-icon">
                    <div class="card-icon  ">
                    <md-icon>phone</md-icon>
                    </div>
                    <h4 class="title">Telefonos</h4>
                    <md-button class=" pull-right md-success md-mini md-dense md-just-icon md-round"><md-icon >edit</md-icon></md-button>  
                </md-card-header>
                    <br>
                    <md-divider class="md-inset"></md-divider>
                    <br>
                <md-card-content>
                
                <div v-if="(userData.phones) && (userData.phones.length > 0)">
                     <div class="row" style="cursor:pointer;" v-for="(phone, index) in userData.phones" :key="phone" v-if="userData.phones.length > 0">
                    <div class="col s10"  @click="showButton = !showButton">
                        <h5>{{phone}}</h5>
                        <small>{{index}}</small>
                    </div>
                    <div class="col s2">
                        <button class="btn-floating red btn-mini btn-small valig-wrapper" v-if="showButton"><i class="material-icons">delete</i></button><br>
                    </div>
                </div>
                </div>
               
               <div v-else>
                    <div class="row" style="cursor:pointer;">
                    <div class="col s10">
                       <center>
                            <small>No hay telefonos registrados</small>
                       </center>
                    </div>
                </div>
               </div>

            </md-card-content>
        </md-card>
                 </div>
             </div>
  
       </div>

   </div>

</div>


 </div>
</template>


<script>
import {EditProfileForm, UserCard} from '@/pages'
import { Modal } from '@/components';
import { mapGetters } from 'vuex';
import isMobile from '../../assets/js/isMobile'

export default {
  components: {
    EditProfileForm,
    UserCard,
    Modal,
  },
  name: 'userProfile',
  props: {
    
  },
  data () {
    return {
        newEmail: '',
        imageCircle: '',
        userData:{},
        isMobileLocal: false,
        showButton: false,
        editEMail: false,
        editPhone: false
        
    }
  },
  methods: {
    
     onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
      return;
      if(e.target.name){
        this.createImage(files[0],"circle");
         this.userData.image = {
            "name": files[0].name,
            "size": files[0].size,
            "type": files[0].type
        }
      } else {
        this.createImage(files[0]);
      }

    },
    createImage(file,type) {
      let reader = new FileReader();
      let vm = this;

      reader.onload = (e) => {
        if(type === "circle"){
          vm.imageCircle = e.target.result;
        } else {
          vm.imageRegular = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    },

    saveProfile(){
        console.log("NEW PROFILE -> ",this.userData);
    }
   
  },

  computed: {
    ...mapGetters({
      user: 'users/user'
    })
  },

  created(){
      console.log(this.user);
      this.imageCircle = (this.user.google.imgUrl != '') ? this.user.google.imgUrl : this.user.image;
      this.userData = this.user;
      this.isMobileLocal = isMobile;
  }
}

</script>
<style>
.card-expansion {
    height: 480px;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
.text-right{
  display: flex;
}


</style>
