const reduxThunk = (store)=>(next)=>(action)=>{
    // let result;
    // if(Object.prototype.toString.call(action) === '[object Object]'){
    //     console.log("Yoo object Action",action);
    //     result=action
    // }
    if(Object.prototype.toString.call(action) === '[object Function]'){
        return action(next);
    }
    console.log("thunk baba");
    next(action);
}

export default reduxThunk;