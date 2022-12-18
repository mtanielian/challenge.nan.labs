import { fireEvent, render, screen } from "@testing-library/react"
import FabButton from "../../../src/components/UI/FabButton"

describe('test component <FabButton>', () => {
  const fabTitle = 'titulo de prueba'
  test('show some FabButton', () => {
    render(<FabButton title={fabTitle} />)
    expect(screen.getByRole('button', { name: fabTitle})).toBeTruthy()
  })

  test('call function inside FabButton', () => {
    const handleClick = jest.fn()

    render(<FabButton title={fabTitle} handleClick={handleClick} />)
    const btn = screen.getByRole('button', { name: fabTitle })
    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})