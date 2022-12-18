import { Autocomplete, TextField } from "@mui/material"
import useAutoCompleteImages from "../hooks/useAutoCompleteImages";

const AutoCompleteImages = () => {
  const { haldleChangeImage, images } = useAutoCompleteImages()

  return (
    <Autocomplete
      sx={{width:'100%'}} 
      disablePortal
      id="combo-box-demo"
      onInputChange={(event, newInputValue) => {
        haldleChangeImage(newInputValue);
      }}
      options={images.map((option) => option.name)}
      renderInput={(params) => <TextField {...params} name="Images" label='images' />}
    />
  )
}

export default AutoCompleteImages