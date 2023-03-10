import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export interface Task {
  id: string
  title: string
  done: boolean
}

export const getTasks = async () => {
  const response = await instance.get<Task[]>('/tasks')
  return response.data
}

export const postTask = async (data: Task) => {
  const response = await instance.post<Task>('/tasks', data)
  return response.data
}

export const deleteTask = async (id: string) => {
  const response = await instance.delete<Task>(`/tasks/${id}`)
  return response.data
}

export const updateTask = async (id: string, data: Task) => {
  const response = await instance.put<Task>(`/tasks/${id}`, data)
  return response.data
}

