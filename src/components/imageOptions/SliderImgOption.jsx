import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {  Slider } from '@mui/material'
import { ImageContext } from '../../contexts/ImageContext'


const SliderImgOption = ({ options, handleOptionSelected = () => {} }) => {
  const {imageProperties} = useContext(ImageContext)
  let initValue = options.initValue
  if (imageProperties[options.param]) { 
    initValue = imageProperties[options.param]
  }
  const [val, setVal] = useState(initValue)

  useEffect(() => {
    initValue = imageProperties[options.param]
   
    setVal(initValue)  

  }, [imageProperties[options.param]])
  
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

SliderImgOption.propTypes = {
  options: PropTypes.object.isRequired,
  handleOptionSelected: PropTypes.func.isRequired
}


export default SliderImgOption