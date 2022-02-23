const reggexutil = {
  password: '^(?=.*[A-Z])(?=.*[!@#$&*.])(?=.*[0-9])(?=.*[a-z]).{8,}$',
  email: '[A-Za-z0-9-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  first_name: '^[a-zA-Zs]+$',
  last_name: '^[a-zA-Z].*[s.]*$',
  number: '^[0-9]+$'
}

export default reggexutil
