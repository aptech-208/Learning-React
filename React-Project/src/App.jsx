import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Foot from './Components/Foot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="nav">

        <Nav />

        <div>
          <button className="btn btn-primary">daisyUI Button</button>
        </div>

        <Foot />

      </div>
    </>
  )
}

export default App