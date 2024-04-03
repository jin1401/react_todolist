  import React, { useEffect, useState } from 'react';
  import AddTodo from '../AddTodo/AddTodo';
  import Todo from '../Todo/Todo';
  import styles from './Todolist.module.css';

  export default function Todolist({filter}) {
    const [todos, setTodos] = useState(readTodosFromLocalStorage);
    const handleAdd = (todo) => {
      // 새로운 todo를 todos에 업데이트 함
      setTodos([...todos, todo]);
    }
    const handleUpdate = (updated)=> setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    const handleDelete = (deleted)=> setTodos(todos.filter((t) => t.id !== deleted.id))

    const filtered = getFilteredItems(todos, filter);

    useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todos));
      // 객체를 배열을 저장하기 위해서는 JSON로 변환을 해줘야 함

    }, [todos]);

    return (
      <section className={styles.container}>
        <ul className={styles.list}>
          {filtered.map((item) => 
            <Todo 
              key={item.id} 
              todo={item} 
              onUpdate={handleUpdate} 
              onDelete = {handleDelete}
            />
          )}
        </ul>
        <AddTodo onAdd={handleAdd}/>
      </section> 
    );
  }

function getFilteredItems(todos, filter) {
  if(filter === 'all'){
    return todos;
  } 
  return todos.filter((todo) => todo.status === filter);
}

function readTodosFromLocalStorage(){
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}