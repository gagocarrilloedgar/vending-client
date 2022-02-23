import React from 'react'
import { useTranslation } from 'react-i18next'

import UserLayout from 'user/application/Layout/Layout'

const UserDashboard = () => {
  const { t } = useTranslation()

  return (
    <UserLayout>
      <h1>{t('user_dashboard')}</h1>
      <p>{t('user_dashboard_subtitle')}</p>
    </UserLayout>
  )
}

export default UserDashboard
