import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({card}) => {
  return (
    <div key={card.id} className="card">
          <div className="card-image">
            <img src={card.image} className="card-img" alt={card.name} />
          </div>
        <div className="card-content">
          <h2 className="name">{card.name}</h2>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            expedita aliquam, aut quia eum nihil.
          </p>
          <Link className="learn-link">Learn More</Link>
        </div>
      </div>
  );
};

export default Card;
