<template>
  <div class="loginForm">
    <v-card
      class="card-log-form"
      max-width="340"
      hover
      shaped
    >
      <v-form class="login" ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-text-field
            v-model="username"
            :rules="[rules.required, rules.max]"
            :counter="24"
            label="Username"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            hint="required"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-container>
      </v-form>
      <v-card-actions >
        <v-btn class="cancel-btn" @click="exit" color="error">Cancel</v-btn>
        <v-btn class="register-btn" @click="redirectRegister" color="warning">Register</v-btn>
        <v-btn class="login-btn" :disabled="!valid" @click="submit" color="success">login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { AUTH_REQUEST } from '@/plugins/actions/auth'

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
      this.$refs.form.validate()
      this.login()
    },
    redirectRegister () {
      this.$emit('redirectregister')
      this.$router.push({ name: 'Register' })
    },
    exit () {
      this.$emit('exit')
    },
    login () {
      const { username, password } = this
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$emit('connect', true)
        this.$emit('update:username', username)
        this.$router.push('/')
      }).catch(() => {
        this.$emit('connect', false)
      })
    }

  },

  computed: {

  }
}
</script>

<style scoped>
  .loginForm {
    margin-left:10px;
  }
</style>
