import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      posts: [],
      postCount: 0,
      people: [],
      peopleCount: 0,
      projects: [],
      loading: true,
    },
    mutations,
    actions,
    getters,
    // plugins: [vuexLocal.plugin]
})