import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState()
  const [age, setAge] = useState(0)
  const [isToggle, setIsToggle] = useState(false)
  const [no, setNo] = useState(0)

  const handleName = () => {
    setName("Krish")
    console.log("Submitted!")
  }

  const handleAge = () => {
    setAge(age + 1)
    console.log("Submitted!")
  }

  const handleToggle = () => {
    setIsToggle(!isToggle)
    console.log("Submitted!")
  }

  const handleIncrement = () => {
    setNo(no + 1)
  }

  const handleReset = () => {
    setNo(0)
  }

  const handleDecrement = () => {
    setNo(no - 1)
  }

  return (
    <>
      {/* <p>Name: {name}</p>
      <button onClick={handleName}>Submit</button>

      <p>Age: {age}</p>
      <button onClick={handleAge}>Submit</button>

      <p>Toggle: {isToggle ? "Yes" : "No"}</p>
      <button onClick={handleToggle}>Submit</button> */}
      <div className="num">
        <h1>{no}</h1>
        <div className="button">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
