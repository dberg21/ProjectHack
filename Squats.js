import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import Rankings from './Rankings';

function Squats() {
  const [workoutData, setWorkoutData] = useState({});

  const calculateSquatRank = (weight, reps) => {
    if (weight >= 405 && reps >= 1) {
      return 'GIGA CHAD';
    }
    if ((weight === 315 && reps >= 5 && reps <= 15) || (weight === 365 && reps === 1) || (weight >= 315 && weight <= 365 && reps >= 4 && reps <= 10)) {
      return 'Diamond';
    }
    if ((weight === 225 && reps >= 6 && reps <= 12) || (weight >= 245 && weight <= 275 && reps >= 4 && reps <= 10) || (weight >= 276 && weight <= 365 && reps >= 1 && reps <= 3)) {
      return 'Gold';
    }
    if ((weight === 185 && reps >= 6 && reps <= 15) || (weight === 225 && reps >= 1 && reps <= 5)) {
      return 'Silver';
    }
    return 'Bronze';
  };

  const handleWorkoutSubmit = (data) => {
    const { squatWeight, squatReps } = data;

    const squatRank = calculateSquatRank(squatWeight, squatReps);

    const newWorkout = {
      date: new Date().toLocaleDateString(),
      squatWeight,
      squatReps,
      squatRank,
    };

    // Save to localStorage
    let storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    storedWorkouts.push(newWorkout);
    localStorage.setItem('workouts', JSON.stringify(storedWorkouts));

    setWorkoutData(newWorkout);
  };

  return (
    <div>
      <h2>Squats</h2>
      <WorkoutForm onSubmit={handleWorkoutSubmit} exercise="squat" />
      <Rankings workoutData={workoutData} exercise="squat" />
    </div>
  );
}

export default Squats;
