import React from 'react';
import {Link} from 'react-router-dom';
import './WorkSection.css';
import Fade from 'react-reveal/Fade';
import Card from './Card';
import UI from './UI Design.png';
import web from './webDev.jpeg';
import Graphic from './graphic.png';
function WorkSection(props){
    return(
        <>
        <div className="work">
        <Fade bottom>
        <h1 style={{color:props.theme==="dark"? "white":"black"}}>My Recent Work</h1>
        </Fade>
        
        <div className="cards">
            <Card title="Graphic Designing" img2={Graphic}/>
            <Card title="Web Development" img2={web}/>
            <Card title="UI/UX Designing" img2={UI}/>
        </div>
        
        <button className="workBtn" style={{borderColor:props.theme==="dark"?"#03DAC5":"#0C71C3",backgroundColor:props.theme==="dark"?"#03DAC5":""}}><Link to="/work" style={{color:props.theme==="dark"?"black":""}}>Explore More</Link></button>
        </div>
    </>
    )
}

export default WorkSection;