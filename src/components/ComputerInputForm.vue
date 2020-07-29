<template>
  <div class="computerInputForm">
    <form @submit="submit" id="form">
      <fieldset>
        <div id="name">
          <label for="nameInput">Name </label>
          <v-text-field id="nameInput" v-model="computer.name" :rules="nameRules" placeholder="Name" required ></v-text-field>
        </div>

        <div id="introduced">
          <v-dialog ref="dialogIntro" v-model="dialog1" :return-value.sync="computer.introduced" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="computer.introduced" label="Introduction date" prepend-icon="event" clearable readonly v-bind="attrs" v-on="on"/>
            </template>
            <v-date-picker v-model="computer.introduced" class="mt-4" min="1970-01-01" :max="maxAllowedDate">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="dialog1 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialogIntro.save(computer.introduced)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </div>

        <div id="discontinued">
           <v-dialog ref="dialogDiscont" v-model="dialog2" :return-value.sync="computer.discontinued" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field :disabled="!isIntroSet" v-model="computer.discontinued" label="Discontinuation date" prepend-icon="event" clearable readonly v-bind="attrs" v-on="on"/>
            </template>
            <v-date-picker :disabled="!isIntroSet" v-model="computer.discontinued" class="mt-4" :min="minAllowedDate" max="2031-01-01">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="dialog2 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialogDiscont.save(computer.discontinued)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </div>

        <div id="company">
          <label for="companyId">Company </label>
          <v-select v-model="computer.companyDTO" :items="companyList" item-text="name" clearable return-object/>
        </div>
      </fieldset>
      <div id="submitButton">
        <v-btn small :disabled="!checksOk" color="primary" type="submit">Submit</v-btn>
      </div>
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
      nameRules: [
        name => !!name || 'The name field is required',
        name => /^[a-zA-Z0-9 \-/_+]+$/.test(name) || 'No special characters are allowed except " +-/_"'
      ],
      dialog1: false,
      dialog2: false
    }
  },
  methods: {
    submit (event) {
      event.preventDefault()
      console.log('Submit du computer')
      this.submitFunction(this.computer)
    },
    resetDiscontinuedDate () { if (!this.computer.introduced) { this.computer.discontinued = undefined } } // Reset the discontinued date if no introduction date is set
  },
  props: {
    computer: Computer,
    submitFunction: Function
  },
  computed: {
    isIntroSet () { this.resetDiscontinuedDate(); return !!this.computer.introduced }, // Returns true if set
    maxAllowedDate () { return this.computer.discontinued || '2031-01-01' },
    minAllowedDate () { return this.computer.introduced || '1970-01-01' },
    checksOk () { return !!this.computer.name && /^[a-zA-Z0-9 \-/_+]+$/.test(this.computer.name) }
  },
  mounted () {
    companyService.findAll().then(result => { this.companyList = result.data }, error => console.error(error))
  }
}
</script>

<style>
.computerInputForm {
  margin: 25px;
}

.computerInputForm > form > fieldset {
  border: none;
}

#submitButton {
  display: flex;
  justify-content: center;
}
</style>
