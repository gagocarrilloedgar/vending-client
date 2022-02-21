import React, { useState } from 'react'
import ForgotPaswordContainer from './container'

import { useTranslation } from 'react-i18next'
import UserRepository from 'context/user/infrastructure/repository'
import UserService from 'context/user/domain/service'

import { useSnackbar } from 'shared/components/organisms/SnackbarAlert/useSnackbar'

const ForgotPassword = () => {
  const { t } = useTranslation(['common', 'error', 'sucess'])
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const userRepository = UserRepository()
  const userSerivce = UserService(userRepository)

  const { handleSnackbarChange } = useSnackbar()

  const onSubmit = async () => {
    if (error && email === '') return setError(true)
    const resp = await userSerivce.forgotPassword(email)
    if (resp)
      return handleSnackbarChange(
        t('forgot_password_success', { ns: 'sucess' }),
        'success'
      )
    handleSnackbarChange(t('forgot_password_error', { ns: 'error' }), 'error')
  }

  const handleChange = (e) => setEmail(e.target.value)

  return (
    <ForgotPaswordContainer
      email={email}
      error={error}
      setError={setError}
      onSubmit={onSubmit}
      handleChange={handleChange}
    />
  )
}

export default ForgotPassword
