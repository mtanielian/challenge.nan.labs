import { useContext } from 'react'
import { ImageContext } from '../contexts/ImageContext'
import { Skeleton } from '@mui/material'

const ImageEdition = () => {
  const { image } = useContext(ImageContext)

  if (!image) return <Skeleton variant="rectangular" width={800} height={400} />

  return (
    <img src={image} alt='Imagen para tunearla' /> 
  )
}


export default ImageEdition