import React from 'react'
import cross from './cross.png'

const Konami = ({onClick}) => (
<div className="game">
    <div className="menu">
        <span className="start">Chosse witch game you want to start:</span>
        <span className="close-display" onClick={() => onClick()}><img src={cross} alt='close' /></span>
    </div>
    <div className="chose-game">
        <a className="konami-link" href="https://loving-meninsky-ccd2a2.netlify.com/" target="_blank" rel="noopener noreferrer"><div id="game1"></div></a>
        <a href="https://pendu-8557ea.netlify.com/" target="_blank" rel="noopener noreferrer"><div id="game2"></div><p className="french">(french word)</p></a>
        
    </div>
    

</div>)

export default Konami;