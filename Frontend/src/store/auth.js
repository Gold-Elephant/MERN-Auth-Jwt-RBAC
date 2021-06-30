import * as types from "./mutation-types";
import axios from "axios";
import VueCookies from "vue-cookies";

const state = () => {
  return {
    user: {}
  };
};

// getters
const getters = {
  user: state => state.user
};
// actions
const actions = {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(process.env.VUE_APP_ROOT_API + "/v1/auth/login", {
          email: payload.email,
          password: payload.password
        })
        .then(response => {
          commit(types.SET_USER, response.data.content);
          VueCookies.set("info", response.data.content, "550");
          localStorage.setItem("info", JSON.stringify(response.data.content));
          resolve(response);
        })
        .catch(e => {
          reject(e.response);
        });
    });
  },
  resetpassword({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(process.env.VUE_APP_ROOT_API + "/v1/auth/resetpassword", {
          email: data.email
        })
        .then(response => {
          console.log(response);
          commit(types.SET_USER, response.data.content);
          resolve(response);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
};

// mutations
const mutations = {
  [types.SET_USER](state, userInfo) {
    state.user = userInfo;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
