<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="card my-4">
              <h5 class="card-header">Login</h5>
              <div class="card-body">
                <div class="input-group">
                  <input type="text" v-model="formData.email" class="form-control" placeholder="Email">
                </div>
                <br />
                <div class="input-group">
                  <input type="password" v-model="formData.password" class="form-control" placeholder="Password">
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-btn">
                    <button class="btn btn-secondary" type="button" @click="setLogin">Login</button>
                  </span>
                </div>    
              </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formData : {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState([
      'user',
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'loginUser'
    ]),
    setLogin () {
      this.loginUser (this.formData)
    }
  }
}
</script>

