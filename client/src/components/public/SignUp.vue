<template>
<div>
  <div class="container">
    <div class="row" style="padding-top: 50px">
      <div class="col-md-8">
        <div class="card my-4">
              <h5 class="card-header">Register User</h5>
              <div class="card-body">
                <div class="input-group">
                  <input type="text" v-model="formData.first_name" class="form-control" placeholder="First Name">
                </div>
                <br />
                <div class="input-group">
                  <input type="text" v-model="formData.last_name" class="form-control" placeholder="Last Name">
                </div>
                <br />
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
                    <button class="btn btn-secondary" type="button" @click="registerUser(formData)">Register</button>
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
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData : {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'registerUser'
    ])
  }
}
</script>

