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
        <tr v-for="computer in computerSearch" :key="computer">
          <td v-for="value in computer" :key="value">{{ value }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'Computer',
  data () {
    return {
      computers: [
        { nom: 'ordi1', introduced: "aujourd'hui", discontinued: 'demain', companyName: 'company1' },
        { nom: 'ordi2', introduced: "aujourd'hui1", discontinued: 'demain1', companyName: 'company2' },
        { nom: 'ordi1', introduced: "aujourd'hui", discontinued: 'demain', companyName: 'company1' },
        { nom: 'ordi2', introduced: "aujourd'hui1", discontinued: 'demain1', companyName: 'company2' },
        { nom: 'ordi1', introduced: "aujourd'hui", discontinued: 'demain', companyName: 'company1' },
        { nom: 'ordi2', introduced: "aujourd'hui1", discontinued: 'demain1', companyName: 'company2' },
        { nom: 'ordi1', introduced: "aujourd'hui", discontinued: 'demain', companyName: 'company1' },
        { nom: 'ordi2', introduced: "aujourd'hui1", discontinued: 'demain1', companyName: 'company2' },
        { nom: 'ordi1', introduced: "aujourd'hui", discontinued: 'demain', companyName: 'company1' },
        { nom: 'ordi2', introduced: "aujourd'hui1", discontinued: 'demain1', companyName: 'company2' },
        { nom: 'ordi1', introduced: "aujourd'hui", discontinued: 'demain', companyName: 'company1' },
        { nom: 'ordi2', introduced: "aujourd'hui1", discontinued: 'demain1', companyName: 'company2' }],
      search: ''
    }
  },
  computed () {
    computerSearch() {
      return this.computers.filter(computer => computer.nom.toLowerCase().includes(this.search.toLowerCase()));
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
