import React, { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  CardContent,
  CardActions,
  Button
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import EmailFields from 'shared/components/TextFields/EmailField'
import UserRepository from 'user/infrastructure/repository'
import UserService from 'user/domain/service'

import { useSnackbar } from 'shared/components/SnackbarAlert/useSnackbar'
import SnackbarAlert from 'shared/components/SnackbarAlert/SnackbarAlert.container'

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
    <Container maxWidth="sm">
      <Box
        style={{
          textAlign: 'left',
          flexDirection: 'column',
          justifyContent: 'center',
          display: 'flex'
        }}
        minHeight="100vh"
      >
        <CardContent>
          <Typography
            component="h3"
            style={{ fontWeight: 800 }}
            variant="h5"
            gutterBottom
          >
            {t('forgot_password_title')}
          </Typography>
          <Typography>{t('forgot_password_subtitle')}</Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <EmailFields
              setError={setError}
              error={error}
              email={email}
              handleChange={handleChange}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            onClick={() => (!error ? onSubmit() : null)}
          >
            {t('reset_password')}
          </Button>
        </CardActions>
      </Box>
      <SnackbarAlert />
    </Container>
  )
}

export default ForgotPassword
