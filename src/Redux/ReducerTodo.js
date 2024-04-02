const initial = {
    todolist: []
}

export function reducer (state=initial,action){
    console.log(action,"action");
switch (action.type) {
    case "ADD_TASK":
        return {...state,todolist:[...state.todolist,action.payload]}
    case "DELETE_TASK":
        let deleteOne = state.todolist.filter((val) => {
            return val.id !== action.payload;
          });   
          return {...state,todolist: deleteOne} 
     case "EDIT_TASK" :
        let fill = state.todolist.filter((item) => {
            if (item.id === action.payload.id) {
              item.task = action.payload.task;
            }
            console.log(item, "item");
      
            return item;
          });  
          return {...state, todolist : fill}
        default : return state

}
}