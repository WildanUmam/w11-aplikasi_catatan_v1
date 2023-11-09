import React, { useState } from 'react';
import './App.css';

function TableRowDariFunction({ title, createdAt, body, id, onDelete }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{createdAt}</td>
      <td>{body}</td>
      <td>
        <button onClick={() => onDelete(id)}>Hapus</button>
      </td>
    </tr>
  );
}

function NoteTable({ title, notes, onDelete }) {
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearch = (e) => {
    setSearchTitle(e.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="table-container">
      <h2>{title}</h2>
      <input
        type="text"
        placeholder="Cari Berdasarkan Title"
        value={searchTitle}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Created At</th>
            <th>Isi Catatan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredNotes.map((note) => (
            <TableRowDariFunction
              key={note.id}
              title={note.title}
              createdAt={note.createdAt}
              body={note.body}
              id={note.id}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'catatan 1', createdAt: '2023-11-05T13:27:30', body: 'ini adalah isi catatan 1.' },
    { id: 2, title: 'note 2', createdAt: '2023-11-05T13:27:30', body: 'ini adalah isi note 2.' },
    // ... tambahkan catatan lain jika diperlukan
  ]);

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const [newNote, setNewNote] = useState({
    title: '',
    body: '',
  });

  const handleAddNote = () => {
    const id = Date.now();
    const createdAt = new Date().toISOString();
    setNotes([...notes, { id, title: newNote.title, createdAt, body: newNote.body }]);
    setNewNote({ title: '', body: '' });
  };

  const name= 'Wildan'
  return (
    <div className="App">
      <h2>Aplikasi Catatan Punya {name} </h2>
      <div className="add-note-form">
        <input
          type="text"
          placeholder="Judul Catatan"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Isi Catatan"
          value={newNote.body}
          onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
        />
        <button onClick={handleAddNote}>Tambah Catatan</button>
      </div>
      <NoteTable title="Catatan Saya" notes={notes} onDelete={handleDelete} />
    </div>
  );
}

export default App;
