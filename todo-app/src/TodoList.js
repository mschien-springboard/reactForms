import './TodoList.css';
import { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos(todos => [...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, task: updatedTodo } : todo
    ));
  };

  const todoComponents = todos.map(todo => (
    <Todo
      key={todo.id}
      id={todo.id}
      task={todo.task}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
    />
  ))

  return (
    <div className="TodoList">
      <NewTodoForm createTodo={createTodo} />
      <ul>{todoComponents}</ul>
    </div>
  );
}

export default TodoList;
