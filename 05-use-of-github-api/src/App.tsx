import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [username, setUsername] = useState('')



  return (
    <>
      <main>
        <h1 className="text-3xl font-bold underline">
          Github data analyzer
        </h1>
      </main>
    </>
  )
}

export default App
