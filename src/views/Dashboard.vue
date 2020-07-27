<template>
  <div class="dashboard">
    <div class="computer">
      <Computer/>
    </div>
  </div>
</template>

<script>
import Computer from '../components/Computer'
export default {
  name: 'Dashboard',
  components: { Computer }
}
</script>

<style scoped>

.computer {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
