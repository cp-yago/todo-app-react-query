import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

interface Task {
  id: string
  title: string
  done: boolean
}

export const getTasks = async () => {
  const response = await instance.get<Task[]>('/tasks')
  return response.data
}

export const createTask = async (data: Task) => {
  const response = await instance.post<Task>('/tasks', data)
  return response.data
}

