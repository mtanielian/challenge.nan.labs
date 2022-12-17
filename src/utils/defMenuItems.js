import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
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

export const menuOpts = [
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
   