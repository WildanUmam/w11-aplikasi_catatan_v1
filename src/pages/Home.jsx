import React from 'react';
import TodoItem from '../components/TodoItem';

function Home({ todos, onDelete, searchTerm, setSearchTerm }) {
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clearing user authentication tokens
    console.log('Logout clicked');
    // Redirect to the login page
    // You can replace '/login' with the actual path to your login page
    window.location.href = '/login';
  };

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
      
      {/* Add a Logout button */}
      <button type="button" onClick={handleLogout} className="btn btn-danger mb-3">
        Logout
      </button>

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