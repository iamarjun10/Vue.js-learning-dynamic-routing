<template>
  <!-- <AppMain/> -->
  <ProjectMain/>

</template>

<script>
import AppMain from './components/AppMain.vue'
import ProjectMain from './components/ProjectMain.vue'

export default {
  name: 'App',
  components: {
    AppMain,
    ProjectMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
