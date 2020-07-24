<template>
  <div class="computerInputForm">
    <form @submit="submit" id="form">
      <fieldset>
        <div id="name">
          <label for="nameInput">Name </label>
          <input id="nameInput" type="text" v-model="computer.name" placeholder="Name" required/>
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
          <label for="companyId">Company </label>
          <select v-model="idCompanyList" id="companyId" name="companyId" >
              <option :value="-1">--</option>
              <option v-for="(company, id) in companyList" :key="id" :value="id">{{company.name}}</option>
          </select>
        </div>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { Computer } from '../model/Computer'
import { companyService } from '../api/CompanyService'

console.log(companyService)

export default {
  name: 'ComputerInputForm',
  data () {
    return {
      companyList: [],
      idCompanyList: -1
    }
  },
  methods: {
    submit (event) {
      event.preventDefault()
      console.log('Submit du computer')
      this.computer.companyDTO = this.companyList[this.idCompanyList]
      this.submitFunction(this.computer)
    },
    setIdCompanyList () { this.idCompanyList = this.companyList.findIndex(company => this.computer.companyDTO !== null && company.name === this.computer.companyDTO.name) }
  },
  props: {
    computer: Computer,
    submitFunction: Function
  },
  mounted () {
    companyService.findAll().then(result => { this.companyList = result.data; this.setIdCompanyList() }, error => console.error(error))
  }
}
</script>
