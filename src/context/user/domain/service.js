const UserService = (repository) => {
  const authenticate = async (user) => repository.authenticate(user)

  const login = (user) => repository.login(user)

  const register = async (user) => repository.register(user)

  const getById = async () => repository.getById()

  const update = async (user) => repository.update(user)

  const forgotPassword = async (email) => repository.forgotPassword(email)

  const resetPassword = async (token, password) =>
    repository.resetPassword(token, password)

  return {
    user: repository.user,
    authenticate,
    login,
    register,
    getById,
    update,
    forgotPassword,
    resetPassword
  }
}

export default UserService
