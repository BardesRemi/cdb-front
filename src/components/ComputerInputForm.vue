<template>
  <div class="computerInputForm">
    <div id="form">
      <fieldset>
        <div id="name">
          <label for="nameInput">Name </label>
          <input id="nameInput" type="text" v-model="computer.name" placeholder="Name"/>
        </div>
        <div id="introduced">
          <label for="introducedInput">Introduction date </label>
          <input id="introducedInput" type="date" v-model="computer.introduced" placeholder="Introduced date"/>
        </div>
        <div id="discontinued">
          <label for="discontinuedInput">Discontinued date </label>
          <input id="discontinuedInput" type="date" v-model="computer.discontinued" placeholder="Discontinued date"/>
        </div>
        <div id="company">
          <label for="companyInput">Company</label>
          <select v-model="computer.company" id="companyId" name="companyId" >
              <option disabled>--</option>
              <option v-for="(company, id) in companyList" :key="id">{{company.name}}</option>
          </select>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import { Computer } from '../model/Computer.js'

export default {
  name: 'ComputerInputForm',
  data () {
    return {
      companyList: null
    }
  },
  props: {
    computer: Computer
  }
}
</script>
