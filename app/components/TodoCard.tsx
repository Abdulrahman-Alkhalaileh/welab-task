'use client'
import { Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material"
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import MyCard from "./shared/MyCard"
import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import TodoThemeContext from "../context/TodoThemeContext";

interface Todo {
    id: string;
    title: string;
    completed: boolean;
    edited: boolean;
    }

const TodoCard: React.FC <{todo: Todo,setFilteredTodos: any}> = ({todo,setFilteredTodos}) => {

    const {theme} = useContext(TodoThemeContext)
    const {todos, setTodos,toggleEdit}= useContext(TodoContext)
    const [updatedTodoTitle,setUpdatedTodoTitle] =useState(todo.title)

    function handleDelete(){
        let newTodos=todos.filter(item=> todo.id!==item.id)
        setTodos(newTodos)
        setFilteredTodos(newTodos)
    }

    function handleTodoStatus(e: any){
            // console.log(e.target.defaultChecked)
            setTodos(todos.map(item=> item.id==todo.id? {...item,completed: !todo.completed}: item ))
    }

    function handleUpdateTodoTitle(e: any){
        setUpdatedTodoTitle(e.target.value)
    }
    
    function UpdateTodo(e: any){
        e.preventDefault()
        setTodos(todos.map(item=> item.id===todo.id? {...item,title: updatedTodoTitle,edited: false}: item))
    }

    return (
        <MyCard>
            <Box display={'flex'} alignItems={'center'} width={'100%'}>
                <Checkbox checked={todo.completed} color="default" onChange={handleTodoStatus}/>
                {todo.edited ?
                    <form onSubmit={UpdateTodo} style={{width: '100%'}}>
                        <Stack direction={'row'} spacing={1}>
                        <TextField
                        id="outlined-textarea"
                        fullWidth
                        size="small"
                        value={updatedTodoTitle}
                        onChange={handleUpdateTodoTitle}
                        // focused
                        sx={{
                            '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
                                borderColor: theme=='dark'? 'white' :'black'
                            },
                            '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root':{
                                color: theme=='dark'? 'white' : 'black'
                            }
                        }}
                        />
                        <Button variant="contained" disabled={updatedTodoTitle.length<4} type="submit"
                                sx={{
                                    backgroundColor: '#f18194',
                                    fontWeight: 'bold',
                                    fontSize: {xs:'10px', sm: '14px'},
                                    '&:hover':{
                                        backgroundColor: '#b65e6d'
                                    }
                                }}>
                                Update</Button>   
                        </Stack>
                    </form> :
                <Typography variant="body1" fontWeight={600} pt={'3px'}
                    sx={{
                            textDecoration: todo.completed? 'line-through' : 'none',
                            color: todo.completed? '#2bb35e': (theme==='dark'?'#bdbbbb': 'black'),
                            fontSize: {xs: '14px', sm: '20px'}
                        }}
                >{todo.title}</Typography>
            }
            </Box>
            <Box display={'flex'} alignItems={'center'}>
                {!todo.edited &&
                    <FaEdit size={18} style={{cursor:'pointer'}} onClick={()=>toggleEdit(todo.id)}/>
                }
                <MdDeleteOutline size={22} style={{cursor:'pointer'}} onClick={handleDelete}/>
            </Box>
        </MyCard>
    )
}

export default TodoCard
