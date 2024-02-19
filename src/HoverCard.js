import React, { useState } from 'react';
import './HoverCard.css'; // Import the CSS file for styling

const HoverCard = () => {
  const [showHeart, setShowHeart] = useState(false);

  const handleButtonClick = () => {
    setShowHeart(true);
    // You can add additional logic or actions here if needed
  };

  return (
    <div className="hover-card">
      <div className="card-content">
        {/* Other content of the hover card */}
        <button onClick={handleButtonClick}>Click me</button>
        {showHeart && <span className="heart">&#10084;</span>}
      </div>
    </div>
  );
};

export default HoverCard;
