import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Bench from './components/Bench';
import BarbellRow from './components/BarbellRow';
import Squats from './components/Squats';
import ProgressChart from './components/ProgressChart';
import './App.css';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Competitive Gains</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bench">Bench Press</Link></li>
            <li><Link to="/barbell-row">Barbell Row</Link></li>
            <li><Link to="/squats">Squats</Link></li>
            <li><Link to="/progress">Progress Tracker</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bench" element={<Bench />} />
        <Route path="/barbell-row" element={<BarbellRow />} />
        <Route path="/squats" element={<Squats />} />
        <Route path="/progress" element={<ProgressChart />} />
      </Routes>
    </div>
  );
}

export default App;