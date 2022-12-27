import MenuItems from './MenuItems'
import { IconButton, Box, Drawer, AppBar, CssBaseline, Toolbar, Typography, Divider } from '@mui/material'


const drawerWidth = 380

export default function ClippedDrawer () {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="small"
            sx={{ mr: 2 }}
            style={{ backgroundColor: 'white' }}
          >
            <img
              src='/brand.png'
              loading="lazy"
              width={30}
              alt='NaN-Labs'
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Challenge - Martin Tanielian
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className='sidebarMenu'
        sx={{
          width: '100%',
          maxWidth: drawerWidth,
          flexShrink: 0,
          ['& .MuiDrawer-paper']: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <MenuItems />
          <Divider />
        </Box>
      </Drawer>
    </Box>
  )
}