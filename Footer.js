import React from 'react';
import './Footer.css'
import {Link } from 'react-router-dom';

const Footer = () => {
  return(
      <>
        <footer>
          <div className='contact-section'>
            <p>Want to work with Me ?</p>
            <button><Link to="/contact">Hire Me</Link></button>
                    
          </div>
          <div className='logo-socialIcons'>
            <div className='footer-logo'>
                <h1>Aditya.</h1>
            </div>
            <div class="footer-socials">
              <a href="https://www.linkedin.com/in/aditya-bansal-036b36211/" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a>
              <a href="https://github.com/Aditya3403" target="_blank"><i class="fab fa-github fa-2x"></i></a>
              <a href="#" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
            </div>
          </div>
          <div class="footerBottom">
            <i class="far fa-copyright fa-x"></i>
            <p>2022-25 || AdityaBansal.com</p>
          </div>
      
        </footer>
      </>
  )
};

export default Footer;
