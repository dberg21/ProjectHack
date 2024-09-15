import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import Rankings from './Rankings';

function BarbellRow() {
  const [workoutData, setWorkoutData] = useState({});

  const calculateBarbellRowRank = (weight, reps) => {
    if (weight >= 275 && reps >= 1) {
      return 'GIGA CHAD';
    }
    if ((weight === 225 && reps >= 5 && reps <= 15) || (weight === 274 && reps === 1) || (weight >= 225 && weight <= 274 && reps >= 4 && reps <= 10)) {
      return 'Diamond';
    }
    if ((weight === 185 && reps >= 6 && reps <= 12) || (weight >= 190 && weight <= 220 && reps >= 4 && reps <= 10)) {
      return 'Gold';
    }
    if ((weight >= 135 && reps >= 6 && reps <= 15) || (weight === 185 && reps >= 1 && reps <= 5)) {
      return 'Silver';
    }
    return 'Bronze';
  };

  const handleWorkoutSubmit = (data) => {
    const { barbellRowWeight, barbellRowReps } = data;

    const barbellRowRank = calculateBarbellRowRank(barbellRowWeight, barbellRowReps);

    const newWorkout = {
      date: new Date().toLocaleDateString(),
      barbellRowWeight,
      barbellRowReps,
      barbellRowRank,
    };

    // Save to localStorage
    let storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    storedWorkouts.push(newWorkout);
    localStorage.setItem('workouts', JSON.stringify(storedWorkouts));

    setWorkoutData(newWorkout);
  };

  return (
    <div>
      <h2>Barbell Row</h2>
      <WorkoutForm onSubmit={handleWorkoutSubmit} exercise="barbellRow" />
      <Rankings workoutData={workoutData} exercise="barbellRow" />
    </div>
  );
}

export default BarbellRow;
