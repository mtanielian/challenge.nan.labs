import { createContext, useEffect, useRef, useState } from "react";
export const ImageContext = createContext({})

export const ImageContextProvider = ({children}) => {
  const [images, setImages] = useState([])
  const [categoryAndAction, setCategoryAndAction] = useState({})
  const [prevImageState, setPrevImageState] = useState({})
  const [options, setOptions] = useState({})
  const [image, setImage] = useState('')
  const [imgOrigin, setImgOrigin] = useState('')
  const [imageProperties, setImageProperties] = useState({})
  const [uploadNewImage, setUploadNewImage] = useState(false)
  
  const historyProps = useRef([])

  const optionSelected = ({param, val}) => {
    if (image === '') return
    setImageProperties( (prev) => { 
      historyProps.current.push({ ...prev, [param] : val}); 
      return { ...prev, [param] : val} 
    })
  } 

  useEffect(() => {
    if(Object.keys(imageProperties).length > 0) {
      const params = Object.keys(imageProperties).map(k => `&${k}=${imageProperties[k]}`).join('')
      setImage(imgOrigin.concat( params ))
    }
  }, [imageProperties, imgOrigin])


  const handleUndo  = () => {
    if (!historyProps || !historyProps.current || historyProps.current.length <= 1 ) return 
    
    historyProps.current.pop()
    const t = historyProps.current[historyProps.current.length -1]
    setImageProperties( prev => t )
  }
  

  return(
    <ImageContext.Provider 
      value={{
        images, setImages,
        categoryAndAction, setCategoryAndAction,
        prevImageState, setPrevImageState,
        options, setOptions,
        image, setImage, optionSelected, 
        imageProperties, setImageProperties,
        handleUndo, historyProps,
        imgOrigin, setImgOrigin,
        uploadNewImage, setUploadNewImage
      }}
    >
      {children}
    </ImageContext.Provider>
  )

}