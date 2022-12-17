import React, { useContext } from 'react'
import { ImageContext } from '../contexts/ImageContext'

const useOptionsImage = () => {
  const { options } = useContext(ImageContext)
  console.log(options)

  return (
    <div>useOptionsImage</div>
  )
}

export default useOptionsImage