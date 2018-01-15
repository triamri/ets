import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
// import { log } from 'util';
// import States from './states'
// import Actions from './actions'
// import Mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    grams: [],
    users: [],
    user: '',
    isLogin: false
  },
  mutations: {
    setGrams (state, payload) {
      state.grams = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLogin (state, payload) {
      state.isLogin = payload
    },
    setUsers (state, payload) {
      state.users = payload
    },
    saveGram (state, payload) {
      state.grams.push(payload)
    },
    editGram (state, payload) {
      let index = state.grams.indexOf(payload.load)
      state.grams[index].caption = payload.save.caption
      state.grams[index].foto = payload.save.foto
    },
    saveLikeGram (state, payload) {

    },
    saveLike (state, load) {
      let index = state.grams.indexOf(load.payload)
      let UserId = {
        userId: load.id
      }
      state.grams[index].like.push(UserId)
    },
    saveUnlike (state, payload) {
    },
    saveFollow (state, payload) {
      state.users = payload
      // console.log(state.users)
    },
    saveUnfollow (state, payload) {
      state.users = payload
      // console.log(state.users)
    },
    saveComment (state, payload) {
      let index = state.grams.indexOf(payload.gram)
      state.grams[index].comment.push({
        UserID: payload.userID,
        komentar: payload.komentar  
      })
    }
  },
  actions: {
    loginUser ({ commit }, payload) {
      axios.post(`http://localhost:3000/api/users/signout`, payload)
      .then(({ data }) => {
        localStorage.setItem('token', data.token)
        commit('setLogin', true)
        commit('setUser', data.data)
        router.push({ name: 'Home'})
      })
      .catch(err => console.log(err))
    },
    getGrams ({ commit }, payload) {
      axios.get(`http://localhost:3000/api/ets/all`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        commit('setGrams', data.data)
      })
      .catch(err => console.log(err))
    },
    getUser ({ commit }, payload){
      axios.get(`http://localhost:3000/api/users/user`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        console.log(data.data)
        commit('setUsers', data.data)
      })
      .catch(err => console.log(err))
    },
    submitGram ({ commit }, payload) {
      const formData = new FormData()
      formData.append('foto', payload.foto)
      formData.append('caption', payload.caption)
      formData.append('userID', payload.userID)
      axios.post(`http://localhost:3000/api/ets/create`, formData, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        console.log(data.data)
        commit('saveGram', data.data)
      })
      .catch(err => console.log(err))
    },
    submitUpdateGram ({ commit }, payload) {
      if(payload.foto){
        const formData = new FormData()
        formData.append('foto', payload.foto)
        formData.append('caption', payload.caption)
        axios.put(`http://localhost:3000/api/ets/updatefoto/${payload.id}`, formData, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({ data }) => {
          commit('editGram', { load: payload.gram, save: data.data } )
        })
        .catch(err => console.log(err))
      }else{
        axios.put(`http://localhost:3000/api/ets/update/${payload.id}`, {
          caption: payload.caption
        }, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({ data }) => {
          commit('editGram', { load: payload.gram, save: data.data } )
        })
        .catch(err => console.log(err))
      }
    },
    submitDeleteGram ({ commit }, payload) {

    },
    sendLike ({ commit }, payload) {
      axios.get(`http://localhost:3000/api/ets/likes/${payload._id}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        commit('saveLike', { payload, id: payload._id })
      }).
      catch(err => console.log(err))
    },
    submitUnlike ({ commit }, payload) {

    },
    submitComment ({ commit }, payload) {
      axios.put(`http://localhost:3000/api/ets/comment`, {
        id: payload. id,
        UserID: payload.UserID,
        komentar: payload.komentar
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        commit('saveComment', payload)
      })
      .catch(err => console.log(err))
    },
    submitFollow ({ commit }, payload) {
      axios.get(`http://localhost:3000/api/follows/followers/${ payload }`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((response) => {
        // console.log(response.data.data)
        commit('saveFollow', response.data.data)
      })
      .catch(err => console.log(err))
    },
    submitUnfollow ({ commit }, payload) {
      axios.get(`http://localhost:3000/api/follows/unfolow/${ payload }`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((response) => {
        // console.log(response.data.data)
        commit('saveUnfollow', response.data.data)
      })
      .catch(err => console.log(err))
    }
  }
})
export default store
