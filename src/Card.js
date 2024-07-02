import React from 'react';
import './App.css'; // Import CSS file for styling

const Card = ({ title, description, imageUrl ,distance}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-description">{distance}</p>
        <div className="SearchFeaturecontainer">
      <div className="SearchCardFeatures">Pet-Friendly</div>
      <div className="SearchCardFeatures">AC</div>
      <div className="SearchCardFeatures">Hygene</div>
      <div className="SearchCardFeatures">Playground</div>
      <div className="SearchCardFeatures">Vet Support</div>
      <div className="SearchCardFeatures">24/7 live</div>
    </div>
    <button className='SearchCardBook'><p>Book Now</p></button>
      </div>
    </div>
  );
};

export default Card;
