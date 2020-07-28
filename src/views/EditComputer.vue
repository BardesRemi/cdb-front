<template>
  <div class="editComputer">
    <span>C'est la page EditComputer</span>
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
