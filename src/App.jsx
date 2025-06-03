import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './Navbar.jsx'
import Heading from './Heading.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'

function App  () {
  

  return (
    <div className='w-full min-h-screen'>
      <NavBar />
      <Heading/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Footer/>
    </div>
    
  )
}

export default App
