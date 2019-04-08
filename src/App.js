import React, { Component } from 'react';
import './App.css';

//image
import gitlogo from './gitlogo.svg'
import linklogo from './linklogo.svg'
import maillogo from './maillogo.svg'
import arrow from './arrow.png'


// component
import Konami from './Konami'
import Project from './Project'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // le vrai konami code
      konamiCode: ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'],
      // les touches autorisées
      allowedKeys: {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
      },
      // suit la séquence du code
      konamiCodePosition: 0
    }
    this.close = this.close.bind(this)
  }


  calvier(){
    document.addEventListener('keydown', (event) => {
      console.log(event.key)
      const { allowedKeys, konamiCode, konamiCodePosition} = this.state

      const nomTouch = event.keyCode
      const key = allowedKeys[nomTouch] // assimile la touche à un nom
      const requiredKey = konamiCode[konamiCodePosition] //touche requise pour continuer

      if(key === requiredKey){
          this.setState({konamiCodePosition: konamiCodePosition + 1})
          console.log(konamiCodePosition);
          console.log(konamiCode.length)
      }
    })
  }

  successVerif(){
    const { konamiCode, konamiCodePosition} = this.state
    if (konamiCodePosition === (konamiCode.length - 1)) {return <Konami onClick={this.close} />}
  }

  close(){
    const game = document.getElementsByClassName('game')[0];

    this.setState({konamiCodePosition: 0}, game.classList.add('hide'))
    }

  render() {
    this.calvier();
    return (
      <div className="myportfolio">
        <div >{this.successVerif()}</div>
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
              <ul className="konami">
                <li className="touch">&#8593;</li>
                <li className="touch">&#8593;</li>
                <li className="touch">&#8595;</li>
                <li className="touch">&#8595;</li>
                <li className="touch">&#8592;</li>
                <li className="touch">&#8594;</li>
                <li className="touch">&#8592;</li>
                <li className="touch">&#8594;</li>
                <li className="touch">&#65;</li>
                <li className="touch">&#66;</li> 
              </ul>
              <li className="instruction">(do it with your keyboard)</li>          
            </li>
          </ul>

        </main>

      </div>
    );
  }
}

export default App;
