import { useContext, useState } from "react"
import { Switch } from "@mui/material"
import { ImageContext } from "../../contexts/ImageContext"


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

export default SwitchImgOptions