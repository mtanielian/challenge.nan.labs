import { createContext, useState } from "react";
export const ImageContext = createContext({})

export const ImageContextProvider = ({children}) => {
  const [categoryAndAction, setCategoryAndAction] = useState({})
  const [prevImageState, setPrevImageState] = useState({})
  const [options, setOptions] = useState({})
  const [image, setImage] = useState('')
  const [imageProperties, setImageProperties] = useState({})

  const optionSelected = ({param, val}) => {
    if (image === '') return
    setImageProperties( (prev) => { return { ...prev, [param] : val} } )
  } 

  return(
    <ImageContext.Provider 
      value={{
        categoryAndAction, setCategoryAndAction,
        prevImageState, setPrevImageState,
        options, setOptions,
        image, setImage, optionSelected, 
        imageProperties, setImageProperties
      }}
    >
      {children}
    </ImageContext.Provider>
  )

}