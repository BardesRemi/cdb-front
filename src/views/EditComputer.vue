<template>
  <div class="editComputer">
    <span>C'est la page EditComputer</span>
    <ComputerInputForm :computer="computer" :submitFunction="submitFunction" @exit="resendEvent()"></ComputerInputForm>
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
        computerService.edit(computer).then(result => this.$emit('exit'), error => {
          alert('Network error while trying to update the computer')
          console.log(error)
        })
      }
    }
  },
  components: {
    ComputerInputForm
  },
  methods: {
    resendEvent: function () {
      this.$emit('exit')
    }
  },
  mounted () {
    computerService.findById(this.id).then(result => { this.computer = result.data }, error => console.error(error))
  }
}
</script>
