import axios from 'axios'
import Vue from 'vue'

export const state = () => ({
  menuItems: [
    { icon: 'dashboard', title: 'Home', to: '/' },
    { icon: 'add', title: 'Add Breakfast', to: '/breakfast/add' }
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
      // - For 2 Weißwürscht we need 1.5 Pretzels
      // - For 12 Weißwürscht we need 1 Glass of Senf
      // - For 1 Person we need 0.8 Beers
      let breakfastData = []
      console.log(data)
      for (let i in data) {
        if (data[i].registration.length > 0) {
          for (let j in data[i].registration) {
            let quantity = breakfastData[i] ? data[i].registration[j].quantity + breakfastData[i].quantity : data[i].registration[j].quantity
            let pretzels = quantity * 1.5 / 2
            let senf = quantity / 12
            const beer = data[i].registration.length * 0.8
            breakfastData[i] = {
              id: data[i].id,
              date: data[i].date,
              persons: data[i].registration.length,
              quantity: quantity,
              pretzels: pretzels,
              senf: senf.toFixed(2),
              beer: beer
            }
          }
        } else {
          breakfastData[i] = {
            id: data[i].id,
            date: data[i].date,
            persons: 0,
            quantity: 0,
            pretzels: 0,
            senf: 0,
            beer: 0
          }
        }
      }
      console.log(breakfastData)
      Vue.set(state, 'breakfasts', breakfastData)
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
  },
  async registerForBreakfast ({ commit }, data) {
    await axios.post('http://localhost:3333/api/v1/breakfast/attend', data).then(response => {
      const data = {
        show: true,
        color: 'success',
        text: 'Successfully registered for breakfast',
        timeout: 1200
      }
      console.log(response)
      commit('snackbarShow', data)
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
