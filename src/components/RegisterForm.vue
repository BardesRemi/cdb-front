<template>
  <div class="loginForm">
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

        <v-col
          cols="4"
          md="3"
        >
          <v-text-field
            v-model="password2"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.match]"
            :type="show2 ? 'text' : 'password'"
            label="Confirm password"
            hint="required and equal to password"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
    </v-container>
  </v-form>
    <v-row rows="1">
      <v-col cols="3" md="1">
        <v-btn class="clear-btn" @click="clear">clear</v-btn>
      </v-col>
      <v-col cols="3" md="1">
        <v-btn class="login-btn" :disabled="!valid" @click="register">Register</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  props: {

  },

  data () {
    return {
      valid: true,
      username: '',
      password: '',
      password2: '',
      show1: false,
      show2: false,
      rules: {
        required: v => !!v || 'Required',
        max: v => v.length <= 24 || 'UserName must be less than 25 characters',
        match: v => (!!v && v) === this.password || 'Password do not match'
      }
    }
  },

  methods: {
    register () {

    },
    clear () {
      this.username = ''
      this.password = ''
      this.password2 = ''
    }
  },

  computed: {

  }
}
</script>

<style scoped>
</style>
