import React from 'react';

// Import rank images
import BronzeImage from '../Assets/Bronze.webp';
import SilverImage from '../Assets/Silver.webp';
import GoldImage from '../Assets/Gold.webp';
import DiamondImage from '../Assets/Diamond.webp';
import GigaChadImage from '../Assets/GigaChad.jpg';

function Rankings({ workoutData, exercise }) {
  // Function to get the corresponding image for a rank
  const getRankImage = (rank) => {
    switch (rank) {
      case 'Bronze':
        return BronzeImage;
      case 'Silver':
        return SilverImage;
      case 'Gold':
        return GoldImage;
      case 'Diamond':
        return DiamondImage;
      case 'GIGA CHAD':
        return GigaChadImage;
      default:
        return null; // No image if there's no rank
    }
  };

  return (
    <div className="ranking-section">
      <h2>Your {exercise.charAt(0).toUpperCase() + exercise.slice(1)} Ranking</h2>
      <ul>
        <li>Rank: {workoutData[`${exercise}Rank`] || 'No Data'}</li>
        <li>Weight Lifted: {workoutData[`${exercise}Weight`] || 'N/A'} lbs</li>
        <li>Reps: {workoutData[`${exercise}Reps`] || 'N/A'}</li>
      </ul>

      {/* Display rank image */}
      {workoutData[`${exercise}Rank`] && (
        <img
          src={getRankImage(workoutData[`${exercise}Rank`])}
          alt={`${workoutData[`${exercise}Rank`]} rank`}
          style={{ width: '150px', marginTop: '20px' }}
        />
      )}
    </div>
  );
}

export default Rankings;

