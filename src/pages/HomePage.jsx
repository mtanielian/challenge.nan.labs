import { useContext,  useEffect, useState } from "react"
import MainLayout from "../Layouts/MainLaoyut"
import { ImageContext } from "../contexts/ImageContext"
import { getImagesImgix } from "../services/imgix.services"
import { Autocomplete, Grid, Skeleton, TextField } from "@mui/material"
import HomeOptionsButtons from "../components/HomeOptionsButtons"

import "../styles.css";


const HomePage = () => {
  const [images, setImages] = useState([])
  
  const {
    setOptions, image, setImage, setImageProperties,
    setImgOrigin, historyProps 
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
  
  return (
    <MainLayout>
      <Grid container sx={{display:"flex", flexDirection:"column", justifyContent: 'center', alignContent:"center"}}>
        <Grid item xs={12} mb={2}>
          
            
          
          {image === '' 
            ? <Skeleton variant="rectangular" width={800} height={400} />
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
      <HomeOptionsButtons />
    </MainLayout>
  )
}

export default HomePage