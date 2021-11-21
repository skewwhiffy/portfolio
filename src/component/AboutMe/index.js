import React from 'react'
import kenny from '../../asset/mugshot.png'

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h1>About me</h1>
      <p>
        <img height="250px" width="350px" src={kenny} alt="Mugshot of Kenny Hung" />
      </p>
      <p>
        Kenny Hung is a devops engineer at Mastercard, where his focus is deployment of environments for testing for developers. Before joining Mastercard, Kenny worked for a number of digitally-led firms including a global online food delivery marketplace and a digital ticketing platform. His current role requires him to solve developers' specific technical challenges in ways that are compatible with and complementary to their existing technology architecture.
      </p>
      <p>
        The key to Kenny’s success is getting the right balance between independent working and team collaboration. With coding requiring a lot of focus, Kenny takes full advantage of the London offices’ flexible workspaces to find quiet spots when he needs to concentrate and be among his team members when they need to share ideas and help one another. Being part of a global team, Kenny supports colleagues around the world to improve and learn.
      </p>
      <p>
        Kenny describes the biggest turning point in his career as something that happened outside of work: having children. "Being a father has made me rethink my priorities. I now want to have as much time as possible with my kids, so it’s vital that I get a good work-life balance. Oliver Wyman’s flexible working scheme has helped with this."
      </p>
    </div>
  )
}

export default AboutMe