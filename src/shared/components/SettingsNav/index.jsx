import React from 'react'

import SwitchLang from '../SwitchLang/SwitchLang'
import SwitchTheme from '../SwitchTheme/SwitchTheme'
import { useStyles } from './SettingsNav.styles'

const SettingsNav = () => {
  const { root } = useStyles()

  return (
    <div className={root}>
      <SwitchLang />
      <SwitchTheme />
    </div>
  )
}

export default SettingsNav
