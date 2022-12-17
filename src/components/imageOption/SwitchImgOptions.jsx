import { useState } from "react"
import { Switch } from "@mui/material"


const SwitchImgOptions = ({value, handleOptionSelected = () => {}}) => {
  const [checked, setCheked ] = useState(value)

  const handleClick = (e) => {
    setCheked(prev => !prev)
    handleOptionSelected(e.target.checked)
  }

  return (
    <Switch  defaultChecked={checked} onClick={(e) => handleClick(e)} />
  )
}

export default SwitchImgOptions