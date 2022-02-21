import React, { useState } from 'react'

import Proptypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import UserRepository from 'context/user/infrastructure/repository'
import UserService from 'context/user/domain/service'

import { useSnackbar } from 'shared/components/organisms/SnackbarAlert/useSnackbar'
import ResetContainer from './container'

const ResetPassword = () => {
  const { t } = useTranslation(['common', 'errors', 'sucess'])
  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: ''
  })

  const [passwordError, setPasswordError] = useState(false)
  const [passwordConfirmError, setPasswordConfirmError] = useState(false)

  const userRepository = UserRepository()
  const userSerivce = UserService(userRepository)

  const { handleSnackbarChange } = useSnackbar()

  const handleChange = (e) => {
    const { name, value } = e.target
    setPasswords({
      ...passwords,
      [name]: value
    })
  }

  const onSubmit = async () => {
    if (passwordConfirmError && passwords.password === '') {
      setPasswordError(true)
      return setPasswordConfirmError(true)
    }
    const resp = await userSerivce.resetPassword(passwords.password)

    if (resp)
      return handleSnackbarChange(
        t('reset_password_success', { ns: 'sucess' }),
        'success'
      )
    handleSnackbarChange(t('reset_password_error', { ns: 'error' }), 'error')
  }

  return (
    <ResetContainer
      passwordConfirmError={passwordConfirmError}
      passwords={passwords}
      passwordError={passwordError}
      setPasswords={setPasswords}
      setPasswordError={setPasswordError}
      setPasswordConfirmError={setPasswordConfirmError}
      handleChange={handleChange}
      onSubmit={onSubmit}
    />
  )
}

ResetPassword.propTypes = {
  title: Proptypes.string
}

ResetPassword.defaultProps = {
  title: 'Forgot Password'
}

export default ResetPassword
