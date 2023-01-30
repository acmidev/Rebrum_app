import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import MainSection from './components/mainSection/MainSection'

import './App.css'

function App() {

  
    const [userToolsOpen,setUserToolsOpen] = useState(false)
   
    
  
  
  return (
    <React.Fragment>
    <Navbar setUserToolsOpen={setUserToolsOpen}  />
    <MainSection userToolsOpen={userToolsOpen} />
    </React.Fragment>
  )
    
   
  
}

export default App
