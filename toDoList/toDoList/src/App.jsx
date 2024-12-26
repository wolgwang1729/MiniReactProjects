import { useEffect, useState } from "react";
import "./App.css";
import { ToDoProvider } from "./contexts";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    setToDos((prev)=>[
      {id:Date.now(),...toDo},
      ...prev
    ])
  };

  const updateToDo = (id, toDo) => {
    setToDos((prev) => 
      prev.map((prevToDo) => (
        prevToDo.id === id ? toDo : prevToDo
      ))
    );
  };

  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter((prevToDo) => prevToDo.id !== id));
  };

  const toggleComplete = (id) => {
    setToDos((prev) =>
      prev.map((prevToDo) => {
        if (prevToDo.id === id) {
          return { ...prevToDo, completed: !prevToDo.completed };
        }
        else{
          return prevToDo;
        }
      })
    );
  };

  useEffect(()=>{
    const toDosLocal=JSON.parse(localStorage.getItem("toDosLocal"));
    if(toDosLocal&&toDosLocal.length>0){
      setToDos(toDosLocal);
    }
  },[])

  useEffect(
    ()=>{
      localStorage.setItem("toDosLocal",JSON.stringify(toDos))
    },[toDos]
  )

  return (
    <ToDoProvider
      value={{ toDos, addToDo, updateToDo, toggleComplete, deleteToDo }}
    >
      <div className="bg-[#172842] min-h-screen py-8 rounded-lg">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */} <ToDoForm/> </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {toDos.map((toDo)=>(
              <div key={toDo.id} className="w-full">
                  <ToDoItem toDo={toDo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
