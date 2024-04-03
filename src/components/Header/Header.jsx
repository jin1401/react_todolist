import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../Context/DarkModeProvider';
import { IoMoonSharp, IoSunny } from "react-icons/io5";


export default function Header({filters, filter, onFilterChange}) {
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <IoMoonSharp />}
        {darkMode && <IoSunny />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value,index) => (
          <li key={index}>
            <button className={`${styles.filter} ${filter === value && styles.selected}`}
            onClick={() => onFilterChange(value)}>
            {value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

