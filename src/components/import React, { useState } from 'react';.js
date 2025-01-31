import React, { useState } from 'react';
import axios from 'axios';

const VoterLogin = ({ setVoterId }) => {
  const [voterId, setVoterIdState] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get(`/api/voter/${voterId}`);
      if (response.data.isValid) {
        setVoterId(voterId);
      } else {
        setError('Invalid Voter ID');
      }
    } catch (err) {
      setError('Error occurred');
    }
  };

  return (
    <div>
      <h2>Login with Voter ID</h2>
      <input
        type="text"
        placeholder="Enter Voter id"
        value={voterId}
        onChange={(e) => setVoterIdState(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default VoterLogin;
