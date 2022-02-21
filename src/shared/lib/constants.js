const USER = 'user'
const SELLER = 'seller'
const VERIFICATION = 'verification'
const PASSWORD = 'password'
const FORGOT = 'forgot'
const RESET = 'reset'
const ACCOUNT = 'account'
const LOGIN = 'login'
const REGISTER = 'register'

export const navigation = {
  root: '/',
  verification: `/${VERIFICATION}`,
  password: `/${PASSWORD}`,
  forgotPassword: `/${PASSWORD}/${FORGOT}`,
  resetPassword: `/${PASSWORD}/${RESET}`,
  user: `/${USER}`,
  userLogin: `/${USER}/${LOGIN}`,
  userRegister: `/${USER}/${REGISTER}`,
  seller: `/${SELLER}`,
  sellerRegister: `/${SELLER}/${REGISTER}`,
  sellerLogin: `/${SELLER}/${LOGIN}`,
  sellerSettings: `/${SELLER}/${ACCOUNT}`
}
