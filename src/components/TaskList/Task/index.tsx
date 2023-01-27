import { Container } from './styles'
import { AiFillCheckCircle as CheckIcon, } from 'react-icons/ai'
import { BiTrashAlt } from 'react-icons/bi'

export const Task = () => {
  return (
    <Container>
      <CheckIcon size={20} />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <BiTrashAlt size={20} />
    </Container>
  )
}