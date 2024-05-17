import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    getCount(state) {
      return state.count;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    incrementAsync({ commit }, delay) {
      setTimeout(() => {
        commit('increment');
      }, delay);
    }
  },
  modules: {
  }
})
