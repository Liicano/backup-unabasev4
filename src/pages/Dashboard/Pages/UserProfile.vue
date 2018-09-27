<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form header-color="green">

        </edit-profile-form>
      </div>
<<<<<<< HEAD
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card button-color="success">

        </user-card>
      </div>
=======
      <!-- <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card button-color="success">

        </user-card>
      </div> -->
>>>>>>> d754a8d13470abe52e3087916789f80a920e4a26
    </div>
  </div>
</template>

<script>
import {EditProfileForm, UserCard} from '@/pages'
export default{
  components: {
    EditProfileForm,
    UserCard
  }
}
</script>
<style lang="scss">
.text-right{
  display: flex;
}
</style>
