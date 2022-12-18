import { useContext } from 'react'
import { ImageContext } from '../contexts/ImageContext'
import { saveAs } from 'file-saver'
import FabButton from './UI/FabButton';
import AddIcon from '@mui/icons-material/Add';
import UndoIcon from '@mui/icons-material/Undo';
import CancelIcon from '@mui/icons-material/Cancel';

const HomeOptionsButtons = () => {

  const {
    setOptions, image, setImage, setImageProperties, handleUndo,
    imgOrigin, historyProps, setUploadNewImage, uploadNewImage
  } = useContext(ImageContext)
  
  const downloadImage = () => {
    console.log('hizo click')
    if (!image) return 
    saveAs( image, 'image.jpg') 
  }

  const resetImage = () => {
    setImage(prev => imgOrigin)
    setOptions({})
    setImageProperties({})
    historyProps.current = []
  }

  const handleNewImage = () => {
    setUploadNewImage(prev => !prev)
  }

  return (
    <>
      <FabButton title='Download Image' handleClick={downloadImage} style={{position:"absolute", bottom:'20px', right:'250px'}} />
      <FabButton title='Reset Image' handleClick={resetImage} style={{position:"absolute", bottom:'20px', right:'100px'}} />
      <FabButton color="secondary" 
        handleClick={handleNewImage} 
        style={{position:"absolute", bottom:'20px', right:'20px'}} 
        icon={uploadNewImage ? <CancelIcon /> : <AddIcon />}
      />
      <FabButton color="secondary" style={{position:"absolute", bottom:'20px' }} icon={<UndoIcon />} handleClick={handleUndo} />
    </>
  )
}

export default HomeOptionsButtons