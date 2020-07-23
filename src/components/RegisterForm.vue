<template>
  <div class="loginForm">
    <h1> Ceci est le formulaire de Login</h1>
    <form ref="logForm">
      <div class="field">
        <label for="username">Username : </label>
        <input name="username" type="text" v-model="username"/>
      </div>

      <div class="field" :class="{field_error:!passValidityTest}">
        <div class="error_message">Le mdp doit faire entre 4 et 24 caractères</div>
        <label for="password">Password : </label>
        <input name="password" type="password" v-model="password"/>
      </div>

      <div class="field" :class="{field_error:!passEqualityTest}">
        <label for="password2">Confirm Password : </label>
        <input name="password2" type="password" v-model="password2"/>
        <div class="error_message">Les 2 mdp ne sont pas identiques</div>
      </div>

      <button type="button" :disabled="!commitRdy" @Click="registerPush">Register</button>
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
      password: '',
      password2: ''
    }
  },

  methods: {
    registerPush () {

    }
  },

  computed: {
    passValidityTest () {
      return this.password.length > 3 &&
             this.password.length < 25
    },

    passEqualityTest () {
      return this.password === this.password2
    },

    commitRdy () {
      return this.passEqualityTest && this.passValidityTest
    }
  }
}
</script>

<style scoped>
  .error_message {
    color: red;
  }

  .field_error input {
    border-color: red;
    color: red;
  }

  .field .error_message {
    visibility:  hidden
  }

  .field.field_error .error_message {
    visibility:  visible
  }
</style>
