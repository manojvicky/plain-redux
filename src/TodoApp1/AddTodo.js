import React from "react";
const AddTodo = ({OnAddTodo}) =>{
    let input;
    return(
        <div>
            <input type="text" ref={node=>{input=node;}} />
            <input type="button" value="Add Todo" onClick={()=>{if(input.value!==""){
                OnAddTodo(input.value);
            input.value="";
            }}} />
        </div>
    );
}
export default AddTodo;
