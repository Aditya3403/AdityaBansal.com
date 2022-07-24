import React, { useState } from 'react';
import './Navbar.css';
import {Link } from 'react-router-dom';


function Navbar(props){
    const [down,setDown] = useState({
        visibility: "hidden"
    });
    function drDown(){
        if (down.visibility === "hidden") {
            setDown({
                visibility: "visible"
            }) 
        }else{
            setDown({
                visibility: "hidden"
            }) 
        }
      
    }
  
   return(
       <>
        <nav style={{backgroundColor:props.theme==="dark"? "#252527":"transparent"}}>
            <div className='nav-logo'>
                <h1>Aditya.</h1>
                
            </div>
            <div className='nav-links'>
                <ul className="menu">
                    <li ><Link to="/" style={{color:props.theme==="dark"? "white":"black"}}>Home</Link></li>
                    <li onClick={drDown}><Link to="/work" style={{color:props.theme==="dark"? "white":"black"}}>Work</Link></li>
                    <li><Link to="/about" style={{color:props.theme==="dark"? "white":"black"}}>About</Link></li>
                    {/* <li><Link to="/blog" style={{color:props.theme==="dark"? "white":"black"}}>Blog</Link></li> */}
                    {/* <li><Link to="/services" style={{color:props.theme==="dark"? "white":"black"}}>Services</Link></li> */}
                    <li><Link to="/contact"style={{color:props.theme==="dark"? "white":"black"}}>Contact</Link></li>
            
                </ul>
            </div>
            <div className="darkmode">
                <h1 style={{color:props.theme==="dark"? "white":"black"}}>Switch {`${props.theme==="light"? "off":"on"}`} lights</h1>
                <label className="switch" >
                    <input type="checkbox" onClick={props.toggleTheme} />
                    <span className="slider" style={{backgroundColor:props.theme==="dark"? "#03DAC5":"#ff7575"}}></span>
                </label>
            </div>
        </nav>
      
       
       
       </>

   ); 
}

export default Navbar;