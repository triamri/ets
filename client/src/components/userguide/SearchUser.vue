<template>
  <div>
    <div class="container padding-top">
      <users-list></users-list>  
    </div>
  </div>
</template>
<script>
import UsersList from './UsersList'
export default {
  components: {
    UsersList
  }
}
</script>
<style>
.padding-top {
  padding-top: 60px;
}
.padding-top-row {
  padding-top: 10px;
}
</style>
