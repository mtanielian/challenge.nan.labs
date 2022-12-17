import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import GetConfByFunction from './getConfByFunction/GetConfByFunction'

const MenuSubItems = ({subMenu, text}) => 
  subMenu.map(({ subText, subIcon }) => (
  <List
    sx={{ width: '100%', bgcolor: 'background.paper'}}
    key={text+subText}
  >
    <ListItem>
      <ListItemIcon>
        {subIcon}
      </ListItemIcon>
      <ListItemText primary={subText} />
      <Box width='60%'>
        <GetConfByFunction category={text} action={subText} />
      </Box>
    </ListItem>
  </List>))

export default MenuSubItems