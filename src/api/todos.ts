import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2214;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const createTodo = ({ userId, title, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', { userId, title, completed });
};

// Add more methods here
/*
  Your userId is
  2214

  Please use it for all your requests to the Students API. For example:
  https://mate.academy/students-api/todos?userId=2214 
*/
