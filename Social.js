import React from 'react';
import './Social.css';
import Fade from 'react-reveal/Fade';

function Social(props){
    return(
       <>
        <div className="socialSection" style={{backgroundColor:props.theme==="dark"?"	#A3A3A6":"white"}}>
            <Fade bottom>
            <h1 className="socialSection-heading" style={{color:props.theme==="dark"?"black":"black"}}>Find Me On</h1>
            <div className="socialSection-icons">
                <a href="https://www.instagram.com/adityabansal3403/" target="_blank"><i className="fab fa-instagram fa-4x"></i></a>
                <a href="https://www.linkedin.com/in/aditya-bansal-036b36211/"target="_blank"><i className="fab fa-linkedin-in fa-4x"></i></a>
                <a href="https://github.com/Aditya3403" target="_blank"><i className="fab fa-github fa-4x"></i></a>
                <a href="#"><i className="fab fa-twitter fa-4x"></i></a>
                <a href="#"><i className="fab fa-facebook-square fa-4x"></i></a>
                <a href="#"><i className="fab fa-dribbble fa-4x"></i></a>
            </div>
            </Fade>
        </div>
       </> 
    )
}
export default Social;