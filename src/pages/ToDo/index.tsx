import { Container, Content } from './styles'
import { Header, TaskCounter, TaksList, NewTodo } from "../../components"

export const ToDo = () => {
  return (
    <Container>
      <Header />
      <NewTodo />
      <TaskCounter />
      <Content>
        <TaksList />
      </Content>
    </Container>
  )
}