import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(count + 1)
  }

  const decrement = () =>{
    setCount(count - 1)
  }

  const reset = () =>{
    setCount(0)
  }

  return (
    <>
      <h1>counter-app</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
