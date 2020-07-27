  <style>
  @import '../assets/Home.css';
  </style>
<template>
  <div class="Home">
    <img alt="Vue logo" src="../assets/excilys.png">
    <h1>Welcome to CDB user {{info}}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:8080/computer-database/user')
      .then(response => (this.info = response.data.name)).catch(error => console.log(error))
  }
}
</script>
