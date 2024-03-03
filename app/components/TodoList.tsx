'use client'
import { Box, Button, ButtonGroup, Typography } from "@mui/material"
import TodoCard from "./TodoCard"
import { useContext, useEffect, useState } from "react"
import TodoContext, { Todo } from "../context/TodoContext"
import TodoThemeContext from "../context/TodoThemeContext"


const TodoList = () => {

    const {theme} =useContext(TodoThemeContext)
    const {todos} = useContext(TodoContext)
    const [filteredTodos, setFilteredTodos] = useState<Todo[] | null>(null)

    useEffect(()=>{
        setFilteredTodos(todos)
    },[todos])

    function handleFilter (bool: any){
        if(typeof bool==='boolean'){
            setFilteredTodos(todos.filter(todo=> todo.completed==bool))
        } else{
            setFilteredTodos(todos)
        } 
        // console.log(filteredTodos)
    }

    return (
        <>
            <Box width={'100%'}
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column-reverse', sm: 'row'},
                justifyContent: 'space-between',
                alignItems: {xs: 'center', sm: 'flex-start'}
            }}
            >
                <Typography variant="body1" fontWeight={'bold'} color={theme==='dark'?'#bdbbbb': 'black'}>Todos Count: {filteredTodos&&filteredTodos.length}</Typography>
                <ButtonGroup variant="text" aria-label="Basic button group" >
                    <Button sx={{color: '#cc6879',fontWeight: 'bold'}} onClick={()=>handleFilter(true)}>Completed</Button>
                    <Button sx={{color: '#cc6879',fontWeight: 'bold'}} onClick={()=>handleFilter(false)}>Uncompleted</Button>
                    <Button sx={{color: '#cc6879',fontWeight: 'bold'}} onClick={()=>handleFilter('all')}>All</Button>
                </ButtonGroup>
            </Box>
            {filteredTodos?
                (filteredTodos.length>0 ? filteredTodos.map((todo)=>(
                    <TodoCard key={todo.id} todo={todo} setFilteredTodos={setFilteredTodos}/>
                )) : <h2 style={{color: theme==='dark'?'#bdbbbb': 'black'}}>There is no Todos</h2>) :
                <h2 style={{color: theme==='dark'?'#bdbbbb': 'black'}}>Loading Todos...</h2>}
        </>
    )
}

export default TodoList
