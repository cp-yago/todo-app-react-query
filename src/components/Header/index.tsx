import { Container } from './styles'
import Logo from '../../assets/img/logo.png'
import { NewTodo } from './NewTodo'

export const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="todo" />
      <NewTodo />
    </Container>
  )
}