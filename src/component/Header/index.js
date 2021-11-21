import React  from 'react'
import Navigation from '../Navigation'

const Header = props => {
  const { choices, currentChoice, setCurrentChoice } = props
  return (
    <div className="header">
      <h1>Kenny Hung</h1>
      <Navigation
        choices={choices}
        currentChoice={currentChoice}
        setCurrentChoice={setCurrentChoice}
      />
    </div>
  )
}

export default Header
