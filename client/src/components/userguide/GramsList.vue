<template>
<div>
  <post-gram></post-gram>
      <div class="col-md-12">
        <div class="row">
          <gram-summary v-for="gram in grams" :key="gram" :gram="gram"></gram-summary>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import GramSummary from './GramSummary'
import PostGram from './PostGram'
export default {
  components: {
    GramSummary,
    PostGram
  },
  computed: {
    ...mapState([
      'grams'
    ])
  },
  methods: {
    ...mapActions([
      'getGrams'
    ])
  },
  created () {
    this.getGrams ()
  }
}
</script>
