import { Container, Title, Counter } from './styles'

export const TaskCounter = () => {
  return (
    <Container>
      <div>
        <Title>Tarefas criadas</Title>
        <Counter>5</Counter>
      </div>
      <div>
        <Title>Concluídas</Title>
        <Counter>2 de 5</Counter>
      </div>
    </Container>
  )
}