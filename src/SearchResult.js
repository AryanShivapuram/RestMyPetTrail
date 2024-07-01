import React from 'react';
import Card from './Card';
import './App.css'; // Main CSS file for global styles

const SearchResult = () => {
  // Example data for cards
  const cards = [
    {
      title: 'Card 1 is frickin crazy cuz its a happy dog running like craxy',
      description: 'Description for Card 1',
      imageUrl: 'image1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      imageUrl: 'image2.jpg',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      imageUrl: 'image3.jpg',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      imageUrl: 'image3.jpg',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      imageUrl: 'image3.jpg',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      imageUrl: 'image3.jpg',
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
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default SearchResult;
