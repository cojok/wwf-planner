import axios from 'axios'
import Vue from 'vue'

export const state = () => ({
  menuItems: [
    { icon: 'dashboard', title: 'Home', to: '/' },
    { icon: 'add', title: 'Add Breakfast', to: '/breakfast/add' },
    { icon: 'email', title: 'Invite to Breakfast', to: '/breakfast/invite' }
  ],
  title: 'Weißwurstfrühstück Planner',
  snackbar: {
    show: false,
    color: '',
    text: '',
    timeout: 0
  },
  breakfasts: null
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  snackbarShow: (state, data) => {
    state.snackbar.show = data.show
    state.snackbar.color = data.color
    state.snackbar.text = data.text
  },
  setBreakfasts: (state, data) => {
    if (typeof data === 'object') {
      Vue.set(state, 'breakfasts', data)
    }
  }
}

export const actions = {
  async saveBreakfast ({commit}, dateTime) {
    await axios.post('http://localhost:3333/api/v1/breakfast', {
      date: dateTime
    }).then(response => {
      const data = {
        show: true,
        color: 'success',
        text: 'Breakfast added',
        timeout: 1200
      }
      commit('snackbarShow', data)
      console.log(response.data)
    }).catch(err => {
      const data = {
        show: true,
        color: 'error',
        text: 'Something went wrong. Error: ' + err,
        timeout: 1200
      }
      commit('snackbarShow', data)
      console.log(err.response)
    })
  },
  async setSnackbar ({ commit }, data) {
    commit('snackbarShow', data)
  },
  async breakfast ({ commit }) {
    await axios.get('http://localhost:3333/api/v1/breakfasts').then(response => {
      commit('setBreakfasts', response.data.body)
    }).catch(err => {
      const data = {
        show: true,
        color: 'error',
        text: 'Something went wrong. Error: ' + err,
        timeout: 1200
      }
      commit('snackbarShow', data)
      console.log(err.response)
    })
  }
}

export const getters = {
  getMenuItems: state => state.menuItems,
  getTitle: state => state.title,
  getSnackbar: state => state.snackbar,
  getBreakfasts: state => state.breakfasts
}
