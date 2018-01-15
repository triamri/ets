<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card my-4">
            <h5 class="card-header">Post EtsGrams</h5>
            <div class="card-body">
              <div class="input-group">
                <input type="text" v-model="caption" class="form-control" placeholder="Caption">
              </div>
              <br />
              <div class="input-group">
                <input type="file" id="file" @change="processFile($event)">
              </div>
              <br />
              <div class="input-group">
                <span class="input-group-btn">
                  <button class="btn btn-secondary" type="button" @click="tambahGram">Go!</button>
                </span>
              </div>    
            </div>
          </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      caption: '',
      someData: ''
    }
  },
  computed: {
    ...mapState([
      'users'
    ])
  },
  methods: {
    ...mapActions([
      'submitGram'
    ]),
    processFile(event) {
      this.someData = event.target.files[0]
    },
    tambahGram () {
      let payload = {
        userID: this.users._id,
        foto: this.someData,
        caption: this.caption
      }
      this.caption = ''
      document.getElementById('file').value = ''
      this.submitGram (payload)
    }
  }
}
</script>
