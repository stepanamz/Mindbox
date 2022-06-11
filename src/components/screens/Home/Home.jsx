import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import {BsChevronDown} from 'react-icons/bs'


const data = [
  
  {
    _id: "wef1",
    title: "Тестовое задание",
    isCompleted: false,
  },
  {
    _id: "wef2",
    title: "Прекрасный код",
    isCompleted: false,
  },
  {
    _id: "wef3",
    title: "Покрытие тестами",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  return (
    <div className=" text-black w-2/5 mx-auto">
      <h1 className="text-amber-700 text-7xl text-center mb-8 font-light">
        todos
      </h1>
        <div className="bg-gray-100 shadow-md flex items-center mb-1 rounded-md p-4 w-full">
        <BsChevronDown className='ml-1'/> <div className='ml-4'>Whats need to be done ?</div>
        </div>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} />
      ))}
    </div>
  );
};

export default Home;
