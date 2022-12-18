import { useContext } from 'react'
import PropTypes from 'prop-types'
import { ImageContext } from '../../contexts/ImageContext'
import { getDefFunction } from '../../utils/getDefFunction'
import SelectImgOptions from './SelectImgOptions'
import SliderImgOption from './SliderImgOption'
import SwitchImgOptions from './SwitchImgOptions'

const GetConfByFunction = ({category, action}) => {
  const {optionSelected} = useContext(ImageContext)
  const options = getDefFunction({ category, action })
  const {expects, param } = options
  
  const handleSetOperation = (val) => {
    optionSelected({param, val})
  }
  
  if (expects[0].suggested_range) {
   return <SliderImgOption options={options} handleOptionSelected={handleSetOperation}  /> 
  } else if (expects[0].possible_values) {
    return <SelectImgOptions  options={options} handleOptionSelected={handleSetOperation} />
  } else if (expects[0].type === 'boolean') {
    return <SwitchImgOptions options={options} handleOptionSelected={handleSetOperation} />
  }
}

GetConfByFunction.propTypes = {
  category: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
}

export default GetConfByFunction