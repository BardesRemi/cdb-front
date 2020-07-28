<template>
  <div class="login">
    <h1> Ceci est le formulaire de Login</h1>
    <LoginForm/>
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
