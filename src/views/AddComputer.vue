<template>
  <div class="addComputer">
    <span>C'est la page AddComputer</span>
    <ComputerInputForm :computer="computer" :submitFunction="submitFunction"></ComputerInputForm>
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
      submitFunction (computer) { const newComputer = { ...computer, id: undefined }; computerService.create(newComputer) }
    }
  },
  components: {
    ComputerInputForm
  }
}
</script>
