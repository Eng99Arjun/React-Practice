import React, { useState } from 'react'

const App = () => {

  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div>
      <button onClick={toggle}>{isOn ? "Turn Off" : "Turn On"}</button>
      <p>Status {isOn? "On" :"off"}</p>
    </div>
  )
}

export default App