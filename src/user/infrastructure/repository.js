import api from './api'
import { useDispatch, useSelector } from 'react-redux'
import { update, updatePassword } from './userSlice'

const UserRepository = () => {
  const dispatch = useDispatch()
  const userStore = useSelector((state) => state.users.user)
  const id = userStore.id || ''

  const login = async (user) => {
    const resp = await api.login(user)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(update(resp.data))
    return true
  }

  const register = async (user) => {
    const resp = await api.register(user)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(update(resp.data))
    return true
  }

  const getById = async () => {
    const resp = await api.getById(id)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(update(resp.data))
    return true
  }

  const updateById = async (user) => {
    const resp = await api.update(id, user)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(update(resp.data))
    return true
  }

  const forgotPassword = async (email) => {
    const resp = await api.forgotPassword(email)
    if (resp.status !== 200 || resp.status !== 201) return false
    return true
  }

  const resetPassword = async (token, password) => {
    const resp = await api.resetPassword(token, password)
    if (resp.status !== 200 || resp.status !== 201) return false
    dispatch(updatePassword(resp.data))
    return true
  }

  return {
    user: userStore,
    login,
    register,
    getById,
    updateById,
    forgotPassword,
    resetPassword
  }
}

export default UserRepository
