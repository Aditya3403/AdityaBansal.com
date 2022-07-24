import React from 'react'
import './CardWorkPage.css';

const CardWorkPage = (props) => {
  return (
    <>
        <div className="card">
          <img src={props.img} alt="" />
          
        </div>
    
    </>
  )
}

export default CardWorkPage