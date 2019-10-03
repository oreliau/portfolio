import React, { Component } from 'react';
import './App.css';

//Le clavier virtuel
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

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
      konamiCode: ['&#8593;', '&#8593;', '&#8595;', '&#8595;', '&#8592;', '&#8594;', '&#8592;', '&#8594;', 'B', 'A'],
      // les touches autorisées
      allowedKeys: {
        37: '&#8592;', //left
        38: '&#8593;', //up
        39: '&#8594;', //right
        40: '&#8595;',
        65: 'A',
        66: 'B'
      },
      // suit la séquence du code
      konamiCodePosition: 0
    }
    this.close = this.close.bind(this);
    this.clavier = this.clavier.bind(this)
  }
  

  componentDidMount(){
    this.clavier();
    this.onKeyPress();
  }

  // capte les touches du code
  clavier(){
    document.addEventListener('keydown', (event) => {
      const { allowedKeys, konamiCode, konamiCodePosition} = this.state
      const nomTouch = event.keyCode
      const key = allowedKeys[nomTouch] // assimile la touche à un nom
      const requiredKey = konamiCode[konamiCodePosition] //touche requise pour continuer

      if(key === requiredKey){
          this.setState((prevState) => ({konamiCodePosition: prevState.konamiCodePosition + 1}));

          const touch = document.getElementsByClassName(`touch${konamiCodePosition}`)[0];
          touch.classList.add('touchBlack')
      }
    })
  }

  onKeyPress = (button) => {
      const { konamiCode, konamiCodePosition} = this.state
      const requiredKey = konamiCode[konamiCodePosition] //touche requise pour continuer
      console.log(button)
      if(button === requiredKey){
          this.setState((prevState) => ({konamiCodePosition: prevState.konamiCodePosition + 1}));

          const touch = document.getElementsByClassName(`touch${konamiCodePosition}`)[0];
          touch.classList.add('touchBlack')
      }
  }

  //vérif le success du code
  successVerif(){
    const { konamiCode, konamiCodePosition} = this.state
    if (konamiCodePosition === (konamiCode.length)) {return this.successKonami()}
  }

  //au sccess faire l'affichage des jeux
  successKonami(){
    this.hideProfil();
    return ( <Konami onClick={this.close}/>)
  }

  //cache le profil et la barre de scroll
  hideProfil(){
    const portfolio = document.getElementsByClassName('myportfolio')[0]
    const body = document.querySelector('body')

    body.classList.add('hidescrollbar');
    portfolio.classList.add('hide');
  }

  //remontre le profil et reset la couleur des touches
  showProfil(){
    const portfolio = document.getElementsByClassName('myportfolio')[0]
    const body = document.querySelector('body')
    const game = document.getElementsByClassName('game')[0];
    const touch = document.getElementsByClassName('touch')

    body.classList.remove('hidescrollbar');
    portfolio.classList.remove('hide');
    game.classList.add('hide');

    for(let i = 0; i < touch.length; i++){
      document.getElementsByClassName(`touch${i}`)[0].classList.remove('touchBlack')
    };
  }

  // close le display konamicode
  close(){
    this.setState({konamiCodePosition: 0}, this.showProfil() )
  }
  
  //permet d'afficher les images cliquable en full size
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
    return (
      <div className="App">
      <div className="myportfolio">
        <div className="profil"></div>
        <main className="présentation">
          <h1 className="nom">Oréliau KOUMEDZRO</h1>
          <ul className="description">
            <li className="texte métier">A Front-End UX/UI Developer</li>
            <li className="texte parcours">After Earned and Did for 9month a Developer Scholarphip from Google and Udacity for being WEB developer.</li>
            <li className="texte compétances">React.js / AJAX / Php / JSON / MySQL / Wordpress / Woocomerce / Bootstrap / NodeJs / Visual Studio Code / Adobe XD / Html 5 / Css 3</li>
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
                <li className="touch touch8">&#66;</li> 
                <li className="touch touch9">&#65;</li>
                <div className="keyboard">
                <Keyboard
                  onKeyPress={button =>
                    this.onKeyPress(button)}
                    layout={{
                      default: [
                        'B &#8593; A',
                        '&#8592; &#8595; &#8594;'
                      ]
                    }}
                />
              </div>
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
