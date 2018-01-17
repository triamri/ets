<template>

  <div v-if="userAll._id !== users._id" class="col-lg-6 col-sm-6 portfolio-item padding-top-row">
    <div class="card h-100">
        <small class="text-muted cursor">
          {{ getName }}
        </small>
        <small class="text-muted cursor">
          <button v-if="getFollow.length == 0" @click="addFollow(userAll._id)">follow</button>
          <button v-else @click="addUnFollow(userAll._id)">unfollow</button>
        </small>       
         
    </div>
  </div>

</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['userAll'],
  computed: {
    ...mapState([
      'users'
    ]),
    getName () {
      return this.userAll.first_name + ' ' + this.userAll.last_name
    },
    getFollow () {
      return this.userAll.followers.filter(obj => obj.userID == this.users._id)
    }
  },
  methods: {
    ...mapActions([
      'getUser',
      'submitFollow',
      'submitUnfollow'
    ]),
    addFollow (id) {
      this.submitFollow(id)
      this.$router.push('/dashboard')
    },
    addUnFollow (id) {
      this.submitUnfollow(id)
      this.$router.push('/dashboard')
    }
  },
  created () {
    this.getUser ()
  },
}
</script>
<style>
.cursor {
  cursor: pointer;
}
</style>
