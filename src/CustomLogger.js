const CustomLogger = (store)=>(next)=>(action)=>{
console.log("PREVIOUS STATE", store.getState());
console.log("ACTION", action);
next(action);
console.log("NEXT STATE", store.getState());
console.log("\n");
}
export default CustomLogger;