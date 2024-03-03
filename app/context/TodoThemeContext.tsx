'use client'
import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

// Define the type for the context value
interface TodoThemeContextValue {
  theme: string | null; // Change type to allow for null
  setTheme: Dispatch<SetStateAction<string | null>>;
}

// Create the context with default values
const initialContextValue: TodoThemeContextValue = {
  theme: 'dark', // Initial theme value
  setTheme: () => {},
};
const TodoThemeContext = createContext<TodoThemeContextValue>(initialContextValue);

// Create the ThemeProvider component
export const TodoThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string | null>(null); // Change state type to allow for null

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme !== null) {
      setTheme(JSON.parse(storedTheme)); // Set theme if available in localStorage
    }else{
      setTheme('dark')
    }
  }, []);

  useEffect(() => {
    // Update local storage when theme changes
    let body=document.querySelector<any>('body')
    if (theme !== null) {
      window.localStorage.setItem('theme', JSON.stringify(theme));
      body.style.backgroundColor= theme=='dark'? '#230051' : 'lightgrey'
    }
  }, [theme]);

  return (
    <TodoThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </TodoThemeContext.Provider>
  );
};

// Function to use the theme context
export default TodoThemeContext;
