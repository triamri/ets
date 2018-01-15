<template>
  <div>
    <div class="container padding-top">
      <grams-list></grams-list>  
    </div>
  </div>
</template>
<script>
import GramsList from './GramsList'
export default {
  components: {
    GramsList
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
