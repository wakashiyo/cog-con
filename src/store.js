import Vue from "vue";
import Vuex from "vuex";
import { signIn } from "./plugins/aws_auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: "",
    signinError: false
  },
  getters: {
    loginCheck: state => {
      //console.log(state.idToken);
      if (state.idToken === "" || state.idToken === null) {
        return false;
      } else {
        return true;
      }
    },
    errorStatus: state => {
      return state.signinError;
    }
  },
  mutations: {
    // changeLoginStatus(state, value) {
    //   state.login = value;
    // }
    createSession(state, data) {
      //console.log(data);
      state.idToken = data;
    },
    failedCreateSession(state, data) {
      state.signinError = data;
    }
  },
  actions: {
    // changeLogin(context) {
    //   context.commit("changeLoginStatus", true);
    // }
    createSession(context, data) {
      signIn(data.username, data.password)
        .then(res => {
          //alert("success sign in");
          console.log(res);
          const key = "CognitoIdentityServiceProvider." + process.env.VUE_APP_APP_CLIENT_ID + "." + data.username + ".idToken"; 
          const token = localStorage.getItem(key);
          context.commit("createSession", token);
        })
        .catch(err => {
          alert("sign in error");
          console.log(err);
          context.commit("failedCreateSession", true);
        });
    }
  }
});
