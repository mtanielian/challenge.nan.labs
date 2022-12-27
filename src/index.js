import ReactDOM from 'react-dom/client'
import { ImageContextProvider } from './contexts/ImageContext'
import HomePage from './pages/HomePage'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ImageContextProvider>
    <HomePage />
  </ImageContextProvider>
)