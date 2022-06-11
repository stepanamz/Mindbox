import React, { useState } from "react";
import TodoItem from "./item/TodoItem";

const data =[
{
    _id: 'wef1',
    title: 'Finish the essay collaboration',
    isCompleted: false,
},
{
    _id: 'wef2',
    title: 'Read next chapter of the book',
    isCompleted: false,
},
{
    _id: 'wef3',
    title: 'Send the finished assigment',
    isCompleted: false,
},
]


const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy =[...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    
    }


    return (

        <div className=' text-black w-4/5 mx-auto'>
            <h1 className="text-amber-700 text-7xl text-center mb-8 font-light">todos</h1> 

            {todos.map(todo =>( 
            <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} />
            ))} 
        </div>

    )
}

export default Home