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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <Foot />
      </BrowserRouter>
    </>
  )
}

export default App