<template>
  <div class="login">
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
