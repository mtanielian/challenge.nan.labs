import { useEffect, useContext } from 'react'
import { getImagesImgix } from '../services/imgix.services'
import { ImageContext } from '../contexts/ImageContext'

const useAutoCompleteImages = () => {
  const {
    setOptions, setImage, setImageProperties,
    setImgOrigin, historyProps, images, setImages
  } = useContext(ImageContext)
  
  const loadImages = async () => {
    try {
      const data = await getImagesImgix()
      setImages(data)      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadImages()
  }, [])

  const haldleChangeImage = (name) => {
    const {url} = images.find(i => i.name === name) || images[0]
    setImage(`${url}?w=800&h=600`)
    setImgOrigin(`${url}?w=800&h=600`)
    historyProps.current = []
    setOptions({})
    setImageProperties({})
  }


  return { images, haldleChangeImage }
}

export default useAutoCompleteImages