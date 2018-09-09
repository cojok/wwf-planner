import axios from 'axios'

export const state = () => ({
  loading: false,
  menuItems: [
    { icon: 'dashboard', title: 'Home', to: '/' },
    { icon: 'add', title: 'Add Breakfast', to: '/breakfast/add' },
    { icon: 'email', title: 'Invite to Breakfast', to: '/breakfast/invite' }
  ],
  title: 'Weißwurstfrühstück Planner',
  error: null
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  saveBreakfast: (state) => ({ date, time }) => {
    state.loading = true
    console.log('loading')
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3333/api/v1/breakfast', {
        date, time
      }).then(response => {
        state.loading = false
        resolve(response.data)
      }).catch(err => {
        state.error = err
        reject(err.response)
      })
    })
  }
}

export const getters = {
  getMenuItems: state => state.menuItems,
  getTitle: state => state.title,
  getLoading: state => state.loading
}
