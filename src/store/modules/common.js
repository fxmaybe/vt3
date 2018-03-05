import Cookies from 'js-cookie'

export default {
  state: {
    sidebar: {
      opened: Cookies.get('sidebarStatus')
    }
  },

  getters: {
  },

  mutations: {
    toggleSidebar: state => {
      console.log(state.sidebar.opened);
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
  },

  actions: {
    // Vuex test
    toggleSidebarAct({ commit }) {
      commit('toggleSidebar');
    }
  }
}