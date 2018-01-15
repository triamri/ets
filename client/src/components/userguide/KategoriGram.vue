<template>
    <div class="col-md-4" style="margin-top:-10px">
      <div class="card my-4">
        <h5 class="card-header">Followers</h5>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12">
              <ul class="list-unstyled mb-0" v-for="flw in user.followers" :key="flw">
                <li>{{ flw.userID.first_name }} {{ flw.userID.last_name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="card my-4">
        <h5 class="card-header">Follow</h5>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12">
              <ul class="list-unstyled mb-0" v-for="flw in user.follows" :key="flw">
                <li>{{ flw.userID.first_name }} {{ flw.userID.last_name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getUser'
    ])
  },
  created () {
    this.getUser ()
  },
  computed: {
    ...mapState([
      'user'
    ])
  }
}
</script>

