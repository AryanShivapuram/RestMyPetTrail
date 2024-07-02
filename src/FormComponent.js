import React, { useState } from 'react';
import './App.css';
import CircleButtons from './CircleButtons';

const FormComponent = () => {
  const [selectedPet, setSelectedPet] = useState('');

  const handlePetSelect = (pet) => {
    setSelectedPet(pet);
  };

  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
  ];

  return (
    <form action="/search" method="get">
      <div className="SearchImages">
        <CircleButtons images={images} onPetSelect={handlePetSelect} />
      </div>
      <div className="form-container">
        <div className="form-items">
          <div className="icon-input">
            <label htmlFor="pickup-datetime" className="datetime-label">Pickup</label>
            <input type="datetime-local" id="pickup-datetime" name="pickup-datetime" />
          </div>
          <div className="icon-input">
            <label htmlFor="delivery-datetime" className="datetime-label">Drop</label>
            <input type="datetime-local" id="delivery-datetime" name="delivery-datetime" />
          </div>
        </div>
        <input type="hidden" name="pet-type" value={selectedPet} />
        <button type="submit" className="search-button">Search</button>
      </div>
    </form>
  );
};

export default FormComponent;
