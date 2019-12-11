import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/app.scss'
import skills from './data/skills.json'

const App = () => {

  const [git, setGit] = useState([])

  useEffect(_ => {
    axios.get('https://api.github.com/users/naveensekar/repos')
      .then(res => setGit(res.data))
      .catch(console.log)
  }, [])

  return (
    <React.Fragment>
    <main></main>
      {/* about */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <section id="about">
              <div className="tag">about</div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-11 offset-lg-1">
                    <p>Experienced Web Designer and Full Stack Developer (JavaScript ) with a demonstrated history of working in the graphic and web design industry. Skilled User Interface Design, Typography and Web Development. Built more than 30+ website and web application on various platforms like, React.js, GraphQL, Node.js, Express.js etc.,</p>
                  </div>
                </div>
              </div>
              <div className="closing tag">about</div>
            </section>
          </div>
        </div>
      </div>

      {/* tech */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <section id="tech">
              <div className="tag">technology</div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-11 offset-lg-1">
                    {skills.map((skill, i) => (
                      <div className="item row" key={i}>
                        <div className="col-lg-3">
                          <img src={skill.image} alt={skill.name} />
                          <h4>{skill.name}</h4>
                        </div>
                        <div className="col-lg-9">
                          <div className="prog-bar">
                            <div className="prog" style={{ width: `${skill.value}%` }}></div>
                          </div>
                          {`${skill.value}%`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="closing tag">technology</div>
            </section>
          </div>
        </div>
      </div>

      {/* github */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <section id="github">
              <div className="tag">github</div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-11 offset-lg-1">
                    <div className="row">
                      {git.map((repo, i) => (
                        <div className="col-lg-4" key={i}>
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <div className="item">
                              <span className="name">{repo.name}</span>
                              <p>{repo.description}</p>
                              <div className="footer">
                                <span className="lang">{repo.language}</span>
                                <img src={repo.owner.avatar_url} alt="avatar" />
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="closing tag">github</div>
            </section>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <section id="contact">
              <div className="tag">contact</div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-11 offset-lg-1">
                    <a href="mailto:c.naveensekar@gmail.com" target="_blank" rel="noopener noreferrer">c.naveensekar@gmail.com</a>
                    <br />
                    <a href="https://linkedin.com/in/naveensekar" target="_blank" rel="noopener noreferrer">linkedin.com/in/naveensekar</a>
                    <a href="https://twitter.com/cnaveensekar" target="_blank" rel="noopener noreferrer">twitter.com/cnaveensekar</a>
                    <a href="https://github.com/naveensekar" target="_blank" rel="noopener noreferrer">github.com/naveensekar</a>
                    <a href="/downloads/naveensekar-react-nodejs-cv.pdf" download className="button">Download CV</a>
                  </div>
                </div>
              </div>
              <div className="closing tag">contact</div>
            </section>
            <section>
              <p className="copy">&copy; Copyrights - Naveen Sekar, {new Date().getFullYear()}</p>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default App
