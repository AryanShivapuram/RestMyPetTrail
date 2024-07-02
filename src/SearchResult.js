import React from 'react';
import Card from './Card';
import './App.css'; // Main CSS file for global styles

const SearchResult = () => {
  // Example data for cards
  const cards = [
    {
      title: 'Happy Dog Care',
      description: 'Kasturi Nagar, Banglore',
      distance:"5 Km",
      imageUrl: 'image1.jpg',
      
    },
    {
      title: 'Tom and Bell Catty Care',
      description: 'Indira Nagar, Banglore',
      distance:"8 Km",
      imageUrl: 'image2.jpg',
    },
    {
      title: 'Fly Free Center',
      description: 'White Field, Banglore',
      distance:"23 Km",
      imageUrl: 'image3.jpg',
    },
    {
      title: 'Stay With Nemo',
      description: 'Electronic City',
      distance:"29 Km",
      imageUrl: 'image4.jpg',
    },
    {
      title: 'Jumpy Bunny Stop',
      description: 'Hebbal, Banglore',
      distance:"30 Km",
      imageUrl: 'image5.jpg',
    },
    {
      title: 'Winning Turtle World',
      description: 'Yelahanka, Banglore',
      distance:"35 Km",
      imageUrl: 'image6.jpg',
    },
    // Add more cards as needed
  ];

  return (
    <div className="containerSearchResult">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          distance={card.distance}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default SearchResult;
