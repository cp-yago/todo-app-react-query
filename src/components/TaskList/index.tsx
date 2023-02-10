import { Container } from './styles'
import { Task } from './Task'
import { useQuery } from '@tanstack/react-query'
import { getTasks } from '../../services/api'

export const TaksList = () => {

  const tasks = useQuery({ queryKey: ['tasks'], queryFn: getTasks })

  return (
    <Container>
      {tasks.data?.map((task) => (
        <Task
          id={task.id}
          title={task.title}
          done={task.done}
        />
      ))}
    </Container>
  )
}