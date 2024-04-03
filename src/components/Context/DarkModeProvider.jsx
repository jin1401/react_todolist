import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export default function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  }

  // Provider가 처음에 마운트 되었을 때 한 번
  useEffect(()=> {
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  // html tag 에 class를 넣고 삭제하는 기능
  if(darkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

export const useDarkMode = () => useContext(DarkModeContext);

