
import { createContext, useState, ReactNode, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

// Define the type for Todo object
export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    edited: boolean;
}

// Define the type for TodoContext value
interface TodoContextValue {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    toggleEdit: (id: string)=>void;
}

const initialTodoContextValue: TodoContextValue = {
    todos: [],
    setTodos: () => {}, // A dummy function,
    toggleEdit: ()=>{}
};

const TodoContext = createContext<TodoContextValue >(initialTodoContextValue);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [todos, setTodos] = useState<Todo[]>(() => {
        if (typeof window !== "undefined") {
            // Client-side-only code
            const storedTodos = window.localStorage.getItem('todos');
            return storedTodos ? JSON.parse(storedTodos) : [
                {
                    id: '1',
                    title: 'Learn TS & NextJS',
                    completed: true,
                    edited: false,
                },
                {
                    id: '2',
                    title: 'Complete the UI With MUI',
                    completed: false,
                    edited: false,
                },
                {
                    id: '3',
                    title: 'Complete Filter functionality',
                    completed: true,
                    edited: false,
                },
                {
                    id: '4',
                    title: 'Complete Delete & Edit & completed functionality',
                    completed: true,
                    edited: false,
                },
                {
                    id: '5',
                    title: 'Complete Add Todo Form with validation',
                    completed: true,
                    edited: false,
                },
                {
                    id: '6',
                    title: 'Save and use data from Local Storage',
                    completed: false,
                    edited: false,
                },
                {
                    id: '7',
                    title: 'Complete theme functionality',
                    completed: false,
                    edited: false,
                },
                {
                    id: '8',
                    title: 'Responsive Design',
                    completed: true,
                    edited: false,
                },
        ];
    }
    });
    
    useEffect(()=>{
        window.localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    // console.log("todos:", todos); // Log todos
    // console.log("setTodos:", setTodos); // Log setTodos

    function toggleEdit(id: string){
        console.log(id)
        setTodos(todos.map(todo=> todo.id===id? {...todo,edited: !todo.edited}: todo))
        console.log(todos)
    }

    return (
        <TodoContext.Provider  value={{
            todos,
            setTodos,
            toggleEdit
        }}>
            {children}
        </TodoContext.Provider >
    )
}


export default TodoContext;
