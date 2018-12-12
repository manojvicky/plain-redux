import { createStore, applyMiddleware } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import Provider from "./TodoApp/Provider";
import CustomLogger from "./CustomLogger";
import TodosApp from "./TodoApp/TodosApp";
import reducers from "./TodoApp/TodoApp.reducer";

const store = createStore(reducers,
    applyMiddleware(CustomLogger)
    );

ReactDOM.render(
  <Provider store={store}>
    <TodosApp />
  </Provider>,
  document.getElementById("app")
)


