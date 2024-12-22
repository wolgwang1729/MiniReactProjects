import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordReference = useRef(null);  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (NumberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      let id = (Math.floor(Math.random() * str.length));
      pass += str.charAt(id);
    }
    // console.log(pass.length);
    // console.log(length);
    setPassword(pass);
  }, [length, NumberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, NumberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClip=useCallback(()=>{
    passwordReference.current?.select();
    navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className='w-full h-screen bg-black flex flex-col'>

        <h1 className="text-white text-center text-4xl mt-4">Password Generator</h1>
        <div className="w-full max-w-md bg-gray-400 justify-center flex flex-wrap mx-auto rounded-lg my-5 py-3 px-4">
          <div className='w-full flex overflow-hidden mb-3'>
            <input className="w-full outline-none rounded-l-md px-2 text-lg" type="text" placeholder='Password' value={password} ref={passwordReference} readOnly />
            <button className="bg-blue-800 rounded-r-md px-2 text-white text-lg shrink-0  active:bg-blue-400"
              onClick={copyPasswordToClip}
            >Copy</button>
          </div>

          <div className='w-full flex text-sm gap-7'>
            <div className='flex text-sm gap-1'>
              <input type="range"
                min={8}
                max={20}
                className='cursor-pointer'
                name='lengthBar'
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                  passwordGenerator();
                }}
              />
              <label htmlFor='lengthBar' >Length : {length} </label>
            </div>
            <div className='flex text-sm gap-1'>
              <input type="checkbox"
                name='numberInput'
                className='cursor-pointer'
                defaultChecked={NumberAllowed}
                onClick={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex text-sm gap-1'>
              <input type="checkbox"
                name='charInput'
                className='cursor-pointer'
                defaultChecked={charAllowed}
                onClick={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor='charInput'>Characters</label>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
