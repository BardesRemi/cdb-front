<template>
  <div class="addComputer">
    <span>C'est la page AddComputer</span>
    <ComputerInputForm :computer=computer></ComputerInputForm>
  </div>
</template>

<script>
// @ is an alias to /src
import ComputerInputForm from '@/components/ComputerInputForm.vue'
import Computer from '@/model/Computer.js'

export default {
  name: 'Home',
  data () {
    return {
      computer: new Computer(0, 'Coucou')
    }
  },
  components: {
    ComputerInputForm
  }
}
</script>
