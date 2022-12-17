import { useContext, useState } from 'react'
import {  Slider } from '@mui/material'
import { ImageContext } from '../../contexts/ImageContext'


const SliderImgOption = ({ options, handleOptionSelected = () => {} }) => {
  const {imageProperties} = useContext(ImageContext)
  let initValue = options.initValue
  if (imageProperties[options.param]) { 
    initValue = imageProperties[options.param]
  }
  
  const [val, setVal] = useState(initValue)
  

  return (
    <Slider
      value={val}
      defaultValue={options.initValue}
      aria-label="Default" 
      valueLabelDisplay="auto" 
      min={options.expects[0].suggested_range.min}
      max={options.expects[0].suggested_range.max}
      onChange={(event, newValue) => {setVal(newValue); handleOptionSelected(newValue)}}
    />
  )
}

export default SliderImgOption