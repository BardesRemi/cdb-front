<template>
<v-row no-gutters justify="space-around">
  <div class="computer">
<<<<<<< HEAD
    <input v-model="search"/><br/>
=======
    <v-form >
          <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
            <v-text-field v-model="search"
        >Search</v-text-field>
        </v-flex>
                <v-flex
          xs12
          md4
        >
            <v-btn  v-on:click="searcher" small> Submit</v-btn>
        </v-flex>
      </v-layout>
      </v-container>
    </v-form>
>>>>>>> dashboard
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
        <tr v-for="computer in computers" :key="computer.id">
          <td> <router-link :to="{path : 'editComputer', query : {id :computer.id}}">{{computer.name}}</router-link></td>
          <td v-if="computer.introduced !== null"> {{computer.introduced}}</td>  <td v-else>none</td>
          <td v-if="computer.discontinued !== null"> {{computer.discontinued}}</td> <td v-else>none </td>
          <td v-if="computer.companyDTO !== null"> {{computer.companyDTO.name}}</td> <td v-else>none </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-col>
    <v-pagination :length="parseInt(nb_page/10,10)+1" v-model="page" @input="update" :total-visible="7">
    </v-pagination>
    </v-col>
  </div>
  </v-row>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Computer',
  data () {
    return {
      nb_page: 15,
      data_cube: [],
      page: 2,
      computers: [],
      search: '',
      presearch: true
    }
  },
  mounted () {
    axios
      .get('http://10.0.1.248:8081/computer-database/computers?page=' + this.page)
      .then(response => (this.computers = response.data)).catch(error => console.log(error))
    console.log(this.computers)
    axios
      .get('http://10.0.1.248:8081/computer-database/computers/nb')
      .then(response => (this.nb_page = (response.data.nb))).catch(error => console.log(error))
  },
  methods: {
    update: function () {
      if (this.presearch) {
        axios
          .get('http://10.0.1.248:8081/computer-database/computers?page=' + this.page)
          .then(response => (this.computers = response.data)).catch(error => console.log(error))
      } else {
        axios.get('http://10.0.1.248:8081/computer-database/computers/search?page=' + this.page + '&name=' + this.search).then(response => (this.computers = response.data)).catch(error => console.log(error))
      }
    },
    previousPage: function () {
      this.page -= 1
      this.update()
    },
    nextPage: function () {
      this.page += 1
      this.update()
    },
    searcher: function () {
      this.page = 1
      axios.get('http://10.0.1.248:8081/computer-database/computers/search?page=1&name=' + this.search)
        .then(response => (this.computers = response.data)).catch(error => console.log(error))
      axios.get('http://10.0.1.248:8081/computer-database/computers/nbsearch?name=' + this.search)
        .then(response => (this.nb_page = (response.data.nb))).catch(error => console.log(error))
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

</style>
