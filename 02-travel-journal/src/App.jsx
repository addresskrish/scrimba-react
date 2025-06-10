import { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import datas from '../data'
import './App.css'

function App() {

  const dataItem = datas.map((data) => {
    return (
      <Entry 
        id={ data.id }
        img={ data.img }
        title={ data.title }
        country={ data.country }
        googleMapsLink={ data.googleMapsLink }
        dates={ data.dates }
        text={ data.text }
      />
    )
  })

  return (
    <>
      <Header />
      { dataItem }
    </>
  )
}

export default App
