import React from 'react';

function DeleteButton({ onDelete, id }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteButton;
