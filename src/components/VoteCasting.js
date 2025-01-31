import React, { useState } from 'react';
import axios from 'axios';

const VoteCasting = ({ voterId, setVoteCast }) => {
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleVote = async () => {
    try {
      const response = await axios.post(`/api/vote`, { voterId, candidate: selectedCandidate });
      if (response.data.success) {
        setVoteCast(true);
      }
    } catch (err) {
      console.error('Error casting vote', err);
    }
  };

  return (
    <div>
      <h2>Cast Your Vote</h2>
      <select onChange={(e) => setSelectedCandidate(e.target.value)}>
        <option value="">Select Candidate</option>
        <option value="candidate1">Candidate 1</option>
        <option value="candidate2">Candidate 2</option>
        <option value="candidate3">Candidate 3</option>
      </select>
      <button onClick={handleVote}>Vote</button>
    </div>
  );
};

export default VoteCasting;
