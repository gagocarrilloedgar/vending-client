import React, { useMemo, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import PropTypes from 'prop-types'
import Copyright from 'shared/components/atoms/Copyright/Copyright'

import { Link } from '@mui/material'
import { useTranslation } from 'react-i18next'
import PasswordField from 'shared/components/atoms/Password/Password'
import EmailFields from 'shared/components/atoms/EmailField/EmailField'
const Login = ({ title, forgotPasswordLink, registerLink, handleSubmit, actionText }) => {
  const { t } = useTranslation()
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const sendCondition = useMemo(
    () => !emailError && !passwordError && formData.email !== '',
    [emailError, passwordError, formData.email]
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{ marginBottom: '30px' }} component="h1" variant="h5">
          {title}
        </Typography>
        <Box onSubmit={() => handleSubmit(sendCondition, formData)} component="form" sx={{ mt: 1 }}>
          <EmailFields
            setError={setEmailError}
            error={emailError}
            email={formData.email}
            handleChange={handleChange}
          />
          <PasswordField
            error={passwordError}
            password={formData.password}
            setError={setPasswordError}
            handleChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {actionText}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href={forgotPasswordLink}>
                <Typography variant="body2">{t('forgot_password')}</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href={registerLink}>
                <Typography variant="body2">{t('not_a_user')}</Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  registerLink: PropTypes.string.isRequired,
  forgotPasswordLink: PropTypes.string.isRequired,
  actionText: PropTypes.string
}

Login.defaultProps = {
  title: 'Sign In',
  actionText: 'Login'
}

export default Login
