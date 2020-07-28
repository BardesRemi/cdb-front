<template>
  <div class="editComputer">
    <h1>Edit a computer</h1>
    <ComputerInputForm :computer="computer" :submitFunction="submitFunction"></ComputerInputForm>
  </div>
</template>

<script>
import ComputerInputForm from '../components/ComputerInputForm.vue'
import Computer from '../model/Computer.js'
import { computerService } from '../api/ComputerService'

export default {
  name: 'EditComputer',
  data () {
    return {
      computer: new Computer(0, ''),
      submitFunction (computer) { computerService.edit(computer) }
    }
  },
  components: {
    ComputerInputForm
  },
  props: {
    id: Number
  },
  mounted () {
    computerService.findById(this.$route.query.id).then(result => { this.computer = result.data }, error => console.error(error))
  }
}
</script>

<style>
.editComputer > h1 {
  text-align: center;
}
</style>
