<template>
  <div class="addComputer">
    <ComputerInputForm :computer="computer" :submitFunction="submitFunction" @exit="resendEvent()"></ComputerInputForm>
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
        computerService.create(newComputer).then(result => this.$emit('exit'), error => {
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
  }
}
</script>
<style>
.addComputer > h1 {
  text-align: center;
}

.addComputer {
  background-color: rgba(244, 244, 244, 0.8);
}
</style>
