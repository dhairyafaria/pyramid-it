import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: 'dhairyafaria@gmail.com',
  },
  mutations: {
    setUserName(state, value) {
      state.userName = value;
    },
  },
  actions: {
  },
  getters: {
    getUserName: (state) => state.userName,
  },
});
