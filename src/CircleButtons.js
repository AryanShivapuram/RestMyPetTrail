import React from 'react';
import './App.css';

const CircleButtons = ({ images, onPetSelect }) => {
  const petTypes = ['dog', 'cat', 'bird', 'fish', 'rabbit', 'turtle'];

  return (
    <div className="container">
      {images.map((image, index) => (
        <button 
          key={index} 
          className="circleButton" 
          onClick={() => onPetSelect(petTypes[index])}
        >
          <img src={image} alt={`button-${index}`} className="image" />
        </button>
      ))}
    </div>
  );
};

export default CircleButtons;
