import React, { memo } from 'react'
import { List, ListItemText, ListItem } from '@mui/material'

import useStyles from './styles'

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerRoot}>
      <List className={classes.list}>
        {[
          { src: '#', text: 'Link 1' },
          { src: '#', text: 'Link 2' },
          { src: '#', text: 'Link 3' },
        ].map((link, index) => (
          <ListItem className={classes.listItem} key={index}>
            <ListItemText
              primary={
                <a href={link.src} target='_blank' rel='noopener noreferrer'>
                  {link.text}
                </a>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default memo(Footer)
