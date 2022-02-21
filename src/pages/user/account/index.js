import React, { createRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import MessageAlert from 'shared/components/organisms/MessageAlert/MessageAlert'
import PersonalInfo from 'context/user/application/Personalnfo/Personalnfo'
import UserLayout from 'context/user/application/Layout/Layout'
import SnackbarAlert from 'shared/components/organisms/SnackbarAlert/SnackbarAlert.container'
import { useSnackbar } from 'shared/components/organisms/SnackbarAlert/useSnackbar'
import UserRepository from 'context/user/infrastructure/repository'
import UserService from 'context/user/domain/service'

const InitState = {
  first_name: '',
  last_name: '',
  email: '',
  deposit: 0
}

const UserAccount = () => {
  const { t } = useTranslation(['user', 'error', 'success'])

  const { handleSnackbarChange } = useSnackbar()
  const userRepository = UserRepository()
  const { update, user } = UserService(userRepository)

  const titleRef = createRef()
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ ...InitState })

  useEffect(() => {
    if (formData === InitState) setOpen(false)
  }, [formData])

  useEffect(() => {
    setFormData(user)
  }, [user])

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
    setOpen(true)
  }

  const cancelChanges = () => {
    titleRef.current.focus()
    setFormData(InitState)
    setOpen(false)
  }

  const saveChange = () => {
    const data = new FormData()
    Object.keys(formData).map((key) => data.append(key, formData[key]))
    update(data)
      .then(() => {
        handleSnackbarChange(t('user_update_success'), 'success')
        setOpen(false)
      })
      .catch(() => handleSnackbarChange(t('user_update_error'), 'error'))
  }

  return (
    <UserLayout>
      <h1 ref={titleRef}>{t('settings')}</h1>
      <p>{t('settings_subtitle')}</p>
      <MessageAlert
        open={open}
        title={t('unsaved_changes')}
        variant="outlined"
        save={saveChange}
        cancel={cancelChanges}
      />
      <PersonalInfo personalData={formData} handleFormData={handleChange} />
      <SnackbarAlert />
    </UserLayout>
  )
}

export default UserAccount
