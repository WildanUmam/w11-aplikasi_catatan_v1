import React, { useState } from 'react';

function AddTodoPage({ onAdd, history }) {
  const [newTodo, setNewTodo] = useState({ title: '', content: '' });

  const handleTitleChange = (e) => {
    setNewTodo({ ...newTodo, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setNewTodo({ ...newTodo, content: e.target.value });
  };

  const handleAddCatatan = () => {
    onAdd(newTodo);
    setNewTodo({ title: '', content: '' });
    history.push('/');
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