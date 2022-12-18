import { render, screen, } from "@testing-library/react"
import HomeOptionsButtons from "../../src/components/HomeOptionsButtons"

describe('testing <HomeOptionsButtons />', () => {
  test('init show 4 buttons', () => {
    render(<HomeOptionsButtons />)
    const btns = screen.getAllByRole('button')
    expect(btns.length).toBe(4)
  })
})