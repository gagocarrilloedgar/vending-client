import React, { useMemo, useState } from 'react'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
  Link,
  Typography,
  Container,
  Box,
  Avatar,
  Button,
  Grid
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import Copyright from 'shared/components/Copyright/Copyright'
import PasswordField from 'shared/components/TextFields/Password'
import EmailFields from 'shared/components/TextFields/EmailField'

const Register = ({ handleSubmit, title, actionText, loginLink }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [passwordConfirmError, setPasswordConfirmError] = useState(false)

  const sendCondition = useMemo(
    () =>
      !emailError &&
      !passwordError &&
      !passwordConfirmError &&
      formData.email !== '',
    [emailError, passwordError, passwordConfirmError, formData.email]
  )

  const { t } = useTranslation()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography gutterBottom component="h1" variant="h5">
          {title}
        </Typography>
        <Box
          component="form"
          onSubmit={() => handleSubmit(sendCondition)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <EmailFields
                setError={setEmailError}
                error={emailError}
                email={formData.email}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                error={passwordError}
                password={formData.password}
                setError={setPasswordError}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                error={passwordConfirmError}
                passwordConfirm={formData.confirmPassword}
                password={formData.password}
                setError={setPasswordConfirmError}
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {actionText}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href={loginLink} variant="body2">
                {t('already_a_user')}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}

Register.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  loginLink: PropTypes.string.isRequired,
  actionText: PropTypes.string
}

Register.defaultProps = {
  title: 'Create your account',
  actionText: 'Sign Up'
}

export default Register
