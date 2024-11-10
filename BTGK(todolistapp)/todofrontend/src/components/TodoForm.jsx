import React from 'react';
import './TodoForm.css';
const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  const handleInputChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo({ title: '', description: '', due_date: '' });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Tiêu đề"
        value={newTodo.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Mô tả"
        value={newTodo.description}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="due_date"
        value={newTodo.due_date}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Thêm Todo</button>
    </div>
  );
};

export default TodoForm;
