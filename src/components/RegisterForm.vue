<template>
  <div class="loginForm">
    <h1> Ceci est le formulaire de Login</h1>
    <form ref="logForm">
      <div>
        <label for="username">Username : </label>
        <input name="username" type="text"/>
      </div>

      <div>
        <label for="password">Password : </label>
        <input name="password" type="password"/>
      </div>

      <div>
        <label for="password2">Confirm Password : </label>
        <input name="password2" type="password"/>
      </div>

      <button type="button">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {

  }
}
</script>

<style scoped>

</style>
