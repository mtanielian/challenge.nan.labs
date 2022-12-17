import {useState, useContext} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Collapse, Fade, IconButton, Menu, MenuItem, Switch } from '@mui/material';
import { Preview, StarBorder } from '@mui/icons-material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import FlipIcon from '@mui/icons-material/Flip';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';
import ExposureOutlinedIcon from '@mui/icons-material/ExposureOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CurrencyYuanIcon from '@mui/icons-material/CurrencyYuan';
import HighlightIcon from '@mui/icons-material/Highlight';
import PaletteIcon from '@mui/icons-material/Palette';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import GradientIcon from '@mui/icons-material/Gradient';
import BorderClearIcon from '@mui/icons-material/BorderClear';
import DeblurIcon from '@mui/icons-material/Deblur';
import MasksIcon from '@mui/icons-material/Masks';
import SpokeOutlinedIcon from '@mui/icons-material/SpokeOutlined';
import VibrationOutlinedIcon from '@mui/icons-material/VibrationOutlined';
import { ImageContext } from '../contexts/ImageContext';

import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import GetConfByFunction from './getConfByFunction/GetConfByFunction';

const drawerWidth = 600;

const menuOpts = [
  {
    text: 'Rotation', 
    icon: <ScreenRotationAltIcon />,
    subMenu: [
      {subText: 'Flip', subIcon: <FlipCameraAndroidIcon /> } , 
      {subText: 'Orientation', subIcon: <FlipIcon />}, 
      {subText: 'Rotation', subIcon: <ThreeDRotationIcon />}
    ] 
  },
  {
    text:'Adjustment', 
    icon: <SettingsOutlinedIcon />,
    subMenu: [
      { subText: 'Brightness', subIcon: <LightModeOutlinedIcon /> },
      { subText: 'Contrast', subIcon: <ContrastOutlinedIcon /> },
      { subText: 'Exposure', subIcon: <ExposureOutlinedIcon /> },
      { subText: 'Gamma', subIcon: < CurrencyYuanIcon /> },
      { subText: 'Highlight', subIcon: <HighlightIcon /> },
      { subText: 'Hue Shift', subIcon:< PaletteIcon /> },
      { subText: 'Invert', subIcon: <InvertColorsIcon /> },
      { subText: 'Saturation', subIcon: <GradientIcon /> },
      { subText: 'Shadow', subIcon: <BorderClearIcon /> },
      { subText: 'Sharpen', subIcon: <DeblurIcon /> },
      { subText: 'Unsharp Mask', subIcon:< MasksIcon /> },
      { subText: 'Unsharp Mask Radius', subIcon: <SpokeOutlinedIcon /> },
      { subText: 'Vibrance', subIcon: <VibrationOutlinedIcon /> }
    ]
  }
]
   


export default function ClippedDrawer() {
  const [magenaMenu, setStateMenu] = useState({
    Rotation: false, Adjustment: false
  })

  const handleMenu = (menu) => {
    setStateMenu((prev) => ({...prev, [menu]: !prev[menu] }))
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
          <IconButton
            size="small"
            sx={{ mr: 2 }}
            style={{backgroundColor:'white'}}
          >
           <img
              src='/brand.png'
              loading="lazy"
              width={30}
              
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Challenge - Martin Tanielian
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            {menuOpts.map(({text, icon, subMenu}, index) => (
                 <List
                 key={text}
                 sx={{ width: '100%', width: 560, bgcolor: 'background.paper' }}
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

                 {subMenu.map(({ subText, subIcon }) => (
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
                  </List>))} 

                 </Collapse>
               </List>
            ))}
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}