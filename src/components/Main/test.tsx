import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    //renderiza o component
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    //busca o elemento e verifica e existência dele
    expect(container.firstChild).toMatchSnapshot()
  })
})
