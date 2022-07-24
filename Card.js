import React from 'react';
import "./Card.css";

const Card = (props) => {
  return(
      <>
        <div className="card">
          <img src={props.img2} alt="" />
          <div className="card-body" >
            
            <h5 className="card-title"></h5>
            <p className="card-text" ></p>
            
          </div>
        </div>

      </>
  )
};

export default Card;
