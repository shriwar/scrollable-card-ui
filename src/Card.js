import React from 'react';
import './Card.css';

function Card({ person }) {
  return (
    <div className="card">
      <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
      <h2>{`${person.name.first} ${person.name.last}`}</h2>
      <p>{person.email}</p>
    </div>
  );
}

export default Card;
