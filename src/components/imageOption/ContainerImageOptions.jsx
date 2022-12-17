import React, { useContext, useEffect } from 'react'
import { ImageContext } from '../../contexts/ImageContext'
import SelectImgOptions from './SelectImgOptions'
import SliderImgOption from './SliderImgOption'
import { Stack, Typography } from '@mui/material'
import SwitchImgOptions from './SwitchImgOptions'
 
const ContainerImageOptionsWrapper = () => {
  const { options, optionSelected, setOptions } = useContext(ImageContext)
  const { expects, param, short_description, default:valDefault } = options
  
  useEffect(() => {
    return () => {
      setOptions(prev =>{})
    }
  }, [setOptions])
  


  const handleOptionSelected = (value) => {
    optionSelected(param, value)
  }

   console.log(expects[0])
  let component = ''
  if (expects[0].suggested_range) {
    component = <SliderImgOption handleOptionSelected={handleOptionSelected}  /> 
  } else if (expects[0].possible_values) {
    component = <SelectImgOptions handleOptionSelected={handleOptionSelected} />
  } else if (expects[0].type === 'boolean') {
    console.log('deberia entrar una vez')
    component = <SwitchImgOptions handleOptionSelected={handleOptionSelected} />
  }

  return (
    
    <Stack spacing={3} mt={3}>
      <Typography variant='body2' component='div'>
        {short_description}
      </Typography>
      {component}
    </Stack>
    
  )
  

}

const ContainerImageOptions = React.memo(ContainerImageOptionsWrapper)
export default ContainerImageOptions