import React from 'react'
import './Project.css'

import square from './square.png'
import myreads from './myreads.png'
import vitrine from './vitrine.png'

const Project = ({onClick}) => (
<div className="projets">
    <h2 className="project-title">My Projects done</h2>
    <div className="projet projet1">
        <div className="text">
            <ul className="text-ul">
                <li className="title-desc">My Favorites Squares in Nantes(click on picture to access on the API) </li>
                <br />
                <ul >
                    <li className="aim"><span>Aim:</span> Develop a single-page application using React featuring a map of my neighborhood. I add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit, a search function to easily discover these locations, and a list view to support simple browsing of all locations </li>
                    <br />
                    <ul className="objectifs">
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
            </ul>
        </div>
        <div className='link'>
            <a href="https://square-in-nantes.netlify.com/" target='_bank'><img src={square} alt="square in nantes" className="square project-img" /></a>
        </div>
    </div>
    <div className="projet projet2">
        <div className='link link2'>
            <a href="https://silly-wilson-ac72ca.netlify.com/" target='_bank'><img src={myreads} alt="square in nantes" className="myreads project-img" /></a>
        </div>
        <div className="text text2">
            <ul className="text-ul">
                <li className="title-desc"> My Reads(click on picture to access on the API)</li>
                <br />
                <ul>
                    <li className="aim"><span>Aim:</span> In the MyReads project, I created a bookshelf app that allows to select and categorize books you have read, 
                    are currently reading, or want to read.</li>
                    <br />
                    <ul className="objectifs">
                        <li>Did with React.JS</li>
                        <li>Three categories for books</li>
                        <li>Allow users to move books</li>
                        <li>Information persist between page refreshes</li>
                        <li>search input on a button</li>
                    </ul>
                </ul>
            </ul>
        </div>
    </div>
    <div className="projet projet3" >
        <div className="text">
            <ul className="text-ul">
                <li className="title-desc">Web site done to a client(click for fullsize)</li>
                <br />
                <ul className="objectifs">
                    <li>Did with Html5 / Css3 / Bootsrap / Javascript</li>
                    <li>Used AGILE: scrum method with my client</li>
                </ul>
            </ul>
        </div>
        <div id="overlay" onClick={() => onClick()} className='overlay'><img src={vitrine} id='imgbigsize'alt="vitrine" /></div>
        <div className='link'>
            <img onClick={() => onClick(vitrine)} src={vitrine} alt="square in nantes" className="square project-img" />
        </div>
    </div>

</div>
)

export default Project;