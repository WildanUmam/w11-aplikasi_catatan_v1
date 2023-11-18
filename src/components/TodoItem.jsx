import React from 'react';

function TodoItem({ todo, onDelete }) {
  return (
    <tr>
      <th scope="row">{todo.id}</th>
      <td>{todo.title}</td>
      <td>{todo.content}</td>
      <td>{todo.createdAt}</td>
      <td>
        <button onClick={() => onDelete(todo.id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
