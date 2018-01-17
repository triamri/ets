<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" v-if="isLogin === false" to="/">Dashboard</router-link>
                </li>
                <li class="nav-item active">
                  <router-link class="nav-link" v-if="isLogin" to="/dashboard">Dashboard</router-link>
                </li>
                <li class="nav-item" v-if="isLogin">
                  <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item" v-if="isLogin">
                  <router-link class="nav-link" to="/search">Search</router-link>
                </li>
                <li class="nav-item" v-if="isLogin === false">
                  <router-link class="nav-link" to="/register">Register</router-link>
                </li>
                <li class="nav-item" v-if="isLogin">
                  <a class="nav-link" @click="userLogout">logout</a>
                </li>
              </ul>
            </div>
          </div>
    </nav>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'cekLogin',
      'userLogout'
    ])
  },
  created () {
    this.cekLogin()
  }
}
</script>
