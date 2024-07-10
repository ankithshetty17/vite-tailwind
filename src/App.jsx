import { useState } from 'react'
import './App.css'
import { Hero, Navbar } from './components'


function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
      <Navbar/>
      <Hero/>
      </div>
    
  )
}

export default App
