import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
     
        <div className="card">
          <img src={props.rasm} alt="" className="card-img" />
          <h1 className='card-h1'>{props.name}</h1>
          <p className='card-p'>{props.position}</p>
          <p className='card-p'>{props.department}</p>
        </div>
      </div>

  )
}

export default Card
