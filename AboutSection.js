import React from 'react';
import './AboutSection.css';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function AboutSection(props){
    return(
       <>
        <div className="aboutMe" style={{backgroundColor:props.theme==="dark"?"	#252527":"#0C71C3"}}>
        <Fade bottom>
        <h1 style={{color:props.theme==="dark"?"white":"white"}}>Hi!👋 I am Aditya.</h1>
        
        <div className="me">
          <p style={{color:props.theme==="dark"?"white":"white"}}>I am curious and passionate Web Developer and a UI/UX designer based in India.I have completed over 10+ projects.I am outgoing, dedicated, and open-minded person. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time.</p>
          <button style={{backgroundColor:props.theme==="dark"?"	#03DAC5":"white"}}><Link to="/about"style={{color:props.theme==="dark"?"black":"#0C71C3"}}>Know More</Link></button>
        </div>
        </Fade>
        </div>
       </> 
    )
}
export default AboutSection;