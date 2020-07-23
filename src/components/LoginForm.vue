<template>
  <div class="loginForm">
    <h1> Ceci est le formulaire de Login</h1>
    <form ref="logForm">
      <div class="field">
        <label for="username">Username : </label>
        <input name="username" type="text" v-model="username"/>
      </div>

      <div class="field">
        <label for="password">Password : </label>
        <input name="password" type="password" v-model="password"/>
      </div>

      <button type="button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {

  },

  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    loginLaunch () {

    }
  },

  computed: {

  }
}
</script>

<style scoped>
</style>
