import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import './App.css'

function App() {

  const [todo, setTodo] = useState([]);
  const [todate, setTodoDate] = useState([]);
  return (
    <>
      <center>
        <Header />
        <InputSection 
          setTodo={setTodo}
          setTodoDate={setTodoDate}
        />
        <OutputSection 
          todo={todo}
          todate={todate}
        />
      </center>
    </>
  )
}

export default App
