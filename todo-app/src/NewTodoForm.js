import './NewTodoForm.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ createTodo }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({ task, id: uuid() });
    setTask("");
  };

  return (
    <div className="NewTodoForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          type="text"
          value={task}
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
