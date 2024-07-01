import React from 'react';
import CircleButtons from './CircleButtons';
import FormComponent from './FormComponent';
import './App.css';

const Search = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
  ];

  return (
    <div className="SearchMain">
      <div className="searchQuote">
        <div>
          <span className="searchQuoteOne">Peaceful travel.</span>
          <span className="searchQuoteTwo"> happy pets</span>
        </div>
      </div>
      <div className="SearchImages">
        <CircleButtons images={images} />
      </div>
      <form className="SearchForm">
      <FormComponent />
      </form>
    </div>
  );
};

export default Search;
