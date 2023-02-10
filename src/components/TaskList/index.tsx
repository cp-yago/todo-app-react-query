import { Container } from './styles'
import { Task } from './Task'

import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { getTasks } from '../../services/api'

export const TaksList = () => {

  const tasks = useQuery({ queryKey: ['tasks'], queryFn: getTasks })

  return (
    <Container>
      {tasks.data?.map((task) => (
        <Task title={task.title} done={task.done} />
      ))}
    </Container>
  )
}