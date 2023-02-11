import { useQuery } from '@tanstack/react-query'
import { getTasks } from '../../services/api'
import { Container, Title, Counter } from './styles'

export const TaskCounter = () => {
  const query = useQuery({ queryKey: ['tasks'], queryFn: getTasks })
  const total = query.data?.length || 0
  const doneTasks = query.data?.filter((task) => task.done).length || 0
  return (
    <Container>
      <div>
        <Title>Total tasks</Title>
        <Counter>{total}</Counter>
      </div>
      <div>
        <Title>Completed</Title>
        <Counter>
          {`${doneTasks} of ${total}`}
        </Counter>
      </div>
    </Container>
  )
}