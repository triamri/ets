<template>
  <div>
    <div class="container padding-top">
      <about-list></about-list>  
    </div>
  </div>
</template>
<script>
import AboutList from './AboutList'
export default {
  components: {
    AboutList
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
