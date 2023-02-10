import { Container, Title } from './styles'
import { AiFillCheckCircle as DoneIcon } from 'react-icons/ai'
import { BsCircle as NotDoneIcon } from 'react-icons/bs'
import { BiTrashAlt } from 'react-icons/bi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTask } from '../../../services/api'
import { toast } from 'react-toastify'

interface Task {
  id: string,
  title: string
  done: boolean
}

export const Task = ({ id, title, done }: Task) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: deleteTask,
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

  const handleDelete = () => {
    mutate(id)
  }

  return (
    <Container>
      {done ? (<DoneIcon size={20} />) : (<NotDoneIcon size={20} />)}
      <Title done={done}>{title}</Title>
      <button onClick={handleDelete}>
        <BiTrashAlt size={20} />
      </button>
    </Container>
  )
}