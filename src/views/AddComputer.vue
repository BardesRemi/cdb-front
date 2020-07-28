<template>
  <div class="addComputer">
    <h1>Add a computer</h1>
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
<style>
.addComputer > h1 {
  text-align: center;
}

.addComputer {
  background-color: rgba(244, 244, 244, 0.8);
}
</style>
