import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodo, editingTodo, setEditingTodo, handleEdit }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleChange = (e) => {
    setUpdatedTodo({ ...updatedTodo, [e.target.name]: e.target.value });
  };

  return (
    <li>
      {editingTodo && editingTodo.id === todo.id ? (
        <div>
          <input
            type="text"
            name="title"
            value={updatedTodo.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={updatedTodo.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="due_date"
            value={updatedTodo.due_date}
            onChange={handleChange}
          />
          <button onClick={() => updateTodo(todo.id, updatedTodo)}>Lưu</button>
        </div>
      ) : (
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>Ngày hết hạn: {todo.due_date}</p>
          <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
          <button onClick={() => handleEdit(todo)}>Chỉnh sửa</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
