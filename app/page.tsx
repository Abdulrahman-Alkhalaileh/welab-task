'use client'
import { Box, Stack } from "@mui/material";
import AboutQuestionMark from "./components/AboutQuestionMark";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";
import Header from "./components/Header";
import TodoThemeContext from "./context/TodoThemeContext";
import { useContext, useEffect, useState } from "react";

export default function Home() {

  const {theme} = useContext(TodoThemeContext)

  return (
      <TodoProvider>
        <Box sx={{background: theme==='dark'? '#230051': 'lightgrey', minHeight: '87vh'}}>
          <Stack mx={'auto'} py={7} px={{xs: 2,sm: 4}} spacing={3} alignItems={'center'} maxWidth={'1100px'}>
            <TodoForm />
            <TodoList />
            <AboutQuestionMark />
          </Stack>
        </Box>
      </TodoProvider>
  );
}
