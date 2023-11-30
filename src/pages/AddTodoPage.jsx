import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTodoPage({ onAdd }) {
  const [newTodo, setNewTodo] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setNewTodo({ ...newTodo, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setNewTodo({ ...newTodo, content: e.target.value });
  };

  const handleAddCatatan = () => {
    onAdd(newTodo);
    setNewTodo({ title: '', content: '' });
    navigate('/'); // Use the navigate function to go to the home page
  };

  return (
    <div>
      <h2>Add Catatan</h2>
      <label>Judul Catatan:</label>
      <input
        type="text"
        value={newTodo.title}
        onChange={handleTitleChange}
        placeholder="Isi Dengan Judul Catatan"
      />
      <br />
      <label>Isi Catatan:</label>
      <textarea
        value={newTodo.content}
        onChange={handleContentChange}
        placeholder="Apa Catatanmu Hari ini"
      />
      <br />
      <button onClick={handleAddCatatan} className="btn btn-primary">
        Add Catatan
      </button>
    </div>
  );
}

export default AddTodoPage;
