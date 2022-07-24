import React from 'react';
import './About.css';
import HeroImage from './heroImg2.jpeg';
import Footer from './Footer';

function About(props){
    return(
      <>
      <div className='aboutPage'>
        <div className='aboutPage-heading-image'>
          <div className='aboutPage-heading-para'>
            <div className='aboutPage-heading'>
              <h1>ABOUT.</h1>
            </div>
            <div className='aboutPage-para'>
              <p>Hi!👋 I am Aditya. I am a Web Developer and a UI/UX Designer based in India.I am currentely pursueing Bachelor of technology from Jaypee University of InformationTechnology, India.I have completed over 10+ projects both in Web Development and UI/UX Designing.</p>
              {/* <p>I have been always passionate and curious about the technology since my childhood.<br/> I believe in solving daily life problems faced by many with my piece of code and lay a<br/> positive impact on the lives of people. I love what I do and I do what I love.<br/>Feel free to get in touch with me.</p> */}
            </div>
          </div>
          <div className='aboutPage-image'>
            <img src={HeroImage} alt="" />
          </div>
        </div>
        <div className='aboutPage-skillSection'>
          <div className='aboutPage-skillSection-heading'>
            <h1>My skills.</h1>
          </div>
          <div className='aboutPage-skillSection-skillbar'>
            <h4>HTML</h4>
            <div className='container'>
              <span className='tooltip-html'>95%</span>
              <div className='skillbar html'></div>
            </div>
            <h4>CSS</h4>
            <div className='container'>
            <span className='tooltip-css'>95%</span>
              <div className='skillbar css'></div>
            </div>
            <h4>JavaScript</h4>
            <div className='container'>
            <span className='tooltip-js'>80%</span>
              <div className='skillbar js'></div>
            </div>
            <h4>React Js</h4>
            <div className='container'>
            <span className='tooltip-react'>80%</span>
              <div className='skillbar react'></div>
            </div>
            <h4>Figma</h4>
            <div className='container'>
            <span className='tooltip-figma'>90%</span>
              <div className='skillbar figma'></div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      
      </>
    );
}

export default About;