import { useContext,  useEffect, useState } from "react"
import MainLayout from "../Layouts/MainLaoyut"
import { ImageContext } from "../contexts/ImageContext"
import { getImagesImgix } from "../services/imgix.services"
import { Autocomplete, Button, Grid, Skeleton, TextField } from "@mui/material"
import { saveAs } from 'file-saver'

import "../styles.css";



const HomePage = () => {
  const [images, setImages] = useState([])
  const [imgOrigin, setImgOrigin] = useState()
  
  const {
    setOptions,options,
    image, setImage, imageProperties, setImageProperties
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

  useEffect(() => {
    if(Object.keys(imageProperties).length > 0) {
      const parmas = Object.keys(imageProperties).map(k => `&${k}=${imageProperties[k]}`).join('')
      setImage(imgOrigin.concat(parmas))
    }

  }, [imageProperties, imgOrigin, setImage])


  const haldleChangeImage = (name) => {
    const {url} = images.find(i => i.name === name) || images[0]
    setImage(`${url}?w=800&h=600`)
    setImgOrigin(`${url}?w=800&h=600`)
    setOptions({})
  }
  

  const downloadImage = () => {
    saveAs( image, 'image.jpg') 
  }

  const resetImage = () => {
    setImage(imgOrigin)
    setOptions({})
    setImageProperties({})
  }

  
  return (
    <MainLayout>
      <Grid container sx={{display:"flex", flexDirection:"column", justifyContent: 'center', alignContent:"center"}}>
        <Grid item xs={12} mb={2}>
          
            
          
          {image === '' 
            ? <Skeleton variant="rectangular" width={600} height={300} />
            : <img src={image} alt='Imagen para tunearla' />
            
            
            /*<ProgressiveImage src={{image}}>
              {(src, loading) =>  (
                  <img src={src} alt='Imagen para tunearla'
                    className={`image${loading ? " loading" : " loaded"}`}
                  />
              )}
            </ProgressiveImage>
              */  
          }
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            sx={{width:'100%'}} 
            disablePortal
            id="combo-box-demo"
            onInputChange={(event, newInputValue) => {
              haldleChangeImage(newInputValue);
            }}
            options={images.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} name="Images" />}
          />
        </Grid>
      </Grid>
      <Button onClick={downloadImage}>Download</Button>
      <Button onClick={resetImage}>Reset Image</Button>
    </MainLayout>
  )
}

export default HomePage