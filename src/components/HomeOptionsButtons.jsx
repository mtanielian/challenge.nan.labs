import { useContext } from 'react'
import { ImageContext } from '../contexts/ImageContext'
import { saveAs } from 'file-saver'
import FabButton from './UI/FabButton';
import AddIcon from '@mui/icons-material/Add';
import UndoIcon from '@mui/icons-material/Undo';


const HomeOptionsButtons = () => {

  const {
    setOptions, image, setImage, setImageProperties, handleUndo,
    imgOrigin, historyProps } = 
    useContext(ImageContext)
  
  const downloadImage = () => {
    if (!image) return 
    saveAs( image, 'image.jpg') 
  }

  const resetImage = () => {
    setImage(prev => imgOrigin)
    setOptions({})
    setImageProperties({})
    historyProps.current = []
  }

  return (
    <>
      <FabButton title='Download Image' handleClick={downloadImage} style={{position:"absolute", bottom:'20px', right:'250px'}} />
      <FabButton title='Reset Image' handleClick={resetImage} style={{position:"absolute", bottom:'20px', right:'100px'}} />
      <FabButton color="secondary" style={{position:"absolute", bottom:'20px', right:'20px'}} icon={<AddIcon />} />
      <FabButton color="secondary" icon={<UndoIcon />} handleClick={handleUndo} />
    </>
  )
}

export default HomeOptionsButtons