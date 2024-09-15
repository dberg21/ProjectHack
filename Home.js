import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Competitive Gains</h1>
      <p>Select a workout category to get started!</p>

      <nav>
        <ul>
          <li><Link to="/bench">Bench Press</Link></li>
          <li><Link to="/barbell-row">Barbell Row</Link></li>
          <li><Link to="/squats">Squats</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
