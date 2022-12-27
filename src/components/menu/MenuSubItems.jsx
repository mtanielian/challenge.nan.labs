import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import GetConfByFunction from '../imageOptions/MenuImageOptions'

const MenuSubItems = ({ subMenu, text }) =>
  subMenu.map(({ subText, subIcon }) => (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      key={text + subText}
    >
      <ListItem style={{ flexWrap: 'wrap' }}>
        <ListItemIcon>
          {subIcon}
        </ListItemIcon>
        <ListItemText primary={subText} />
        <Box width='100%'>
          <GetConfByFunction category={text} action={subText} />
        </Box>
      </ListItem>
    </List>))

export default MenuSubItems