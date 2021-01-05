import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    isLogged: false,
  },
  mutations: {
    signIn(state, user: object) {
      state.user = user
      state.isLogged = true
    },
    singOut(state) {
      state.user = {}
      state.isLogged = false
    },
  },
  actions: {
    sign({ commit }, user: string | object) {
      if (typeof user === 'string') user = JSON.parse(user)

      if (Object.keys(user).length > 0) {
        commit('signIn', user)
      } else {
        commit('singOut')
      }
    },
  },
  modules: {},
})
