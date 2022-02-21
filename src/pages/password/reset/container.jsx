import React from 'react'
import {
  Container,
  Box,
  Typography,
  CardContent,
  CardActions,
  Button
} from '@mui/material'
import Proptypes from 'prop-types'
import PasswordField from 'shared/components/atoms/Password/Password'
import SnackbarAlert from 'shared/components/organisms/SnackbarAlert/SnackbarAlert.container'
import { useTranslation } from 'react-i18next'

const ResetPassword = ({
  passwords,
  passwordError,
  setPasswordError,
  handleChange,
  passwordConfirmError,
  setPasswordConfirmError,
  onSubmit
}) => {
  const { t } = useTranslation(['common', 'error', 'sucess'])
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
            {t('reset_password_title')}
          </Typography>
          <Typography>{t('reset_password_subtitle')}</Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <PasswordField
              error={passwordError}
              password={passwords.password}
              setError={setPasswordError}
              handleChange={handleChange}
            />
            <PasswordField
              error={passwordConfirmError}
              passwordConfirm={passwords.confirmPassword}
              password={passwords.password}
              setError={setPasswordConfirmError}
              handleChange={handleChange}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="outlined" onClick={onSubmit}>
            {t('reset_password_button')}
          </Button>
        </CardActions>
      </Box>
      <SnackbarAlert />
    </Container>
  )
}

ResetPassword.propTypes = {
  passwords: Proptypes.object.isRequired,
  passwordError: Proptypes.bool.isRequired,
  setPasswordError: Proptypes.func.isRequired,
  passwordConfirmError: Proptypes.bool.isRequired,
  setPasswordConfirmError: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired
}

export default ResetPassword
