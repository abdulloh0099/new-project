import React from 'react';
import './Card.css';
const Card = props => {
  return (
    <div>

      <div className={props.name2 ? 'card2' : 'card'}>
        <img src={props.rasm || props.rasm2} className="card-img" />
        <h1 className="card-h1">{props.name || props.name2}</h1>
        <p className="card-p">{props.position || props.position2}</p>
        <p className="card-p">{props.department || props.department2}</p>
      </div>
    </div>
  );
};

export default Card;
