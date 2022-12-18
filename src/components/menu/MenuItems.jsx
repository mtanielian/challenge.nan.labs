import { useState } from 'react';
import { menuOpts } from '../../utils/defMenuItems'
import MenuSubItems from './MenuSubItems'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const MenuItems = () => {
  const [magenaMenu, setStateMenu] = useState({
    Rotation: false, Adjustment: false
  })

  const handleMenu = (menu) => {
    setStateMenu((prev) => ({...prev, [menu]: !prev[menu] }))
  }

  return (
    menuOpts.map(({text, icon, subMenu}, index) => (
      <List
          key={text}
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={()=> handleMenu(text)}>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary={text} style={{color:'blue', fontWeight: 'bold', fontSize:'20px'}} />
            {magenaMenu[text] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={magenaMenu[text]} timeout="auto" unmountOnExit>
            <MenuSubItems subMenu={subMenu} text={text} />
          </Collapse>
        </List>
    ))
  )
}


export default MenuItems