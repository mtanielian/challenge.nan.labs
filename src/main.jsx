import React from 'react'
import ReactDOM from 'react-dom/client'
import { ImageContextProvider } from './contexts/ImageContext'
import HomePage from './pages/HomePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ImageContextProvider>
    <HomePage />
  </ImageContextProvider>
)
