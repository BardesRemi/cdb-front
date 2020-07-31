<template>
  <div class="registerForm">
    <v-card
      class="card-log-form"
      max-width="340"
      hover
    >
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-text-field
            v-model="username"
            :rules="[rules.required, rules.max, rules.min]"
            :counter="24"
            :label="$t('username')"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.max, rules.match]"
            :type="show1 ? 'text' : 'password'"
            :label="$t('password')"
            hint="required"
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            v-model="password2"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.match]"
            :type="show2 ? 'text' : 'password'"
            :label="$t('confirmpassword')"
            hint="required and equal to password"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-container>
      </v-form>
      <v-card-actions>
          <v-btn class="register-btn" :disabled="!valid" @click="register" color="success">{{ $t("register") }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',

  props: {
  },

  data () {
    return {
      valid: false,
      username: '',
      password: '',
      password2: '',
      show1: false,
      show2: false,
      rules: {
        required: v => !!v || 'Required',
        max: v => v.length <= 24 || 'Must be less than 25 characters',
        min: v => v.length > 5 || 'Must be at least 6 characters',
        match: v => (!!v && v) === this.password2 || 'Passwords do not match'
      }
    }
  },

  methods: {
    register () {
      if (this.$refs.form.validate()) {
        console.log('bonjour')
      }
    },

    validateField () {
      this.$refs.form.validate()
    }
  },

  computed: {

  },

  watch: {
    password2: 'validateField'
  }

}
</script>

<style scoped>
  .registerForm {
    margin-left:10px;
  }
</style>
