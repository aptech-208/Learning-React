import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Foot from './Components/Foot'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom'
import Sender from './Props/Sender'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/props' element={<Sender />} />
          <Route path='/count' element={<Counter />} />
        </Routes>

        <Foot />
      </BrowserRouter>
    </>
  )
}

export default App