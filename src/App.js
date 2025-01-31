// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VoterLogin from './components/VoterLogin';
import HomePage from './components/HomePage';
import VoteCasting from './components/VoteCasting';
import VoterList from './components/VoterList';
import Results from './components/Results';
import VotingGraph from './components/VotingGraph'; // For the voting graph
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VoterLogin />} /> {/* Login page */}
        <Route path="/home" element={<HomePage />} /> {/* Home page */}
        <Route path="/vote-casting" element={<VoteCasting />} /> {/* Vote Casting page */}
        <Route path="/voter-list" element={<VoterList />} /> {/* Voter List page */}
        <Route path="/results" element={<Results />} /> {/* Results page */}
        <Route path="/voting-graph" element={<VotingGraph />} /> {/* Voting Percentage Graph page */}
      </Routes>
    </Router>
  );
};

export default App;
