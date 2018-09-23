import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import Todo from "./TodoApp/Todo";

const todo = (state, action) =>{
  switch(action.type){
      case "ADD_TODO":return {
              id: action.id,
              text: action.text,
              completed: false
          }
      case "TOOGLE_TODO":{
        if(action.id!==state.id){
            return state;
            }
            let completed=!state.completed;
            return {
                ...state, 
                completed
            };
      }

      default: return state;
  }  
}
const visibilityFilter = (state="SHOW_ALL", action)=>{
    switch(action.type){
        case "VISIBILITY_FILTER":{
            return action.filter;
        }
        default: return state;
    }
};

const todos = (state =[], action)=>{
  switch(action.type){
      case "ADD_TODO":return [
          ...state,
          todo(undefined, action)
      ]
      case "TOOGLE_TODO":{
          return state.map(item=>todo(item, action))
      }
      default: return state;
  }
}

const reducers = (state={}, action)=>{
return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter , action)
}
}

const store = createStore(reducers);
console.log("inital state");
console.log("store", store.getState());
console.log("-----------------------------");


console.log("-----------------------------");
console.log("Action :: ADD_TODO");
store.dispatch({
  type:"ADD_TODO",
  text: "I am jonam",
  id: 77
})
console.log("store after dispatch", store.getState());
console.log("-----------------------------");

console.log("-----------------------------");
console.log("Action :: ADD_TODO");
store.dispatch({
  type:"ADD_TODO",
  text: "OK done",
  id: 89
})
console.log("store after dispatch", store.getState());
console.log("-----------------------------");

console.log("-----------------------------");
console.log("Action :: TOOGLE_TODO");
store.dispatch({
  type:"TOOGLE_TODO",
  id:56
})
console.log("store after dispatch", store.getState());
console.log("-----------------------------");

console.log("-----------------------------");
console.log("Action :: TOOGLE_TODO");
store.dispatch({
  type:"TOOGLE_TODO",
  id:77
})
console.log("store after dispatch", store.getState());
console.log("-----------------------------");

ReactDOM.render(
  <Todo />,
  document.getElementById("app")
)


