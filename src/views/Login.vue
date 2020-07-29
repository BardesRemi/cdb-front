<template>
  <div class="login">
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
