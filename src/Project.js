import React from 'react'
import './Project.css'

import square from './square.png'

const Project = () => (
<div className="projets">
    <div className="projet">
        <div className="text">
            <ul>
                <li>fait en</li>
                <li>fait ci</li>
                <li> fait ca</li>
            </ul>
        </div>
        <div className='link'>
            <a href="https://square-in-nantes.netlify.com/" target='_bank'><img src={square} alt="square in nantes" className="square" /></a>
        </div>
    </div>
    <div className="projet"></div>
    <div className="projet"></div>

</div>
)

export default Project;