import React from 'react'
import './Project.css'

import square from './square.png'
import myreads from './myreads.png'

const Project = () => (
<div className="projets">
    <h2 className="project-title">My Projects done</h2>
    <div className="projet">
        <div className="text">
            <ul >
                <li className="title-desc">My Favorites Squares in Nantes</li>
                <br />
                <ul>
                    <li>Did with React.JS</li>
                    <li>All application components are usable across modern desktop, tablet, and phone browsers.</li>
                    <li>Location Filter</li>
                    <li>List View</li>
                    <li>Map and Markers</li>
                    <li>Asynchronous API Requests</li>
                    <li>Error Handling</li>
                    <li>Error Free</li>
                    <li>Focus</li>
                </ul>
            </ul>
        </div>
        <div className='link'>
            <a href="https://square-in-nantes.netlify.com/" target='_bank'><img src={square} alt="square in nantes" className="square project-img" /></a>
        </div>
    </div>
    <div className="projet">
        <div className='link'>
            <a href="https://silly-wilson-ac72ca.netlify.com/" target='_bank'><img src={myreads} alt="square in nantes" className="myreads project-img" /></a>
        </div>
        <div className="text">
            <ul >
                <li className="title-desc"> My Reads</li>
                <br />
                <ul>
                    <li>Did with React.JS</li>
                    <li>Three categories for books</li>
                    <li>Allow users to move books</li>
                    <li>Information persist between page refreshes</li>
                    <li>search input on a button</li>
                </ul>
            </ul>
        </div>
    </div>
    <div className="projet"></div>

</div>
)

export default Project;