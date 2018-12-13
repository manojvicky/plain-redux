import { createStore, applyMiddleware } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import CustomLogger from "./CustomLogger";
import reduxThunk from "./ReduxThunk";
const initalState = {data: [],error:"", str:"" };
const reducer = (state=initalState, action)=>{
if(action.type==="CHECK_ACTION"){
  return {...state, str: action.payload}
}else if(action.type==="DATA_ACTION"){
  return {...state, data: action.payload}
}
else if(action.type==="ERROR_ACTION"){
  return {...state, error: action.payload}
}
else{
  return state;
}
}
const store = createStore(reducer, applyMiddleware(reduxThunk, CustomLogger));
console.log('hello store', store, store.getState());
store.dispatch({type:"CHECK_ACTION", payload: "Yoo Baby"});
store.dispatch((dispatch)=>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => dispatch({type:"DATA_ACTION", payload: json}))
  .catch(err => dispatch({type:"ERROR_ACTION", payload: err.message}))
});
ReactDOM.render(
  <Provider store={store}>
  <div>
    Yoo Baby It's Redux Thunk
  </div>
  </Provider>,
  document.getElementById("app")
)


