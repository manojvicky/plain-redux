import { createStore, applyMiddleware } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import CustomLogger from "./CustomLogger";
import TodosApp from "./TodoApp/TodosApp";
import reducers from "./TodoApp/TodoApp.reducer"

const store = createStore(reducers,
    applyMiddleware(CustomLogger)
    );

const render=()=>{
ReactDOM.render(
  <Provider store={store}>
    <TodosApp store={store} {...store.getState()}/>
  </Provider>,
  document.getElementById("app")
)
};

store.subscribe(render);
render();


