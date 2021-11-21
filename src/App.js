import React, { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import AboutMe from './component/AboutMe'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'
import Resume from './component/Resume'
import './App.css'

const choices = [
  {
    name: 'aboutMe',
    displayName: 'About Me',
  },
  {
    name: 'portfolio',
    displayName: 'Portfolio',
  },
  {
    name: 'contact',
    displayName: 'Contact',
  },
  {
    name: 'resume',
    displayName: 'Resumé',
  }
]

const App = () => {
  const [currentChoice, setCurrentChoice] = useState(choices[0])
  return (
    <div className="container">
      <Header
        choices={choices}
        currentChoice={currentChoice}
        setCurrentChoice={setCurrentChoice}
      />
      <section>
        {currentChoice.name === 'aboutMe' && (<AboutMe></AboutMe>)}
        {currentChoice.name === 'portfolio' && (<Portfolio></Portfolio>)}
        {currentChoice.name === 'contact' && (<Contact></Contact>)}
        {currentChoice.name === 'resume' && (<Resume></Resume>)}
      </section>
      <Footer />
    </div>
  );
}

export default App;
