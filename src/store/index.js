import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    loggedIn: false,
    uid: '',
    email: '',
    username: ''
  },
  mutations: {
    SET_LOGIN(state, { uid, email }) {
      state.loggedIn = true;
      state.uid = uid;
      state.email = email;
    },
    SET_USERNAME(state, username) {
      state.username = username;
    }
  },
  getters: {
  },
  actions: {
  }
})
