/* eslint-disable @typescript-eslint/no-explicit-any */
// src/store/todoStore.ts
import { create } from 'zustand';
import IToDo
 from '../types/todo.type';

interface IToDoState {
  todos: IToDo[];
  addTodo: (todo: string) => void;
  removeTodo: (id: Date) => void;
  toggleTodo: (id: Date) => void;
}

const useTodoStore = create<IToDoState>((set) => ({
  todos: [],
  addTodo: (todo: string) =>
    set((state: any) => ({
      todos: [...state.todos, { id: Date.now(), text: todo, completed: false }],
    })),
  removeTodo: (id: Date) =>
    set((state: any) => ({
      todos: state.todos.filter((todo: IToDo) => todo.id !== id),
    })),

  toggleTodo: (id: Date) =>
    set((state: any) => ({
      todos: state.todos.map((todo: IToDo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));

export default useTodoStore;