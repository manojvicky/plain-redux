// import { createStore } from "redux";
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
  const createStore = (reducer)=>{
    let state;
    let listeners = [];
  
    const getState=()=>state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(
        listener=>listener()
      );
    }
  
    const subscribe = (listener) =>{
      console.log("listener", listener, listeners);
      listeners.push(listener);
      return ()=>{
        listeners=listeners.filter(l=>l!==listener);
      }
    }
  
    dispatch({});
  
  
    return {
      getState,
      dispatch,
      subscribe
    }
  
  }
  const store = createStore(counter);
  const render = () =>document.body.innerText = store.getState();
  const logger = () => {
    console.log("store", store.getState());
  }
  let allfxn = [render, logger];
  
  
  allfxn.map((item)=>store.subscribe(item));
  render();
  document.addEventListener('click', ()=>{
  store.dispatch({type: "INCREMENT"});
  })
  