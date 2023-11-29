import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import AddTodoPage from './pages/AddTodoPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import todoData from './untils/local';
import DeleteButton from './components/DeleteButton'; 


function App() {
  const [todos, setTodos] = useState(todoData);
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, { ...newTodo, id: todos.length + 1, createdAt: new Date().toLocaleString() }];
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <div className="App">
        <h1>INI MY TODO APP PUNYA WILDAN</h1>
      
            <p><Link to="/">Home</Link></p>
            <p><Link to="/add">Buat Catatan</Link></p>
            <p><Link to="/login">Login</Link></p>
            <p><Link to="/register">Register</Link></p>
          
        <Routes>
          <Route
            path="/"
            element={
              <Home
                todos={todos}
                onDelete={deleteTodo}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                DeleteButton={DeleteButton}
              />
            }
          />
          <Route path="/add" element={<AddTodoPage onAdd={addTodo} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;