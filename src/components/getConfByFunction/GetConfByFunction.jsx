import React, { useContext } from 'react'
import { ImageContext } from '../../contexts/ImageContext'
import { getDefFunction } from '../../utils/getDefFunction'
import SelectImgOptions from '../imageOption/SelectImgOptions'
import SliderImgOption from '../imageOption/SliderImgOption'
import SwitchImgOptions from '../imageOption/SwitchImgOptions'

const GetConfByFunction = ({category, action}) => {
  const {optionSelected} = useContext(ImageContext)
  const options = getDefFunction({ category, action })
  const {expects, initValue, param, short_description} = options
  
  let Component = ''
  
  const handleSetOperation = (val) => {
    console.log(val)
    optionSelected({param, val})
  }
  
  if (expects[0].suggested_range) {
   return <SliderImgOption options={options} handleOptionSelected={handleSetOperation}  /> 
  } else if (expects[0].possible_values) {
    return <SelectImgOptions  options={options} handleOptionSelected={handleSetOperation} />
  } else if (expects[0].type === 'boolean') {
    return <SwitchImgOptions value={initValue} handleOptionSelected={handleSetOperation} />
  }
}

export default GetConfByFunction