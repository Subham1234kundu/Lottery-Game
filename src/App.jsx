import { useState } from 'react'
import './App.css'
import Lottery from './Lottery'
import { sum } from './helper'


function App() {
  
  let winConduction = (tickit)=>{
    return sum(tickit) === 15;
  }

  return (
    <>
     <Lottery n={3} winCondiction={winConduction}/>
    </>
  )
}

export default App
