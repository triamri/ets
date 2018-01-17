<template>
    <div class="col-md-4" style="margin-top:-10px">
      <div class="card my-4">
        <h5 class="card-header">Followers</h5>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12">
              <ul class="list-unstyled mb-0" v-for="flw in users.followers" :key="flw">
                <li v-if="flw.userID._id !== user._id">{{ flw.userID.first_name }} {{ flw.userID.last_name }} 
                  <div v-if="users.follows.length" v-for="fl in users.follows" :key="fl">
                    <!-- <button  @click="submitUnfollow(fl.userID._id)">unfollow</button> -->
                    <button v-if="fl.userID._id !== flw.userID._id" @click="addFollow(fl.userID._id)">follow</button>
                  </div>
                  <div>
                    <button v-if="users.follows.length == 0" @click="addFollow(flw.userID._id)">follow</button>
                  </div>                  
                </li>
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
              <ul class="list-unstyled mb-0" v-for="flw in users.follows" :key="flw">
                <li v-if="flw.userID._id !== user._id">
                  {{ flw.userID.first_name }} {{ flw.userID.last_name }}
                  <button @click="addUnFollow(flw.userID._id)">Unfollow</button>
                </li>
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
      'getUser',
      'submitFollow',
      'submitUnfollow'
    ]),
    addFollow (id) {
      this.submitFollow(id)
      // this.getUser()
    },
    addUnFollow (id) {
      this.submitUnfollow(id)
      // this.getUser()
    }
  },
  created () {
    this.getUser ()
  },
  computed: {
    ...mapState([
      'users',
      'user'
    ])
  }
}
</script>

