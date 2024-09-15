import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import Rankings from './Rankings';

function Bench() {
  const [workoutData, setWorkoutData] = useState({});

  const calculateBenchRank = (weight, reps) => {
    if ((weight >= 315 && reps >= 1) || (weight >= 275 && reps >= 6) || (weight >= 225 && reps >= 21)) {
      return 'GIGA CHAD';
    }
    if ((weight >= 225 && reps >= 10 && reps <= 20) || (weight >= 275 && reps >= 1 && reps <= 5) || (weight > 275 && weight <= 315)) {
      return 'Diamond';
    }
    if ((weight === 225 && reps >= 1 && reps <= 9) || (weight > 225 && weight <= 270 && reps >= 1)) {
      return 'Gold';
    }
    if ((weight === 135 && reps >= 10 && reps <= 25) || (weight === 185 && reps >= 5 && reps <= 15) || (weight >= 205 && weight <= 220 && reps === 1)) {
      return 'Silver';
    }
    return 'Bronze';
  };

  const handleWorkoutSubmit = (data) => {
    const { benchWeight, benchReps } = data;

    const benchRank = calculateBenchRank(benchWeight, benchReps);

    const newWorkout = {
      date: new Date().toLocaleDateString(),
      benchWeight,
      benchReps,
      benchRank,
    };

    // Save to localStorage
    let storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    storedWorkouts.push(newWorkout);
    localStorage.setItem('workouts', JSON.stringify(storedWorkouts));

    // Update state to reflect new workout
    setWorkoutData(newWorkout);
  };

  return (
    <div>
      <h2>Bench Press</h2>
      <WorkoutForm onSubmit={handleWorkoutSubmit} exercise="bench" />
      <Rankings workoutData={workoutData} exercise="bench" />
    </div>
  );
}

export default Bench;
