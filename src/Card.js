import React from 'react';
import './App.css'; // Import CSS file for styling

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-description">45 Km</p>
        <div className="SearchFeaturecontainer">
      <div className="SearchCardFeatures">fgfg</div>
      <div className="SearchCardFeatures">fgfg</div>
      <div className="SearchCardFeatures">fgfg</div>
      <div className="SearchCardFeatures">fgfg</div>
      <div className="SearchCardFeatures">fgfg</div>
      <div className="SearchCardFeatures">fgfg</div>
    </div>
    <button className='SearchCardBook'><p>Book Now</p></button>
      </div>
    </div>
  );
};

export default Card;
