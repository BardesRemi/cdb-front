<template>
  <div class="computer">
    <input v-model="search"/><br/>
    <v-simple-table class="table"
                    :fixed-header="true"
                    :height="500"
    >
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Introduced</th>
          <th class="text-left">Discontinued</th>
          <th class="text-left">Company Name</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="computer in computers" :key="computer">
          <td> {{computer.name}}</td>
          <td v-if="computer.introduced !== null"> {{computer.introduced}}</td>  <td v-else> </td>
          <td v-if="computer.discontinued !== null"> {{computer.discontinued}}</td> <td v-else> </td>
          <td v-if="computer.companyDTO !== null"> {{computer.companyDTO.name}}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
         <v-pagination :length="15" v-model="page" @input="update" :total-visible="7"></v-pagination>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Computer',
  data () {
    return {
      page: 2,
      computers: [],
      search: ''
    }
  },
  mounted () {
    axios
      .get('http://10.0.1.248:8081/computer-database/computers?page=' + this.page)
      .then(response => (this.computers = response.data)).catch(error => console.log(error))
  },
  methods: {
    update: function () {
      axios
        .get('http://10.0.1.248:8081/computer-database/computers?page=' + this.page)
        .then(response => (this.computers = response.data)).catch(error => console.log(error))
    },
    previousPage: function () {
      this.page -= 1
      this.update()
    },
    nextPage: function () {
      this.page += 1
      this.update()
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

</style>
