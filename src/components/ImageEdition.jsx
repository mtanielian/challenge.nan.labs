import { useContext } from 'react'
import { ImageContext } from '../contexts/ImageContext'
import { Skeleton } from '@mui/material'

const ImageEdition = () => {
  const { image } = useContext(ImageContext)

  if (!image) return <Skeleton id='loadingImage' variant="rectangular" height={400} />

  return (
    <img style={{ width: '100%' }} src={image} alt='Imagen para tunearla' />
  )
}


export default ImageEdition