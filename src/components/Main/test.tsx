import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    //renderiza o component
    expect(
      screen.getByRole('heading', { name: /Boilerplate para Apps/i })
    ).toBeInTheDocument()
    //busca o elemento e verifica e existência dele
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)
    //verifica se a cor de fundo
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
