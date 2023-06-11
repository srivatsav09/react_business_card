import { useState } from 'react'
import './App.css'
import Phone from "./assets/phone.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <img src={Phone} alt="" className='phone' />
      <h1>Digital Business Card</h1>
    </main>
  )
}

export default App
