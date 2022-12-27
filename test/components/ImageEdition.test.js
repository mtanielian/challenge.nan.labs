import { render } from '@testing-library/react'
import React from 'react'
import ImageEdition from '../../src/components/ImageEdition'

describe('test  component <ImageEdition />', () => {
  test('first time should show skeleton', ()=> {
    const { container } = render(<ImageEdition />)
    expect(container.getElementsByTagName('span').length).toBe(1)
  })

  test('when have image', ()=> {
    const image = 'https://assets.imgix.net/unsplash/alarmclock.jpg'
    
    const mockUseContext = jest.spyOn(React, 'useContext')
    mockUseContext.mockReturnValue({
      image
    })

    const { container } = render(
      <ImageEdition />
    )
    expect(container.getElementsByTagName('img').length).toBe(1)  
  })
})