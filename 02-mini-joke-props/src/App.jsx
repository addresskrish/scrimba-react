import { useState } from 'react'
import Joke from './components/joke'
import './App.css'

function App() {

  return (
    <>
      <Joke 
        id={ 1 }
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        upvote={ 10 }
        ispun={ true }
        comments={[
            {author:"", text:"", title:""},
            {author:"", text:"", title:""}
        ]}
      />
      <Joke 
        id={ 2 }
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        upvote={ 2 }
        ispun={ true }
      />
      <Joke 
        id={ 3 }
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        upvote={ 7 }
        ispun={ true }
      />
      <Joke 
        id={ 4 }
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        upvote={ 4 }
        ispun={ false }
      />
    </>
  )
}

export default App
