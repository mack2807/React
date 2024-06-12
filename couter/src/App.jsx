import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    if (count < 20) {
      setCount(count + 1)
    }
    else {
      alert('reach upto max limit')

    }
  }
  const sub = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      alert('reach upto min limit')

    }
  }

  return (
    <>
      <h1>Vinay</h1>
      <p>value of counter :{count}</p>
      <button onClick={add}>Add</button> <br />
      <button onClick={sub}>Subtract</button>
    </>
  )
}

export default App
