<template>
  <div class="editComputer">
    <ComputerInputForm :computer="computer" :submitFunction="submitFunction" @exit="resendEvent($event)"></ComputerInputForm>
  </div>
</template>

<script>
import ComputerInputForm from '../components/ComputerInputForm.vue'
import Computer from '../model/Computer.js'
import { computerService } from '../api/ComputerService'

export default {
  name: 'EditComputer',
  props: {
    id: Number
  },
  data () {
    return {
      computer: new Computer(0, ''),
      submitFunction (computer) {
        computerService.edit(computer).then(
          result => this.$emit('exit', this.eventReturn(true, 'Computer successfully updated')),
          error => {
            this.$emit('exit', this.eventReturn(false, 'Error while trying to update the computer'))
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
  },
  mounted () {
    computerService.findById(this.id).then(result => { this.computer = result.data }, error => console.error(error))
  }
}
</script>

<style>
.editComputer > h1 {
  text-align: center;
}
</style>
