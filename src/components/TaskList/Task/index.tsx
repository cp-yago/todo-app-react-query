import { Container, Title } from './styles'
import { AiFillCheckCircle as DoneIcon } from 'react-icons/ai'
import { BsCircle as NotDoneIcon } from 'react-icons/bs'
import { BiTrashAlt } from 'react-icons/bi'

interface Task {
  title: string
  done: boolean
}

export const Task = ({ title, done }: Task) => {
  return (
    <Container>
      {done ? (<DoneIcon size={20} />) : (<NotDoneIcon size={20} />)}
      <Title done={done}>{title}</Title>
      <button>
        <BiTrashAlt size={20} />
      </button>
    </Container>
  )
}