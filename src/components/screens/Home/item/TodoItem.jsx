import React from "react";
import cn from 'classnames';
import Check from "./Check";

const TodoItem =({ todo, changeTodo }) => {
    return(
        <button className="bg-gray-100 shadow-md flex items-center mb-4 rounded-2xl p-4 w-full"
        onClick={() => changeTodo(todo._id)}>
            <Check isComleted={todo.isCompleted} />
            <span className={cn({
                'line-through': todo.isComleted,
            })}
            >
                {todo.title}</span>
        </button>
    )
}

export default TodoItem