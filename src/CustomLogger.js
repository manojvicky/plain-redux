const CustomLogger = (store)=>(next)=>(action)=>{
console.group(action.type);
console.log("%c PREVIOUS STATE","color:green;", store.getState());
console.log(" %c ACTION", "color:blue;",action);
next(action);
console.log("%c NEXT STATE", "color:green;" , store.getState());
console.groupEnd();
console.log("\n");
}
export default CustomLogger;