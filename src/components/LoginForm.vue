<template>
  <div class="loginForm">
    <v-card
      class="card-log-form"
      max-width="340"
      hover
      shaped
    >
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-text-field
            v-model="username"
            :rules="[rules.required, rules.max]"
            :counter="24"
            :label="$t('username')"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            :label="$t('password')"
            hint="required"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-container>
      </v-form>
      <v-card-actions >
        <v-btn class="register-btn" @click="redirectRegister" color="warning">{{ $t("register") }}</v-btn>
        <v-btn class="login-btn" :disabled="!valid" @click="submit" color="success">{{ $t("login") }}</v-btn>
      </v-card-actions>
    </v-card>
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
      this.$refs.form.validate()
    },
    redirectRegister () {
      this.$router.push({ name: 'Register' })
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
