'use client'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import MyCard from "./shared/MyCard"
import TodoContext from "../context/TodoContext"
import { useContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TodoThemeContext from "../context/TodoThemeContext"

const TodoForm = () => {

    const {theme} =useContext(TodoThemeContext)
    const {todos,setTodos} = useContext(TodoContext)
    const [newTodoTitle,setNewTodoTitle] = useState('')
    const [validation,setValidation] =useState(false)
    //console.log(todos)
    function handleChange(e : any){
        setNewTodoTitle(e.target.value)
    }

    function handleCreateTodo(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        let newTodo={
            id: uuidv4(),
            title: newTodoTitle,
            completed: false,
            edited: false
        }
        setTodos([newTodo,...todos])
        setNewTodoTitle('')
        setValidation(false)
    }

    return (
        <MyCard >
            <form onSubmit={handleCreateTodo} style={{width: '100%'}}>
                <Stack spacing={3} pb={1} px={2}>
                    <Typography variant={"h4"} fontWeight={'600'} pt={3} textAlign={'center'}
                    sx={{
                        fontSize: {xs: '20px', sm: '35px'}
                    }}
                    >Write Your Todo</Typography>
                    <Box>
                        <Stack direction={'row'} spacing={1} >
                            <TextField
                                id="outlined-textarea"
                                // label="What is your todo?"
                                placeholder="What is your todo?"
                                fullWidth
                                // multiline
                                // focused
                                value={newTodoTitle}
                                onChange={handleChange}
                                onClick={()=> newTodoTitle.length<4? setValidation(true): setValidation(false)}
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: theme === 'dark' ? 'white' : 'black'
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: theme === 'dark' ? 'white' : 'black'
                                    }
                                }}
                            />
                            <Button variant="contained" disabled={newTodoTitle.length<4} type="submit"
                                sx={{
                                    backgroundColor: '#f18194',
                                    fontWeight: 'bold',
                                    '&:hover':{
                                        backgroundColor: '#b65e6d'
                                    }
                                }}>
                                Submit</Button>
                        </Stack>
                        {((newTodoTitle.length<4&& newTodoTitle.length>0)&&validation) && 
                            <Typography variant="body1" color={'#e05a62'} mt={1} fontSize={{xs: '11px', sm: '15px'}}>The todo should be at least 4 characters</Typography>
                        }
                    </Box>
                </Stack>
            </form>
        </MyCard>
    )
}

export default TodoForm
