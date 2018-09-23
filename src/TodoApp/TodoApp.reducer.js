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

export default reducers;