import React from "react";
import cn from 'classnames';
import Check from "./Check";


const TodoItem = ({ todo, changeTodo }) => {
  return (
    <button
      className="bg-gray-100 shadow-xl flex items-center rounded-sm p-4 w-full border border-gray-300"
      onClick={() => changeTodo(todo._id)}
    >
      <Check isComleted={todo.isCompleted} />
      <span className={cn({
        'transition duration-300 ease-in line-through text-gray-400': todo.isCompleted,
      })}>{todo.title}</span>
    </button>
  );
};

export default TodoItem;
