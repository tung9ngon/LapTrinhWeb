import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, deleteTodo, updateTodo, editingTodo, handleEdit }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          editingTodo={editingTodo}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
