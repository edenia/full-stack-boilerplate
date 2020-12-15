import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import MuiListItem from '@material-ui/core/ListItem'

import { mainConfig } from '../config'

const Wrapper = styled.div`
  padding: ${(props) => props.theme.spacing(1) / 4}px
    ${(props) => props.theme.spacing(4)}px;
  background: ${(props) => props.theme.palette.common.white};
  position: relative;
`

const ListItem = styled(MuiListItem)`
  display: inline-block;
  width: auto;
  padding-left: ${(props) => props.theme.spacing(2)}px;
  padding-right: ${(props) => props.theme.spacing(2)}px;

  &,
  &:hover,
  &:active {
    color: #000;
  }
`

const Footer = () => (
  <Wrapper>
    <Grid container item xs={12}>
      <List>
        {mainConfig.footerLinks.map((link, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={
                <a href={link.src} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              }
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  </Wrapper>
)

export default Footer
