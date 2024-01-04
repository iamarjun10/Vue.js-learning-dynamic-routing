<template>
  <div>
    <div>
      <router-link to="/Php">Php</router-link> <br>
      <router-link to="/">Java</router-link> <br>
      <router-link to="/Node">Node</router-link> <br>
      <router-link to="/Ios">iOS</router-link> <br>
      <router-link to="/profile/1">Arjun's Profile</router-link> <br>
      <router-link to="/profile/2">Sai's Profile</router-link> <br>
      <router-link to="/profile/3">Subham's Profile</router-link> <br>
      <router-link to="/profile32/xyz">404</router-link> <br>
      <router-link to="/xyz/3">XYZ</router-link> <br>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'ProjectMain',
  }
</script>

<style scoped>

</style>
