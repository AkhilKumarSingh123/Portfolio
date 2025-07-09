import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import React from 'react';

// import Header from './component/Header.jsx'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Skill from './component/Skill.jsx'
import Tools from './component/Tools.jsx'
import Project from './component/Project.jsx'
import Contact from './component/Contact.jsx'
import Resume from './component/Resume.jsx'

import Header from './component/Header.jsx'
import Home from './page/Home.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/about" element={<About/>} />

            <Route path="/skill" element={<Skill />} />

            <Route path="/project" element={<Project />} />
    
            <Route path="/resume" element={<Resume />} />

            <Route path="/contact" element={<Contact />} />

        </Routes>
    </>
  )
}

export default App
