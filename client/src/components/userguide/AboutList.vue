<template>
<div>
  <post-gram></post-gram>
    <div class="row">
      <kategori-gram></kategori-gram>
      <div class="col-md-8">
        <div class="row">
          <gram-summary v-for="gram in grams" :key="gram" :gram="gram"></gram-summary>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import GramSummary from './GramSummary'
import PostGram from './PostGram'
import KategoriGram from './KategoriGram'
export default {
  components: {
    GramSummary,
    PostGram,
    KategoriGram
  },
  computed: {
    ...mapState([
      'grams'
    ])
  },
  methods: {
    ...mapActions([
      'getGramsUser'
    ])
  },
  created () {
    this.getGramsUser ()
  }
}
</script>
