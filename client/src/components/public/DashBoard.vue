<template>
  <div>
    <header class="masthead d-flex">
      <div class="container text-center my-auto">
        <h1 class="mb-1">{{ msg }}</h1>
        <h3 class="mb-5">
          <em>{{ desc }}</em>
        </h3>
        <login-dashboard></login-dashboard>
      </div>
      <div class="overlay"></div>
    </header>
  </div>
</template>

<script>
import LoginDashboard from './LoginDashboard'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome',
      desc: 'jepetgram'
    }
  },
  components: {
    LoginDashboard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
