import React from "react";
import PropTypes from 'prop-types';
import TodoList from "./TodoList";

const visibilityFilterArray = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL": {
            return todos;
        }
        case "SHOW_ACTIVE": {
            return todos.filter((item) => !item.completed)
        }
        case "SHOW_COMPLETED": {
            return todos.filter((item) => item.completed)
        }
    }
};

class VisibleTodo extends React.Component {
    componentDidMount(){
        this.unsubscribe = this.context.store.subscribe(()=>{
            this.forceUpdate();
        })
    }

    componentWillUnmount(){
this.unsubscribe();
    }
    render() {
        let {store} = this.context;
        let state = store.getState();
        return (
            <TodoList todos={visibilityFilterArray(state.todos, state.visibilityFilter)} onTodoListClick={(id) => {
                store.dispatch({
                    type: "TOOGLE_TODO",
                    id: id
                })
            }}
            />
        );
    }
}
VisibleTodo.contextTypes = {
    store: PropTypes.object
}
export default VisibleTodo;