<template>
<div>
  <post-gram></post-gram>
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <user-summary v-for="user in usersall" :key="user" :userAll="user"></user-summary>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import UserSummary from './UserSummary'
export default {
  components: {
    UserSummary
  },
  computed: {
    ...mapState([
      'usersall'
    ])
  },
  methods: {
    ...mapActions([
      'getUserAll'
    ])
  },
  created () {
    this.getUserAll ()
  }
}
</script>
