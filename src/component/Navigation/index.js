import React, { useEffect } from 'react'

const Navigation = props => {
  const { choices, currentChoice, setCurrentChoice } = props
  const onSelect = name => {
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