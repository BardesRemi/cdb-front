<template>
  <div class="login">
    <LoginForm @exit="resendEvent()" />
  </div>
</template>

<script>

import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    redirectRegister () {
      this.$router.push({ name: 'Register' })
    },
    resendEvent: function () {
      this.$emit('exit')
    }
  }
}
</script>
