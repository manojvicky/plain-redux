import React from "react";
import expect from "expect";
import deepFreeze from "deep-freeze";

const todo = (state, action) =>{
    switch(action.type){
        case "ADD_TODO":return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case "TOOGLE_TODO":
            if(action.id!==state.id){
            return state;
            }
            let completed=!state.completed;
            return {
                ...state, 
                completed
            };
        default: return state;
    }  
};

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
const testAddTodo=()=>{
    const sBefore =[];
    const action = {
        type:"ADD_TODO",
        text: "I am Manoj",
        id: 0
    };

    const sAfter = [
        {
            text: "I am Manoj",
            id: 0,
            completed: false  
        }
    ];
    deepFreeze(sBefore);
    deepFreeze(action);

    expect(
        todos(sBefore, action)
    ).toEqual(sAfter);
}
testAddTodo();
console.log("All test Passed");

const testToggleTodo = () =>{
    const sBefore = [
        {
            text: "I am Manoj",
            id: 0,
            completed: false  
        },
        {
            text: "I am vicky",
            id: 1,
            completed: false  
        }
        
    ];
    const action = {
        type: "TOOGLE_TODO",
        id: 1
    };

    const sAfter=[
        {
            text: "I am Manoj",
            id: 0,
            completed: false  
        },
        {
            text: "I am vicky",
            id: 1,
            completed: true  
        }
    ]
}
const Todos = () =>{
    return(
        <div>Reducer</div>
    );
}

export default Todos;