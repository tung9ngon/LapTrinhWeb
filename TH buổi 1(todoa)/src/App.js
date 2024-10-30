import React, { useState } from 'react';
import TodoList from './components/toDoList';
import TodoForm from './components/toDoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, {
      id: Date.now(), // Sinh ID duy nhất
      text,
      completed: false,
      time: new Date().toLocaleString() // Thêm thời gian hiện tại
    }]);
  };

  const onToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onToggleComplete={onToggleComplete} onDelete={onDelete} />
    </div>
  );
}

export default App;
