import { Container, Title } from './styles'
import { AiFillCheckCircle as DoneIcon } from 'react-icons/ai'
import { BsCircle as NotDoneIcon } from 'react-icons/bs'
import { BiTrashAlt } from 'react-icons/bi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTask, updateTask } from '../../../services/api'
import { toast } from 'react-toastify'

interface Task {
  id: string,
  title: string
  done: boolean
}

export const Task = ({ id, title, done }: Task) => {
  const queryClient = useQueryClient()

  const { mutate: deleteTaskMutate } = useMutation({
    mutationFn: deleteTask,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] })
      const previousTasks = queryClient.getQueryData<Task[]>(['tasks'])
      const tasksFiltered = previousTasks?.filter((task) => task.id !== id)
      queryClient.setQueryData<Task[]>(['tasks'], () => [...tasksFiltered as Task[]])
      return { previousTasks };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.info('Task removed!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  });

  const { mutate: toggleTaskStatus } = useMutation({
    mutationFn: () => updateTask(id, { id, title, done: !done }),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] })
      const previousTasks = queryClient.getQueryData<Task[]>(['tasks'])
      const task = previousTasks?.find((task) => task.id === id)
      const taskUpdated = { ...task, done: !done }
      const tasksFiltered = previousTasks?.filter((task) => task.id !== id)
      queryClient.setQueryData<Task[]>(['tasks'], () => [...tasksFiltered as Task[], taskUpdated as Task])
      return { previousTasks };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['tasks'], context?.previousTasks)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  });

  const handleDelete = () => {
    deleteTaskMutate(id)
  }

  const handleToggleStatus = () => {
    toggleTaskStatus()
  }

  return (
    <Container>
      <button onClick={handleToggleStatus}>
        {done ? (<DoneIcon size={20} />) : (<NotDoneIcon size={20} />)}
      </button>
      <Title done={done}>{title}</Title>
      <button onClick={handleDelete}>
        <BiTrashAlt size={20} />
      </button>
    </Container>
  )
}