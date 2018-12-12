import React from "react";
import PropTypes from 'prop-types';
let ID = 0;

const AddTodo = (props, {store}) =>{
    console.log("context", store);
    let input;
    return(
        <div>
            <input type="text" ref={node=>{input=node;}} />
            <input type="button" value="Add Todo" onClick={()=>{if(input.value!==""){
                store.dispatch({
                    type:"ADD_TODO",
                    text: input.value,
                    id: ID++
                    })
            input.value="";
            }}} />
        </div>
    );
}
AddTodo.contextTypes = {
    store: PropTypes.object
}
export default AddTodo;
