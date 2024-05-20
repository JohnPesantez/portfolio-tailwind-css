import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navigbar'
import Home from './components/Home'
import Projects from './components/Projects'
import MyFooter from './components/MyFooter'
import Contact from './components/Contact'
import TechStack from './components/TechStack'


function App() {
 
  return (
    <>
      <NavBar/>
      <Home/>
      <TechStack/>
      <Projects/>
      <Contact/>
      <MyFooter/>

    </>
  )
}

export default App
