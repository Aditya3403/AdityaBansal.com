import React from 'react';
import './Work.css';
import CardWorkPage from './CardWorkPage';
import Graphic from './graphic.png';
import UI from './UI Design.png';
import web from './webDev.jpeg';

function Work(props){
    return(
      <>
      <div className='workPage'>

        <div className='workPage-heading'>
          <h1>Some of My Recent Works</h1>
        </div>
        <div className='workPage-cards' style={{color:props.theme==="dark"? "white":"black"}}>
          <CardWorkPage img={Graphic}/>
          <CardWorkPage img={web}/>
          <CardWorkPage img={UI}/>
          <CardWorkPage img={Graphic}/>
          <CardWorkPage img={web}/>
          <CardWorkPage img={UI}/>
          <CardWorkPage img={Graphic}/>
          <CardWorkPage img={web}/>
          <CardWorkPage img={UI}/>
          <CardWorkPage img={Graphic}/>
          <CardWorkPage img={web}/>
          <CardWorkPage img={UI}/>

        </div>
       </div>
      
      </>
    );
}

export default Work;