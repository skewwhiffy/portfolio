import React, { useEffect, useState } from 'react'

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

const Navigation = () => {
  const [currentChoice, setCurrentChoice] = useState(choices[0])
  const onSelect = name => {
    console.log(name)
    setCurrentChoice(choices.filter(it => it.name === name)[0])
  }
  useEffect(() => {
    document.title = currentChoice.displayName
  });

  return (
    <div className="navigation">
      <ul>
        {
          choices.map(it => {
            return (
              <li className={currentChoice.name === it.name ? 'selected' : ''} key={it.name}>
                <span className="selection" onClick={() => onSelect(it.name)}>
                  {it.displayName}
                </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Navigation