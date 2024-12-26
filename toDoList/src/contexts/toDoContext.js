import { createContext,useContext } from "react";

export const toDoContext=createContext({
    // toDos:[
    //     {
    //         id:1,
    //         toDo:"to do msg",
    //         completed:false
    //     }
    // ],
    addToDo:(toDo)=>{},
    updateToDo: (toDo,id)=>{},
    deleteToDo:(id)=>{},
    toggleComplete:(id)=>{}

})

export const useToDo=()=>{
    return useContext(toDoContext)
}

export const ToDoProvider=toDoContext.Provider