import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function ProgressChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    loadChartData();
  }, []);

  const loadChartData = () => {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    const dates = storedWorkouts.map(workout => workout.date);
    const benchPressWeights = storedWorkouts.map(workout => workout.benchWeight || null);
    const squatWeights = storedWorkouts.map(workout => workout.squatWeight || null);
    const barbellRowWeights = storedWorkouts.map(workout => workout.barbellRowWeight || null);

    const data = {
      labels: dates,
      datasets: [
        {
          label: 'Bench Press Weight (lbs)',
          data: benchPressWeights,
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
          fill: false,
          spanGaps: true,
        },
        {
          label: 'Squat Weight (lbs)',
          data: squatWeights,
          borderColor: 'rgba(153,102,255,1)',
          backgroundColor: 'rgba(153,102,255,0.2)',
          fill: false,
          spanGaps: true,
        },
        {
          label: 'Barbell Row Weight (lbs)',
          data: barbellRowWeights,
          borderColor: 'rgba(255,159,64,1)',
          backgroundColor: 'rgba(255,159,64,0.2)',
          fill: false,
          spanGaps: true,
        },
      ],
    };

    setChartData(data);
  };

  // Reset function to clear localStorage
  const resetData = () => {
    localStorage.removeItem('workouts');  // Clear all workout data
    loadChartData();  // Refresh the chart with cleared data
  };

  return (
    <div>
      <h2>Progress Tracker</h2>
      {chartData ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Workout Progress',
              },
            },
            scales: {
              y: {
                beginAtZero: false,
                min: 135,
                max: 455,
                ticks: {
                  stepSize: 50,
                },
              },
            },
          }}
        />
      ) : (
        <p>No progress data available yet.</p>
      )}
      {/* Reset Button */}
      <button onClick={resetData} style={{ marginTop: '20px', padding: '10px', background: 'red', color: 'white' }}>
        Reset Progress
      </button>
    </div>
  );
}

export default ProgressChart;
