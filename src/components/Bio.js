import React from "react"
import biopicture from './joeybrown.jpg'
import "./Bio.css";

const Bio = () => {
    return (
    <div className="bioContainer">
        <div className='picture'>
            <img src= {biopicture} alt="The site owner, Joey Brown"/>
        </div>
        <div className='bio'>
            <h2>About Me</h2>
            <p className='bioParagraph'>I am a beginner software developer that is constantly seeking opportunities to learn and better my understanding of software development. 
                So far I have used several languages and I'm looking forward to learning more.</p>

            <p>As of now the languages I am most comfortable with are: <b>JavaScript</b>, 
                <b>HTML</b>, <b>CSS</b>, and <b>Elixir</b>. I have experimented lightly with react and look forward to expanding my programming knowledge to new languages.</p>

            <p> I enjoy challenges and feel nothing is more rewarding than finding a solution to a problem.</p>
        </div>
    </div>
    )
}


export default Bio