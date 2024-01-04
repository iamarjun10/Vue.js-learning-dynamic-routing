<template>
  <div>
    <div>
      <router-link to="/Php">Php</router-link> <br>
      <router-link to="/">Java</router-link> <br>
      <router-link to="/Node">Node</router-link> <br>
      <router-link to="/Ios">iOS</router-link> <br>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'AppMain',
  }
</script>

<style scoped>

</style>
