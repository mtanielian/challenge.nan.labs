import { render, screen, fireEvent, getByTestId } from "@testing-library/react"
import AutoCompleteImages from "../../src/components/AutoCompleteImages"
import useAutoCompleteImages from "../../src/hooks/useAutoCompleteImages"
jest.mock('../../src/hooks/useAutoCompleteImages')

const images = [
  {
    "url": "https://assets.imgix.net/unsplash/alarmclock.jpg",
    "name": "alarmclock.jpg"
  },
  {
    "url": "https://assets.imgix.net/unsplash/bear.jpg",
    "name": "bear.jpg"
  },
]

useAutoCompleteImages.mockReturnValue({
  images, 
  haldleChangeImage: jest.fn()
})


describe('test for component AutoCompleteImages', () => {
  test('expect aumount of options toBe correct', () => {
    render(<AutoCompleteImages />)
    const textbox = screen.getByRole('combobox');
    fireEvent.keyDown(textbox, { key: 'ArrowDown' });
    // amount of options equals of images
    expect(screen.getAllByRole('option').length).toBe(images.length)
    fireEvent.keyDown(textbox, { key: 'ArrowDown' });
    fireEvent.keyDown(textbox, { key: 'Enter' });
  })

  test('Expect value of input selected equal to images data faked', () => {
    render(<AutoCompleteImages />)
    const textbox = screen.getByRole('combobox');
    fireEvent.keyDown(textbox, { key: 'ArrowDown' });
    fireEvent.keyDown(textbox, { key: 'ArrowDown' });
    fireEvent.keyDown(textbox, { key: 'ArrowDown' });
    fireEvent.keyDown(textbox, { key: 'Enter' });
    expect(textbox.value).toBe(images[1].name)
  })

  test('Expect no options when images its empty', () => {
    useAutoCompleteImages.mockReturnValue({
      images: [],
      haldleChangeImage: jest.fn()
    })

    render(<AutoCompleteImages />)
    const textbox = screen.getByRole('combobox');
    fireEvent.keyDown(textbox, { key: 'ArrowDown' });
    expect(screen.getByText('No options')).toBeTruthy()
  })
})