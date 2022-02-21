import React from 'react'
import {
  Container,
  Box,
  Typography,
  CardContent,
  CardActions,
  Button
} from '@mui/material'
import EmailFields from 'shared/components/atoms/EmailField/EmailField'
import SnackbarAlert from 'shared/components/organisms/SnackbarAlert/SnackbarAlert.container'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const ForgotPassword = ({ email, error, handleChange, setError, onSubmit }) => {
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

ForgotPassword.propTypes = {
  email: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ForgotPassword
