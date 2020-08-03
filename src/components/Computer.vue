<template>
  <v-row no-gutters justify="space-around">
    <div class="computer">
      <v-form>
        <v-container>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field v-model="search">Search</v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-btn v-on:click="searcher" small>Submit</v-btn>
            </v-flex>
            <v-flex xs12 md4>
              <v-dialog v-model="addComputerDialog">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" small>add a new computer</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2 justify-center">Add new computer</v-card-title>
                  <v-card-text>
                    <AddComputer @exit="closeAddPopup($event)"></AddComputer>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
      <v-simple-table class="table" :fixed-header="true" :height="500">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                <v-row>
                  <v-checkbox :input-value="allSelected" @change="selectAll"></v-checkbox>
                  <v-icon v-if="selected.length > 0" @click="deleteSelected(selected)">delete</v-icon>
                </v-row>
              </th>
              <th class="text-left">Name</th>
              <th class="text-left">Introduced</th>
              <th class="text-left">Discontinued</th>
              <th class="text-left">Company Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(computer) in computers" :key="computer.id">
              <td><v-row><v-checkbox v-model="selected" :value="computer.id"></v-checkbox></v-row></td>

              <v-dialog v-model="dialog[computer.id]">
                <template v-slot:activator="{ on }">
                  <td v-on="on" v-if="computer.companyDTO !== null">{{computer.companyDTO.name}}</td>
                  <td v-on="on" v-else></td>
                  <td v-on="on" v-if="computer.discontinued !== null">{{computer.discontinued}}</td>
                  <td v-on="on" v-else></td>
                  <td v-on="on" v-if="computer.introduced !== null">{{computer.introduced}}</td>
                  <td v-on="on" v-else></td>
                  <td v-on="on">{{computer.name}}</td>
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2 justify-center">EditComputer</v-card-title>
                  <v-card-text>
                    <EditComputer :id="parseInt(computer.id)" @exit="closeEditPopup($event, computer.id)"></EditComputer>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-row justify="center" align="center">
        <v-col cols="2" class="d-none d-lg-block">
          <v-slider
            v-model="page"
            color="orange"
            class="pageSelectionSlider d-none d-lg-block"
            thumb-label
            :max="Math.max(parseInt((nb_page - 1) / 10, 10) + 1)"
            min="1"
            label="page"
            @end="changePage">
          </v-slider>
        </v-col>
        <v-col cols="6"  md="8">
          <v-pagination
            :length="Math.max(parseInt((nb_page - 1) / 10, 10) + 1)"
            v-model="page"
            @input="update"
            :total-visible="7"
          ></v-pagination>
        </v-col>
      </v-row>
    </div>
  </v-row>
</template>

<script>

import EditComputer from '../views/EditComputer.vue'
import AddComputer from '../views/AddComputer.vue'
import { axios } from '../api/index'
import { computerService } from '../api/ComputerService'

export default {
  name: 'Computer',
  data () {
    return {
      selected: [],
      addComputerDialog: false,
      dialog: {},
      on: true,
      nb_page: 15,
      data_cube: [],
      page: 1,
      computers: [],
      search: '',
      presearch: true
    }
  },
  computed: {
    allSelected () { return this.computers.length === this.selected.length && this.selected.length > 0 }
  },
  components: {
    EditComputer,
    AddComputer
  },
  mounted () {
    axios.defaults.headers.Authorization = 'Bearer ' + localStorage.getItem('user-token')
    this.update()
  },
  methods: {
    selectAll: function () {
      if (this.allSelected) {
        this.selected = []
      } else {
        this.selected = this.computers.map(comp => comp.id)
      }
    },
    deleteSelected: function (selection) {
      if (selection.length > 0) {
        computerService.delete(selection[0]).then(
          result => this.deleteSelected(selection.slice(1)),
          error => { this.$emit('errorMessage', 'Error when deleting computer'); console.error(error); this.update() }
        )
      } else {
        this.computers.length === this.selected.length ? this.previousPage() : this.update()
        this.$emit('successMessage', 'Selected computers have been deleted')
      }
    },
    closeAddPopup: function (eventReturn) {
      this.$emit(eventReturn.success ? 'successMessage' : 'errorMessage', eventReturn.message)
      this.update()
      this.addComputerDialog = false
    },
    closeEditPopup: function (eventReturn, id) {
      this.$emit(eventReturn.success ? 'successMessage' : 'errorMessage', eventReturn.message)
      this.update()
      this.$set(this.dialog, id, false)
    },
    update: function () {
      this.selected = []
      if (this.presearch) {
        axios
          .get(
            '/computers?page=' +
              this.page
          )
          .then((response) => { this.computers = response.data })
          .catch((error) => { console.error(error); this.$emit('errorMessage', 'Error while querying the database') })
        axios
          .get('/computers/nb')
          .then((response) => (this.nb_page = response.data.nb))
          .catch((error) => { console.error(error); this.$emit('errorMessage', 'Error while querying the database') })
      } else {
        axios
          .get(
            '/computers/search?page=' +
              this.page +
              '&name=' +
              this.search
          )
          .then((response) => { this.computers = response.data })
          .catch((error) => { console.error(error); this.$emit('errorMessage', 'Error while querying the database') })
      }
    },
    previousPage: function () {
      this.page -= 1
      this.update()
    },
    changePage: function () {
      this.update()
    },
    nextPage: function () {
      this.page += 1
      this.update()
    },
    searcher: function () {
      this.selected = []
      this.page = 1
      axios
        .get(
          '/computers/search?page=1&name=' +
            this.search
        )
        .then((response) => (this.computers = response.data))
        .catch((error) => { console.error(error); this.$emit('errorMessage', 'Error while querying the database') })
      axios
        .get(
          '/computers/nbsearch?name=' +
            this.search
        )
        .then((response) => (this.nb_page = response.data.nb))
        .catch((error) => { console.error(error); this.$emit('errorMessage', 'Error while querying the database') })
      this.presearch = false
    }
  }
}
</script>

<style scoped>
th {
  width: 300px;
}

.theme--light.v-data-table.v-data-table--fixed-header thead th {
  background: cornflowerblue;
  color: white;
  cursor: pointer;

}

.table {
  margin-left: 20px;
  margin-right: 20px;
}

.deleteIcon {
  float: right;
}

.pageSelectionSlider {
  width: 100%;
}

</style>
