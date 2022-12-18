import { useContext, useState } from "react";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import { Box, Button, Stack, TextField } from "@mui/material"
import { ImageContext } from "../contexts/ImageContext";

window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET
const REGION = process.env.REACT_APP_REGION
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY
const IMGIX_URI = process.env.REACT_APP_IMGIX_URI

const UploadPhoto = () => {
  const [file, setFile] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const {setImage, setImgOrigin, setUploadNewImage} = useContext(ImageContext)


  const handleUpload = () => {
    if (!file.name) return 
    setLoading(true)

    const target = { Bucket:S3_BUCKET, Key:file.name, Body:file };
    const creds = { accessKeyId: ACCESS_KEY, secretAccessKey:SECRET_ACCESS_KEY };
    try {
      const parallelUploads3 = new Upload({
        client: new S3Client({region:REGION,credentials:creds}),
        leavePartsOnError: false, 
        params: target,
      });

      parallelUploads3.on("httpUploadProgress", (result) => {
        const { Key } = result
        setImage(`${IMGIX_URI}${Key}?w=800&h=600`)
        setImgOrigin(`${IMGIX_URI}${Key}?w=800&h=600`)
        setUploadNewImage(prev => false)
        setLoading(false)
      });

      parallelUploads3.done();
    } catch (e) {
      console.log(e);
      setError(true)
      setLoading(false)
    }
  }

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