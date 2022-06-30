import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Clock from './components/Clock'
import ClockF from './components/ClockF'

function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <div className="App">
     <Clock />
     {mounted && <ClockF />}
     <button onClick={()=> setMounted(!mounted)}>Desmontar ClockF</button>
    </div>
  )
}

export default App
