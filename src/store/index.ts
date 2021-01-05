import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    isLogged: false,
  },
  mutations: {
    login(state, user: string | object) {
      if (typeof user === 'string') user = JSON.parse(user)
      state.user = user
      state.isLogged = true
    },
    logout(state) {
      state.user = {}
      state.isLogged = false
    },
  },
  actions: {},
  modules: {},
})
