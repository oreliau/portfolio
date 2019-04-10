import React, { Component } from 'react';
import './App.css';

//image
import gitlogo from './gitlogo.svg'
import linklogo from './linklogo.svg'
import maillogo from './maillogo.svg'

//CV
import CV from './resource/cvOréliau.pdf'

// component
import Konami from './Konami/Konami'
import Project from './Projets/Project'


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
    this.close = this.close.bind(this);
    this.calvier = this.calvier.bind(this)
  }

  // capte les touches du code
  calvier(){
    document.addEventListener('keydown', (event) => {
      const { allowedKeys, konamiCode, konamiCodePosition} = this.state
      const nomTouch = event.keyCode
      const key = allowedKeys[nomTouch] // assimile la touche à un nom
      const requiredKey = konamiCode[konamiCodePosition] //touche requise pour continuer

      if(key === requiredKey){
          this.setState((prevState) => ({konamiCodePosition: prevState.konamiCodePosition + 1}));

          //const touch = document.getElementsByClassName(`touch${konamiCodePosition}`)[0];
          //touch.classList.add('touchBlack')
      }
    })
  }

  //vérif le success du code
  successVerif(){
    const { konamiCode, konamiCodePosition} = this.state
    if (konamiCodePosition === (konamiCode.length - 1)) {return this.successKonami()}
  }

  successKonami(){
    this.hideProfil();
    return ( <Konami onClick={this.close}/>)
  }

  hideProfil(){
    const portfolio = document.getElementsByClassName('myportfolio')[0]
    const body = document.querySelector('body')

    body.classList.add('hidescrollbar');
    portfolio.classList.add('hide');
  }

  showProfil(){
    const portfolio = document.getElementsByClassName('myportfolio')[0]
    const body = document.querySelector('body')
    const game = document.getElementsByClassName('game')[0];

    body.classList.remove('hidescrollbar');
    portfolio.classList.remove('hide');
    game.classList.add('hide');
  }

  // close le display konamicode
  close(){
    this.setState({konamiCodePosition: 0}, this.showProfil() )
  }
  
  showImg(){
    const overlay = document.getElementById('overlay');
    const body = document.querySelector('body');


    if(overlay.classList.length === 1){
    overlay.classList.add('display');
    body.classList.add('hidescrollbar');
    }
    else{
      body.classList.remove('hidescrollbar');
      overlay.classList.remove('display');
    }
  }

  render() {
    this.calvier();
    return (
      <div className="App">
      <div className="myportfolio">
        <div className="profil"></div>
        <main className="présentation">
          <h1 className="nom">Oréliau KOUMEDZRO</h1>
          <ul className="description">
            <li className="texte métier">A Front-End UX/UI (junior) Developer</li>
            <li className="texte parcours">After Earned and Did for 9month a Developer Scholarphip from Google and Udacity for being FRONT-END developer in Nantes.</li>
            <li className="texte compétances">React.js / Bootstrap / NodeJs / Visual Studio Code / Adobe XD / Html 5 / Css 3</li>
            <li className="texte Cv">                  
              <a  href={CV} download="CV Oréliau KOUMEDZRO">Télécharger CV</a>
            </li>
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
                <li className="touch touch0">&#8593;</li>
                <li className="touch touch1">&#8593;</li>
                <li className="touch touch2">&#8595;</li>
                <li className="touch touch3">&#8595;</li>
                <li className="touch touch4">&#8592;</li>
                <li className="touch touch5">&#8594;</li>
                <li className="touch touch6">&#8592;</li>
                <li className="touch touch7">&#8594;</li>
                <li className="touch touch8">&#65;</li>
                <li className="touch touch9">&#66;</li> 
              </ul>
            </li>
            <li className="instruction">(Do this code with your keybord to see my games or scroll down to see my other Projets.)</li>    
          </ul>
        </main>
        <Project onClick={this.showImg}/>
      </div>
      <div className="konami" >{this.successVerif()}</div>
      </div>
    );
  }
}

export default App;
