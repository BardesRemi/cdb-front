<template>
  <div class="logout">
    <v-btn @click="logout">LOGOUT</v-btn>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from '@/plugins/actions/auth'

export default {
  name: 'Logout',
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT)
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style scoped>

</style>
