import React, { Component } from 'react';
import './App.css';
import gitlogo from './gitlogo.svg'
import linklogo from './linklogo.svg'
import maillogo from './maillogo.svg'


class App extends Component {
  render() {
    return (
      <div className="myportfolio">
        <div className="profil"></div>
        <main className="présentation">
          <h1 className="nom">Oréliau KOUMEDZRO</h1>
          <ul className="description">
            <li className="texte métier">A Front-End UX/UI (junior) Developer</li>
            <li className="texte parcours">After Earned and Sucess for 9month a Developer Scholarphip from Google and Udacity for being FRONT-END developer in Nantes.</li>
            <li className="texte compétances">React.js / Bootstrap / NodeJs / Visual Studio Code / Adobe XD / Html 5 / Css 3</li>
            <li className="texte">
              <ul className="résaux">
                <li className="link">
                  <a  href="https://github.com/oreliau?tab=repositories/" 
                  target="_blank" 
                  rel="noopener noreferrer" className="link--item">
                    <img className="gitlogo logo" alt="my github repository" src={gitlogo} />
                  </a>
                </li>
                <li className="link">
                  <a  href="https://www.linkedin.com/in/or%25C3%25A9liau-koumedzro-6a486a16b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="link--item">
                      <img className="linkedinlogo logo" alt="my linkined profil" src={linklogo} />
                  </a>
                </li>
                <li className="link">
                  <a  href="mailto:oreliauk@gmail.com"
                      className="link--item">
                        <img className="maillogo logo" alt="oreliauk@gmail.com" src={maillogo} />
                  </a>
                </li>
              </ul>             
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
