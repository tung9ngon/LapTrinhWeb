import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '', due_date: '' });
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách todo:", error);
    }
  };

  const addTodo = async (todo) => {
    try {
      await axios.post('http://localhost:3000/api/todos', todo);
      fetchTodos();
    } catch (error) {
      console.error("Lỗi khi thêm todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Lỗi khi xóa todo:", error);
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      await axios.put(`http://localhost:3000/api/todos/${id}`, updatedTodo);
      setEditingTodo(null);
      fetchTodos();
    } catch (error) {
      console.error("Lỗi khi cập nhật todo:", error);
    }
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <div className="App">
      <h1>My work 🎯</h1>
      <TodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        editingTodo={editingTodo}
        setEditingTodo={setEditingTodo}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
