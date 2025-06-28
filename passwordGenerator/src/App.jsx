import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersAllowed) str += "0123456789"
    if(charsAllowed) str += "!@#$%^&*()_+=-[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)
  } , [length,charsAllowed, numbersAllowed,setPassword])

  const copyPassword = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  }, [Password])

 useEffect(() => {
  PasswordGenerator()
 }, [length, numbersAllowed, charsAllowed])

  return (
    <>
      <h1 className='text-4xl text-white text-center'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-amber-600 bg-gray-700'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input 
        type="text"
        value={Password}
        className='outline-none w-full py-1 px-3 '
        placeholder='password'
        readOnly
        ref={passRef} />
        <button 
        onClick={copyPassword}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          Copy
         </button>
      </div>
      <div>
        <div>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}} />
          <label> Length: {length} </label>
        </div>
        <div>
          <input 
            type="checkbox"
            defaultChecked= {numbersAllowed}
            id='numberInput'
            onChange={() => {setNumbersAllowed((prev) => !prev);

            }} />
            <label htmlFor="">Numbers</label>
        </div>
        <div>
          <input 
            type="checkbox"
            defaultChecked= {charsAllowed}
            id='charInput'
            onChange={() => {setCharsAllowed((prev) => !prev);
            }} />
            <label htmlFor="">Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App