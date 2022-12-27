import { useContext } from 'react'
import { ImageContext } from '../contexts/ImageContext'
import MainLayout from '../Layouts/MainLaoyut'

import UploadPhoto from '../components/UploadPhoto'
import HomeOptionsButtons from '../components/HomeOptionsButtons'
import AutoCompleteImages from '../components/AutoCompleteImages'
import ImageEdition from '../components/ImageEdition'


import { Grid } from '@mui/material'

const HomePage = () => {
  const { uploadNewImage } = useContext(ImageContext)

  return (
    <MainLayout>
      <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
        <Grid style={{ width: '70%' }} item xs={12} mb={2}>
          <ImageEdition />
        </Grid>
        <Grid item xs={12}>
          <AutoCompleteImages />
          {uploadNewImage && <UploadPhoto />}
        </Grid>
      </Grid>
      <HomeOptionsButtons />
    </MainLayout>
  )
}

export default HomePage