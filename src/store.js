import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false
  },
  getters: {
    loginCheck: state => {
      return state.login;
    }
  },
  mutations: {
    changeLoginStatus(state, value) {
      state.login = value;
    }
  },
  actions: {
    changeLogin(context) {
      context.commit("changeLoginStatus", true);
    }
  }
});
