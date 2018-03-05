import Vue from 'vue'; // get vue
import Vuex from 'vuex'; // get vuex
import common from '@/store/modules/common';
import getters from '@/store/getters';

Vue.use(Vuex);

var state = {
};

var mutations = {
};

var actions = {
};

var store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    common
  }
});

export default store;
