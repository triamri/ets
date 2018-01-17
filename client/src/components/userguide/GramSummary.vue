<template>
  <div class="col-lg-6 col-sm-6 portfolio-item padding-top-row">
    <div class="card h-100">
      <img class="card-img-top" :src="gram.foto" :alt="gram.caption">
      <div class="card-footer">
        <small class="text-muted cursor" v-if="gram.userID._id === users._id"><i class="fa fa-thumbs-o-up cursor"></i> {{ gram.like.length }}</small>
        <small class="text-muted cursor" v-else >
          <i class="fa fa-thumbs-o-up cursor" @click="sendLike(gram)"></i>
          {{ gram.like.length }}
        </small>
        <small class="text-muted cursor" v-else>
          <i class="fa fa-thumbs-up cursor"></i>
          {{ gram.like.length }}
        </small>       
        <small class="text-muted cursor" style="padding-left:50px"><i class="fa fa-comment-o"></i> {{ gram.comment.length }}</small>
          <small class="text-muted cursor" style="padding-left:50px" v-if="isEdit == false && gram.userID._id === users._id"><i class="fa fa-edit" @click="editShow"></i></small>
          <small v-if="gram.userID._id === users._id" class="text-muted cursor" style="padding-left:50px"><i class="fa fa-trash" @click="removePost(gram)"></i></small>
      </div>
      <div v-if="isEdit == false">
      <div class="card-body">
        <small>{{ gram.userID.first_name }} {{ gram.userID.last_name }}</small>
        <p class="card-text">{{ gram.caption }}</p>
      </div>
      <div class="card-footer">
        <p class="card-text" @click="openComment" v-if="isComment == false"><i class="fa fa-comments-o cursor"></i></p>
        <p class="card-text" @click="hideComment" v-if="isComment"><i class="fa fa-comments-o cursor"></i></p>
      </div>
      <div class="card-body" v-if="isComment">
        <div v-for="comment in gram.comment" :key="comment">
          <small>{{ comment.komentar }}</small><br />
        </div>
        <input v-if="gram.userID._id !== users._id" type="text" v-model="comment" @keyup.enter="sendComment">
      </div>
      </div>
      <div v-if="isEdit">
        <h5 class="card-header">Edit EtsGrams</h5>
        <div class="card-body">
          <div class="input-group">
            <input type="text" v-model="gram.caption" class="form-control" placeholder="Caption">
          </div>
          <br />
          <div class="input-group">
            <input type="file" @change="processFile($event)">
          </div>   
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="updateGram(gram._id)">Update</button>
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
      isComment: false,
      isEdit: false,
      comment: '',
      newFile: ''
    }
  },
  props: ['gram'],
  computed: {
    ...mapState([
      'users',
      'user'
    ]),
    cekUserLike () {
      let id = this.users._id
      return this.gram.like.find(function (obj) { return obj.userID === id })
    }
  },
  methods: {
    ...mapActions([
      'sendLike',
      'submitComment',
      'submitUpdateGram',
      'removePost'
    ]),
    openComment () {
      this.isComment = true
    },
    hideComment () {
      this.isComment = false
    },
    editShow () {
      this.isEdit = true
    },
    editHide () {
      this.isEdit = false
    },
    processFile(e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length){
        return
      }
      this.newFile = files[0]
      this.createImage(files[0])
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.gram.foto = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    updateGram (id) {
      let payload = {
        id: id,
        foto: this.newFile,
        caption: this.gram.caption,
        gram: this.gram
      }
      this.editHide ()
      this.submitUpdateGram (payload)
    },
    sendComment () {
      const payload = {
        id: this.gram._id,
        userID: this.gram.userID._id,
        komentar: this.comment,
        gram: this.gram
      }
      this.comment = ''
      this.submitComment (payload)
    }
  }
}
</script>
<style>
.cursor {
  cursor: pointer;
}
</style>
