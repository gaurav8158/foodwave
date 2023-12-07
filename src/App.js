import React from 'react'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
    
  )
}

export default App