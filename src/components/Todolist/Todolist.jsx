  import React, { useState } from 'react';
  import styles from './Todolist.module.css';
  import AddTodo from '../AddTodo/AddTodo';

  export default function Todolist() {
    const [todos, setTodos] = useState([{id:'123', text:'장보기', status: 'active'}, {id:'124', text:'공부하기', 
    status: 'active'}]);
    const handleAdd = (todo) => {
      // 새로운 todo를 todos에 업데이트 함
      setTodos([...todos, todo])
    }
    return (
      <section>
        <ul className={styles.todolist}>
          {todos.map((item) => <li key={item.id}>{item.text}</li> )}
        </ul>
        <AddTodo onAdd={handleAdd}/>
      </section> 
    );
  }

