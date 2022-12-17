import  {useContext, useState } from 'react'
import { ImageContext } from '../../contexts/ImageContext';
import { Autocomplete, TextField } from '@mui/material';


const SelectImgOptions = ({ options, handleOptionSelected = () => {} }) => {
  const [inputValue, setInputValue] = useState('');
  const {imageProperties} = useContext(ImageContext)
  let initValue = options.initValue || ''
  if (imageProperties[options.param]) { 
    initValue = imageProperties[options.param]
  }

  return (
    <Autocomplete
      fullWidth
      value={initValue}
      getOptionLabel={(option) => String(option) || ''}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        handleOptionSelected(newInputValue)
      }}
      id="controllable-states-demo"
      options={options.expects[0].possible_values}
      renderInput={(params) => <TextField {...params}  fullWidth />}
    />
    
  )
}

export default SelectImgOptions