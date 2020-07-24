<template>
  <div class="computerInputForm">
    <form @submit="submit" id="form">
      <fieldset>
        <div id="name">
          <label for="nameInput">Name </label>
          <v-text-field id="nameInput" v-model="computer.name" :rules="rules" placeholder="Name" required ></v-text-field>
        </div>
        <div id="introduced">
          <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Introduction date</v-expansion-panel-header>
            <v-expansion-panel-content>
                     <v-date-picker
                v-model="computer.introduced"
                :allowed-dates="allowedDates"
                class="mt-4"
                min="1970-01-01"
                max="2031-01-01"
              ></v-date-picker>
            </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>

        </div>
        <div id="discontinued">
          <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Discontinued date</v-expansion-panel-header>
            <v-expansion-panel-content>
                     <v-date-picker
                v-model="computer.discontinued"
                :allowed-dates="allowedDates"
                class="mt-4"
                min="1970-01-01"
                max="2031-01-01"
              ></v-date-picker>
            </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div id="company">
          <label for="companyId">Company </label>
          <v-select v-model="idCompanyList" id="companyId" name="companyId" >
              <option :value="-1">--</option>
              <option v-for="(company, id) in companyList" :key="id" :value="id">{{company.name}}</option>
          </v-select>
        </div>
      </fieldset>
      <v-btn small color="primary" type="submit">Submit</v-btn>
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
