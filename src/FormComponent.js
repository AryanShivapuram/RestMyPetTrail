import React from 'react';
import './App.css';

const FormComponent = () => {
  return (
    <form className="form-container" action="/search" method="get">
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
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default FormComponent;
