import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Foot from './Components/Foot'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom'
import Sender from './Props/Sender'
import Counter from './Components/Counter'
import UseEffect from './Pages/UseEffect'

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
          <Route path='/effects' element={<UseEffect />} />
        </Routes>

        <Foot />
      </BrowserRouter>
    </>
  )
}

export default App