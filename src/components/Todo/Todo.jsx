import React from 'react';
import { IoMdTrash } from "react-icons/io";

export default function Todo({todo, onUpdate, onDelete}) {
  const {text, status} = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status})
  }
  const handleClick = () => onDelete(todo);
  return (
    <li>
      <input 
        type='checkbox' 
        id='checkbox' 
        ckecked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>{text}</label>
      <button onClick={handleClick}><IoMdTrash /></button>
    </li>
  );
}

