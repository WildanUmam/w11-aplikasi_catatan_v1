import React from 'react';
import TodoItem from '../components/TodoItem';

function Home({ todos, onDelete, searchTerm, setSearchTerm }) {
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <label htmlFor="search">
        <h3>Cari Catatanmu</h3>
      </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-3"
        placeholder="Cari Berdasarkan Judul"
      />

      <table className="table mb-4">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Judul Catatan</th>
            <th scope="col">Isi Catatan</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
