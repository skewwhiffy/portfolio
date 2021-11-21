import React from 'react'

const Portfolio = () => {
  const sites = [{
    name: 'Twitter',
    url: 'https://twitter.com',
    github: 'https://github.com/twitter',
    screenshot: 'twitter.png'
  }, {
    name: 'XKCD',
    url: 'https://xkcd.com',
    github: 'https://github.com/xkcd',
    screenshot: 'xkcd.png'
  }, {
    name: 'Signal',
    url: 'https://signal.org',
    github: 'https://github.com/signalapp',
    screenshot: 'signal.png'
  }, {
    name: 'OnePlus',
    url: 'https://www.oneplus.com',
    github: 'https://github.com/OnePlusOSS',
    screenshot: 'oneplus.png'
  }, {
    name: 'QMK Keyboards',
    url: 'https://qmk.fm',
    github: 'https://github.com/qmk',
    screenshot: 'qmk.png'
  }, {
    name: 'OLKB Keyboards',
    url: 'https://olkb.com/',
    github: 'https://github.com/olkb',
    screenshot: 'olkb.png'
  }]
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <p>
        <b>The following information is not real! Screenshots and URLs are for demonstration purposes only!</b>
      </p>
      {
        sites.map(it => {
          return (
            <div>
              <h2>{it.name}</h2>
              <p>
                <img
                  className="screenshot"
                  src={require(`../../asset/portfolio/${it.screenshot}`).default}
                  alt={`${it.name} screenshot`}
                />
                <ul>
                  <li>URL: <a href={it.url}>{it.url}</a></li>
                  <li>Github: <a href={it.github}>{it.github}</a></li>
                </ul>
              </p>
              <br />
            </div>
          )
        })
      }
    </div>
  )
}

export default Portfolio