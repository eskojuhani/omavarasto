// src/components/TodoList.jsx
import { useState } from 'react';
import useTodoStore from '../store/TodoStore';
import IToDo from '../types/todo.type';

import '../index.css'; // Import the CSS file

const TodoList = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo(''); // Clear the input after adding
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo: IToDo, i: number) => (
          <li key={i}>
            <span onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;