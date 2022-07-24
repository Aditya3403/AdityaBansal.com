import React from 'react';
import "./CardServicessection.css";

const CardServicesSection = (props) => {
  return(
      <>
       <div className="card2" >
       
        <div className="card-body2">
          <img src={props.img3} alt="" />
          <h5 className="card-title2">{props.title}</h5>
          <p className="card-text2"></p>
          
        </div>
        
        </div>
      </>
  )
};

export default CardServicesSection;
