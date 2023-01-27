import { Container } from './styles'
import Logo from '../../assets/img/logo.png'

export const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="todo" />
    </Container>
  )
}