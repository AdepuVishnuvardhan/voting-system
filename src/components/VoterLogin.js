// src/components/VoterLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import './VoterLogin.css';
const VoterLogin = () => {
  const navigate = useNavigate();
  const [voterId, setVoterId] = useState('');
  const [error, setError] = useState('');

  // Predefined voter data for login simulation
  const validVoterIds = ['VOTER123', 'VOTER456', 'VOTER789']; // Example Voter IDs

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (validVoterIds.includes(voterId)) {
      navigate('/home'); // Navigate to the home page on successful login
    } else {
      setError('Invalid Voter ID');
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center">Voter Login</h2>
      <Form onSubmit={handleLogin} className="mx-auto" style={{ maxWidth: '400px' }}>
        <Form.Group controlId="voterId">
          <Form.Label>Voter ID</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your Voter ID" 
            value={voterId} 
            onChange={(e) => setVoterId(e.target.value)} 
            required 
          />
        </Form.Group>

        {error && <p className="text-danger">{error}</p>}

        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default VoterLogin;
