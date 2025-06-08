import { useState } from 'react'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    <>
      <Contact 
        img="./src/assets/images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        number="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img="./src/assets/images/fluffykins.png"
        name="Fluffykins"
        number="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact 
        img="./src/assets/images/felix.png"
        name="Felix"
        number="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact 
        img="./src/assets/images/pumpkin.png"
        name="Pumpkin"
        number="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </>
  )
}

export default App
