const reduxThunk = (store)=>(next)=>(action)=>{
    if(Object.prototype.toString.call(action) === '[object Function]'){
        return action(next);
    }
    console.log("thunk baba");
    next(action);
}

export default reduxThunk;