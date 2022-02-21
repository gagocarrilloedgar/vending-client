import axios from 'axios'

const baseRoute = process.env.REACT_APP_API_URL + 'user/'

axios.create({
  baseURL: baseRoute,
  headers: {
    'Content-Type': 'application/json'
  }
})

const routes = {
  login: 'login/',
  register: 'register/',
  forgotPassword: 'forgot-password/',
  resetPassword: 'reset-password/'
}

const api = {
  getById: async (id) => axios.get(baseRoute + id),
  update: async (id, user) => axios.patch(baseRoute + id, user),
  login: async (user) => axios.post(routes.login, user),
  register: async (user) => axios.post(routes.register, user),
  forgotPassword: async (email) => axios.post(routes.forgotPassword, { email }),
  resetPasword: async (token, password) =>
    axios.post(routes.resetPassword, { token, password })
}

export default api
