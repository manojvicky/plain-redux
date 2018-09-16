import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
const counter = (state=0, action)=>{
  switch (action.type){
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;
    
    default: 
      return state;
  }
}
const Counter = ({value, increment, decrement})=>{
  return(
  <div>
    <h1>{value}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
  )
};
const store = createStore(counter);
const render = () =>{
  ReactDOM.render(
    <Counter value={store.getState()} increment={()=>store.dispatch({type:"INCREMENT"})} decrement={()=>store.dispatch({type:"DECREMENT"})}/>,
    document.getElementById("app")
  )
}
const logger = () => {
  console.log("store", store.getState());
}
let allfxn = [render, logger];


allfxn.map((item)=>store.subscribe(item));
// store.subscribe(render);
render();

