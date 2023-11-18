import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import AddTodoPage from './pages/AddTodoPage';
import Home from './pages/Home';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Mengerjakan Tugas', content: 'Saya akan mengerjakan tugas', createdAt: new Date().toLocaleString() },
    { id: 2, title: 'Mendaki Gunung', content: 'Saya akan mendaki gunung', createdAt: new Date().toLocaleString() },
    { id: 3, title: 'Belajar Ngoding', content: 'Belajar ngoding menggunakan react', createdAt: new Date().toLocaleString() }
  ]);

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
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Buat Catatan</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home todos={todos} onDelete={deleteTodo} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
          <Route path="/add" element={<AddTodoPage onAdd={addTodo} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
