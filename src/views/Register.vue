<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <RegisterForm msg="Ceci est le formulaire d'inscription"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>
