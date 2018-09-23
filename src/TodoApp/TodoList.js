import React from "react";
import Todo from "./Todo";

const TodoList=({todos, onTodoListClick})=>{
    return(
        <ul>
            {todos.map((todo)=>{
                return(
                <Todo {...todo} key={todo.id} onClick={()=>onTodoListClick(todo.id)}/>
            )       
            })}
        </ul>
    );
};

export default TodoList;

