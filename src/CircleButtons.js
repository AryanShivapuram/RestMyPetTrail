import React from 'react';
import './App.css';

const CircleButtons = ({ images }) => {
  return (
    <div className="container">
      {images.map((image, index) => (
        <button key={index} className="circleButton">
          <img src={image} alt={`button-${index}`} className="image" />
        </button>
      ))}
    </div>
  );
};

export default CircleButtons;
