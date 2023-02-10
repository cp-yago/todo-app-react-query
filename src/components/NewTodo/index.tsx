import { Container, TextInput, Button } from './styles';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useMutation } from '@tanstack/react-query';
import { postTask, Task } from '../../services/api';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const NewTodo = () => {
  const [todo, setTodo] = useState('')

  const clearTodoInput = () => setTodo('')

  const { mutate: createTask } = useMutation({
    mutationFn: postTask,
    onSuccess: () => {
      clearTodoInput();
      toast.success('New task added!', {
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
  })

  const handleAddTask = () => {
    createTask({
      id: Date.now().toString(),
      title: todo,
      done: false
    });
  }

  return (
    <Container>
      <TextInput
        value={todo}
        placeholder='Adicione uma nova tarefa'
        onChange={(event) => setTodo(event.target.value)}
      />
      <Button
        onClick={handleAddTask}
      >
        Criar
        <AiOutlinePlusCircle />
      </Button>
    </Container>
  )
}