import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    toDos:[{id:1, text:"Hello"}]
}

export const toDoSlice = createSlice({
    name: "toDo",
    initialState,
    reducers:{ 
        addToDo:(state,action)=>{
            const toDo={
                id:nanoid(),
                text:action.payload
            }
            state.toDos.push(toDo);
        },
        removeToDo:(state,action)=>{
            state.toDos=state.toDos.filter((toDo)=>toDo.id!==action.payload)
        },
    }
})

export const {addToDo,removeToDo}=toDoSlice.actions
export default toDoSlice.reducer