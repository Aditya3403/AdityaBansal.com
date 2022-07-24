import React from 'react';
import Fade from 'react-reveal/Fade';
import CardServicesSection from './CardServicesSection';
import './ServicesSection.css';
import GraWall from './graWall.jpeg';
import uiWall from './uiWall.jpeg';
import webDev from './webDev.jpeg';


function ServicesSection(props){
    return(
        <>
            <div className="servicesSection-heading-para" style={{backgroundColor:props.theme==="dark"?"#252527":"#0C71C3"}}>
                <Fade bottom>
                <h1 style={{color:props.theme==="dark"? "white":"white"}}>My Services</h1>
                <p style={{color:props.theme==="dark"? "white":"white"}}>Hello, I am curious and passionate about Web Development and UI/UX Designing and I would love to talk and help others regarding the things I am passionate about.</p>
                </Fade>
            </div>
            <div className="servicesSection-cards">
                <CardServicesSection title="Graphic Designing" img3={GraWall}/>
                <CardServicesSection title="Web Development" img3={webDev}/>
                <CardServicesSection title="UI/UX Designing" img3={uiWall}/>
            </div>
        
    </>
    )
}

export default ServicesSection;
