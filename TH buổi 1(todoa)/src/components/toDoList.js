import React from 'react';

function TodoList({ todos, onToggleComplete, onDelete }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => onToggleComplete(todo.id)}
                    >
                        {todo.text} - <em>{todo.time}</em> {/* Hiển thị thời gian */}
                    </span>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
