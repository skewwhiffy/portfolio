import React from 'react'

const Footer = () => {
  const links = [{
    name: 'Twitter',
    icon: 'twitter.png',
    url: 'https://twitter.com/skewwhiffy'
  }, {
    name: 'Github',
    icon: 'github.png',
    url: 'https://github.com/skewwhiffy'
  }, {
    name: 'LinkedIn',
    icon: 'linkedin.png',
    url: 'https://www.linkedin.com/in/skewwhiffy'
  }]
  return (
    <div className="footer">
      <ul>
        {links.map(it => {
          return (
            <li key={it.name}>
              <a href={it.url}>
                <img src={require(`../../asset/footer/${it.icon}`).default} alt={it.name} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Footer