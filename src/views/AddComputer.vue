<template>
  <div class="addComputer">
    <ComputerInputForm :computer="computer" :submitFunction="submitFunction" @exit="resendEvent($event)"></ComputerInputForm>
  </div>
</template>

<script>
import ComputerInputForm from '../components/ComputerInputForm.vue'
import Computer from '../model/Computer.js'
import { computerService } from '../api/ComputerService'

export default {
  name: 'AddComputer',
  data () {
    return {
      computer: new Computer(0, ''),
      submitFunction (computer) {
        const newComputer = { ...computer, id: undefined }
        computerService.create(newComputer).then(
          result => this.$emit('exit', this.eventReturn(true, 'Computer successfully added to database')),
          error => {
            this.$emit('exit', this.eventReturn(false, 'Error while trying to add the computer'))
            console.log(error)
          })
      }
    }
  },
  components: {
    ComputerInputForm
  },
  methods: {
    resendEvent: function (state) {
      this.$emit('exit', state)
    },
    eventReturn (success, message) {
      return {
        success: success,
        message: message
      }
    }
  }
}
</script>
