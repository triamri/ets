<template>
  <div id="app">
    <the-navbar></the-navbar>
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from '@/components/navbar/TheNavbar'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    TheNavbar
  },
  mapActions: {
    ...mapActions([
      'setUsers'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
