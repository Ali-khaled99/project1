import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Info from './Components/Info/Info'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Protfolio from './Components/Portfolio/Protfolio'


function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Protfolio />
      <About />
      <Contact />
      <Info />
      <Footer />
    </>
  )
}

export default App
