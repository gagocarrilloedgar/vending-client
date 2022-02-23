/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import PersonInfoView from './Personalnfo.js'
import PropTypes from 'prop-types'

const personalInfo = [
  { type: 'text', label: 'first_name' },
  { type: 'text', label: 'last_name' },
  { type: 'text', label: 'email' },
  { type: 'text', label: 'deposit', validate: false }
]

const PersonalInfo = ({ handleFormData, personalData }) => {
  const [error, setError] = useState({
    first_name: false,
    last_name: false,
    phone_number: false
  })

  const handleError = (name, value) => {
    setError({ ...error, [name]: value })
  }

  return (
    <PersonInfoView
      personalInfo={personalInfo}
      personalData={personalData}
      error={error}
      handleFormData={handleFormData}
      handleError={handleError}
    />
  )
}

PersonalInfo.propTypes = {
  handleFormData: PropTypes.func.isRequired,
  personalData: PropTypes.object.isRequired
}

export default PersonalInfo
