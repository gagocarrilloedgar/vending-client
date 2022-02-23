import React from 'react'
import Welcome from 'pages'
import Verification from 'pages/verification'
import { ForgotPassword, ResetPassword } from 'pages/password'
import { UserAccount, UserLogin, UserRegister, UserDashboard } from 'pages/user'

import { navigation } from 'shared/lib/constants'

const {
  root,
  verification,
  password,
  resetPassword,
  forgotPassword,
  user,
  userLogin,
  userRegister,
  userAccount
} = navigation

const routes = [
  {
    path: root,
    children: [
      { index: true, element: <Welcome /> },
      { path: verification, element: <Verification /> },
      {
        path: password,
        children: [
          { path: forgotPassword, element: <ForgotPassword /> },
          { path: resetPassword, element: <ResetPassword /> }
        ]
      },
      {
        path: user,
        children: [
          { index: true, element: <UserDashboard /> },
          { path: userLogin, element: <UserLogin /> },
          { path: userRegister, element: <UserRegister /> },
          { path: userAccount, element: <UserAccount /> }
        ]
      }
    ]
  }
]

export default routes
