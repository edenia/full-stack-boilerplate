import React, { memo } from 'react'

import useStyles from './styles'

const IconMenu: React.FC<{ icon: React.ReactElement | undefined }> = ({ icon }) => {
  const classes = useStyles()

  if (!icon) return <></>

  return <div className={classes.icons}>{icon}</div>
}

export default memo(IconMenu)
