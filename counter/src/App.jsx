import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  function addValueFunc() {
    if (counter < 20) {
      counter++;
      setCounter(counter);
    }
    console.log(`Add value btn clicked ${counter}`);
  }
  function decValueFunc() {
    if (counter > 0) {
      counter--;
      setCounter(counter);
    }
    console.log(`Dec value btn clicked ${counter}`);
  }
  return (
    <>
      <h1>Counter</h1>
      <h3>Click on Add Value button to increase the value and Decrease Value button to decrease the value. The range can be from 0 to 20.</h3>
      <h2>Value of Counter : {counter}</h2>
      <button
        onClick={addValueFunc}
      >Add Value</button>
      <button
        onClick={decValueFunc}
      >Decrease Value</button>
    </>
  )
}

export default App
