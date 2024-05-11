import React from 'react'
import './Projects.css';
function Projects() {
  return (
      <div className='featuredProjects' id='projects-section'>
          <h1>Featured Projects </h1>
          <ul>
              <li className='projectsLi'>
                  <img src="/stars.png" alt="" />
                  <h3>Shopping Cart App</h3>
                  <p>This is a mockup shopping cart.
                      You can check its further details by visiting the link. 
                  </p>
                  <button className='projectLink'>Visit</button>
              </li>
              <li className='projectsLi'>
                  <img src="/stars.png" alt="" />
                  <h3>Fetching Movies App</h3>
                  <p>This is a movie fetching app.
                      You can check its further details by visiting the link. 
                  </p>
                  <button className='projectLink'>Visit</button>

              </li>
              <li className='projectsLi'>
                  <img src="/stars.png" alt="" />
                  <h3>GitHub Profile Searching App</h3>
                  <p>This is a mockup GitHub Profile Searching App.
                      You can check its further details by visiting the link. 
                  </p>
                  <button className='projectLink'>Visit</button>

              </li>
              <li className='projectsLi'>
                  <img src="/stars.png" alt="" />
                  <h3>Weather App</h3>
                  <p>This is a mockup Weather App.
                      You can visit its further details by visiting the link. 
                  </p>
                  <button className='projectLink'>Visit</button>

              </li>

          </ul>
    </div>
  )
}

export default Projects