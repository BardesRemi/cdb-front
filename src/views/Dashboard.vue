<template>
  <div class="dashboard">
    <div class="computer">
      <Computer @errorMessage="printErrorMessage($event)" @infoMessage="printInfoMessage($event)" @successMessage="printSuccessMessage($event)"/>
    </div>
    <v-snackbar v-model="messageVisible" :timeout="timeout" :color="color">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="messageVisible = false">
          X
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import Computer from '../components/Computer'
export default {
  name: 'Dashboard',
  components: { Computer },
  data () {
    return {
      message: '',
      timeout: 6000,
      color: 'info',
      messageVisible: false
    }
  },
  methods: {
    printMessage (message, color) {
      this.color = color
      this.message = message
    },
    printErrorMessage (message) {
      this.printMessage(message, 'error')
    },
    printInfoMessage (message) {
      this.printMessage(message, 'info')
    },
    printSuccessMessage (message) {
      this.printMessage(message, 'success')
    }
  }
}
</script>

<style scoped>

.computer {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
