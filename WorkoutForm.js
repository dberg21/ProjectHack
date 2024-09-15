import React, { useState } from 'react';

function WorkoutForm({ onSubmit, exercise }) {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      [`${exercise}Weight`]: parseFloat(weight),
      [`${exercise}Reps`]: parseInt(reps, 10),
    });
    setWeight('');
    setReps('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log Workout</h3>
      <div>
        <label>{exercise ? `${exercise.charAt(0).toUpperCase()}${exercise.slice(1)} Weight:` : 'Weight'}</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>{exercise ? `${exercise.charAt(0).toUpperCase()}${exercise.slice(1)} Reps:` : 'Reps'}</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default WorkoutForm;