<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginForm msg="Ceci est le formulaire de login"/>
    <button type="button" @click="redirectRegister">register</button>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    redirectRegister () {
      this.$router.push({ name: 'Register' })
    }
  }
}
</script>
