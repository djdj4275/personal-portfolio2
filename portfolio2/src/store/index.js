import Vue from 'vue'
import Vuex from 'vuex'
import data from '../assets/coordinate.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coordinate : data
  },
  getters: {
    getCoordinate(state) {
      return state.coordinate;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
