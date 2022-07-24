import React, { useState,useEffect } from 'react';
import './Herosection.css';
import HeroImage from './heroImg2.jpeg';
import Social from './Social';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import WorkSection from './WorkSection';
import Fade from 'react-reveal/Fade'
import Footer from './Footer';

function Herosection(props){
    function toTop(){
        window.scrollTo(0,0);
    }
    const [visible,setVisibility] = useState({
        visibility : "hidden",
    })
    useEffect(()=>{
        window.addEventListener("scroll",()=>{

            if (window.scrollY > 180) {
                setVisibility({
                    visibility : "visible"
                })
                
            } else {
                setVisibility({
                    visibility : "hidden"
                })
                
            }
        })

    },[]);
  
    function sd(){
        window.scrollTo(0,900);
    }
    
    return(
       <>
        <div className="hero" >
            <Fade bottom>
                <h1 style={{color:props.theme==="dark"? "lightgrey":"rgb(46, 46, 46)"}}>Web Developer, UI/UX Designer.</h1>
                <p style={{color:props.theme==="dark"? "lightgrey":"rgb(46, 46, 46)"}}> I love what I do.</p>
                <img src={HeroImage} alt="" />
                <div className="scrollDown" style={{borderColor:props.theme==="dark"? "#03DAC5":"black"}}>
                <i className="fas fa-angle-double-down fa-2x" onClick={sd}  style={{color:props.theme==="dark"? "#03DAC5":"rgb(46, 46, 46)"}}></i>
                </div>
            </Fade>
        </div>
        <AboutSection theme={props.theme}/>
        <Social theme={props.theme}/>
        <WorkSection theme={props.theme} />
        <ServicesSection theme={props.theme} />
        <Footer/>
        <div className="backTop" style={visible} onClick={toTop} >
            <i  className="fas fa-space-shuttle fa-2x" id="totopBtn" style={{color:props.theme==="dark"? "#03DAC5":"black"}}></i>
       </div>
       </>
    )
}
export default Herosection;