import React from "react";
import AddTodo from "./AddTodo";
import VisibleTodo from "./VisibleTodo";
import Footer from "./Footer"

const Todos = ({store})=> {
    return(
        <div>
            <AddTodo />
            <VisibleTodo />
            <Footer />
        </div>
    );
};


export default Todos;

