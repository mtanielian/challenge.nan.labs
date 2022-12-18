import { Box, Button, Stack, TextField } from "@mui/material"
import { useUploadS3 } from "../hooks/useUploadS3";

window.Buffer = window.Buffer || require("buffer").Buffer;

const UploadPhoto = () => {
  const { setFile, loading, error, handleUpload } = useUploadS3()

  if (loading) return <>Uploading photo....</>
  if (error) return <>Error Uploading photo, try in a few moments</>

  return (
    <Box mt={5}>
      <Stack spacing={3}>
        <TextField type="file" onChange={({target}) => setFile(target?.files[0] || {})} fullWidth helperText="Choose a photo or picture to edit" />
        <Button onClick={handleUpload} variant="outlined">Upload Photo</Button>
      </Stack>
    </Box>
  )
}

export default UploadPhoto