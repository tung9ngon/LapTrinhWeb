import React from 'react';

function TodoItem({ todo, onToggleComplete, onDelete }) {
  const handleToggleComplete = () => {
    onToggleComplete(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggleComplete} />
      <span>{todo.text}</span>
      <button onClick={handleDelete}>Xóa</button> {/* Nút xóa */}
    </li>
  );
}

export default TodoItem;