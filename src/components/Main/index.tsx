import * as S from './styles'

const Main = ({
  title = 'Boilerplate para Apps',
  description = 'TypeScript, ReactJS, NextJS, e styled Components'
}) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <p>{description}</p>
    </S.Wrapper>
  )
}

export default Main
