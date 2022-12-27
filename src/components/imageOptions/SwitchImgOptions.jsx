import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Switch } from '@mui/material'
import { ImageContext } from '../../contexts/ImageContext'


const SwitchImgOptions = ({options, handleOptionSelected = () => {}}) => {
  const {imageProperties} = useContext(ImageContext)
  let initValue = options.initValue
  if (imageProperties[options.param]) { 
    initValue = imageProperties[options.param]
  }
  const [checked, setCheked ] = useState(initValue)

  const handleClick = (e) => {
    setCheked(prev => !prev)
    handleOptionSelected(e.target.checked)
  }

  return (
    <Switch  defaultChecked={checked} onClick={(e) => handleClick(e)} />
  )
}

SwitchImgOptions.propTypes = {
  options: PropTypes.object.isRequired,
  handleOptionSelected: PropTypes.func.isRequired
}


export default SwitchImgOptions