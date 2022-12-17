import  {useEffect, useState } from 'react'
import { Autocomplete, TextField } from '@mui/material';


const SelectImgOptions = ({ options, handleOptionSelected = () => {} }) => {
  const [value, setValue] = useState(options.default || '');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setValue(options.default)
    setInputValue('')
  }, [options])


  return (
    <Autocomplete
      fullWidth
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
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