
import Header from '../component/Header.jsx'
import Hero from '../component/Hero.jsx'
import About from '../component/About.jsx'
import Skill from '../component/Skill.jsx'
import Tools from '../component/Tools.jsx'
import Project from '../component/Project.jsx'
import Contact from '../component/Contact.jsx'
import Resume from '../component/Resume.jsx'
import GitHub from '../component/Github.jsx'
import Footer from '../component/Footer.jsx'





import React from 'react'

const Home = () => {
  return (
    <>
          <Header/>
          <Hero/>
          <About/>
          <Skill/>
          <Tools/>
          <Project/>
          <Resume/>
          <GitHub/>
          <Contact/>
          <Footer/>
    </>
  )
}

export default Home

