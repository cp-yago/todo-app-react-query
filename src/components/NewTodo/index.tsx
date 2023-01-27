import { Container, TextInput, Button } from './styles';
import { AiOutlinePlusCircle } from 'react-icons/ai'

export const NewTodo = () => {
  return (
    <Container>
      <TextInput placeholder='Adicione uma nova tarefa' />
      <Button>
        Criar
        <AiOutlinePlusCircle />
      </Button>
    </Container>
  )
}