<template>
  <div class="loginForm">
    <v-btn class="register-btn" @click="redirectRegister">Register</v-btn>
    <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
        <v-col
          cols="4"
          md="3"
        >
          <v-text-field
            v-model="username"
            :rules="[rules.required, rules.max]"
            :counter="24"
            label="Username"
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
          md="3"
        >
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            hint="required"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
    </v-container>
  </v-form>
    <v-row rows="1">
      <v-col cols="3" md="1">
        <v-btn class="clear-btn" @click="clear">clear</v-btn>
      </v-col>
      <v-col cols="3" md="1">
        <v-btn class="login-btn" :disabled="!valid" @click="submit">login</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {

  },

  data () {
    return {
      valid: true,
      username: '',
      password: '',
      show1: false,
      rules: {
        required: v => !!v || 'Required',
        max: v => v.length <= 24 || 'UserName must be less than 25 characters'
      }
    }
  },

  methods: {
    submit () {
      this.$refs.form.submit()
    },
    redirectRegister () {
      this.$router.push({ name: 'Register' })
    },
    clear () {
      this.username = ''
      this.password = ''
    }
  },

  computed: {

  }
}
</script>

<style scoped>
</style>
