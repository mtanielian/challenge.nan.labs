import { useContext } from 'react'
import { ImageContext } from '../contexts/ImageContext'
import { saveAs } from 'file-saver'
import FabButton from './UI/FabButton'
import AddIcon from '@mui/icons-material/Add'
import UndoIcon from '@mui/icons-material/Undo'
import CancelIcon from '@mui/icons-material/Cancel'

const HomeOptionsButtons = () => {

  const {
    setOptions, image, setImage, setImageProperties, handleUndo,
    imgOrigin, historyProps, setUploadNewImage, uploadNewImage
  } = useContext(ImageContext)

  const downloadImage = () => {
    console.log('hizo click')
    if (!image) return
    saveAs(image, 'image.jpg')
  }

  const resetImage = () => {
    setImage(imgOrigin)
    setOptions({})
    setImageProperties({})
    historyProps.current = []
  }

  const handleNewImage = () => {
    setUploadNewImage(prev => !prev)
  }

  return (
    <div style={{ bottom: 20, display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
      <div>
        <FabButton title='Download Image' handleClick={downloadImage} style={{}} />
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <FabButton title='Reset Image' handleClick={resetImage} style={{}} />
        <FabButton color="secondary"
          handleClick={handleNewImage}
          style={{}}
          icon={uploadNewImage ? <CancelIcon /> : <AddIcon />}
        />
        <FabButton color="secondary" style={{}} icon={<UndoIcon />} handleClick={handleUndo} />
      </div>

    </div>
  )
}

export default HomeOptionsButtons