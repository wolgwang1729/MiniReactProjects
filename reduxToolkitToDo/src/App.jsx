import AddToDo from "./components/AddToDo";
import ToDos from "./components/ToDos";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className=" flex flex-col justify-center p-10 bg-gray-400  rounded-lg">
        <h1 className="text-center p-10 text-3xl font-bold">Manage your Todos</h1>
        <AddToDo />
        <ToDos />
      </div>
    </Provider>
  );
}

export default App;
