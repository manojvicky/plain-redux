import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer"
let ID = 0;
const visibilityFilterArray = (todos, filter)=>{
switch(filter){
case "SHOW_ALL":{
    return todos;
}
case "SHOW_ACTIVE":{
    return todos.filter((item)=>!item.completed)
}
case "SHOW_COMPLETED":{
    return todos.filter((item)=>item.completed)
}
}
};
const Todos = ({todos, visibilityFilter, store})=> {
    return(
        <div>
            <AddTodo OnAddTodo={(value)=>{store.dispatch({
                type:"ADD_TODO",
                text: value,
                id: ID++
                })
            }}
            />
            <TodoList todos={visibilityFilterArray(todos, visibilityFilter)} onTodoListClick={(id)=>{store.dispatch({
                    type:"TOOGLE_TODO",
                    id:id
                })
            }}
            />  
            <Footer currentFilter={visibilityFilter} FilterClick={(filter)=>{store.dispatch({
                type:"VISIBILITY_FILTER", 
                filter: filter
            })
            }}/>
        </div>
    );
};


export default Todos;

