import axios from 'axios'

const userRoute = process.env.REACT_APP_API_URL + 'user/'
const authRoute = process.env.REACT_APP_API_URL + 'auth/'

const routes = {
  login: authRoute + 'login',
  register: authRoute + 'register'
}

const api = {
  getById: async (id) => axios.get(routes.login + id),
  update: async (id, user) => axios.patch(userRoute + id, user),
  delete: async (id) => axios.delete(userRoute + id),
  login: async (user) => axios.post(routes.login, user),
  register: async (user) => {
    console.log(user)
    axios.post(routes.register, user)
  }
}

export default api
