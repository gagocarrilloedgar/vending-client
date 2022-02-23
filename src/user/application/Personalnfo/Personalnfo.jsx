/* eslint-disable multiline-ternary */
import React from 'react'

import NameField from 'shared/components/TextFields/NameField'
import PropTypes from 'prop-types'
import DataFromLayout from 'shared/components/DatFormLayout/DataFormLayout'

const PersonalInfo = ({
  personalInfo,
  personalData,
  error,
  handleFormData,
  handleError
}) => {
  const UserInputTypes = {
    text: ({ label, validate }) => (
      <NameField
        labelError={'name_error'}
        error={error[label]}
        setError={handleError}
        label={label}
        value={personalData[label]}
        handleChange={handleFormData}
        validate={validate}
      />
    )
  }

  return (
    <DataFromLayout
      componentData={UserInputTypes}
      mappingData={personalInfo}
      title="personal_info"
    />
  )
}

PersonalInfo.propTypes = {
  handleFormData: PropTypes.func.isRequired,
  personalData: PropTypes.object.isRequired,
  personalInfo: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  handleError: PropTypes.func.isRequired
}

export default PersonalInfo
