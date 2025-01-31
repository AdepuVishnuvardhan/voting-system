// src/components/HomePage.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
const HomePage = () => {
  const navigate = useNavigate();

  const handleVoteCasting = () => {
    // Navigate to the voting process page
    navigate("/vote-casting");
  };

  const handleVoterList = () => {
    // Navigate to the voter list page
    navigate("/voter-list");
  };

  const handleResults = () => {
    // Navigate to the results page
    navigate("/results");
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Voting System Dashboard</h2>

      <Row xs={1} sm={2} md={3} className="g-4">
        {/* Vote Casting Card */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Cast Your Vote</Card.Title>
              <Card.Text>
                Select your candidate and cast your vote securely.
              </Card.Text>
              <Button variant="primary" onClick={handleVoteCasting}>Cast Vote</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Voter List Card */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Voter List</Card.Title>
              <Card.Text>
                View the list of eligible voters for this election.
              </Card.Text>
              <Button variant="secondary" onClick={handleVoterList}>View Voters</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Results Card */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Election Results</Card.Title>
              <Card.Text>
                View the results of the voting process.
              </Card.Text>
              <Button variant="success" onClick={handleResults}>View Results</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Voting Percentage Graph */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Voting Percentage</Card.Title>
              <Card.Text>
                Check the voting percentage in your area with a visual graph.
              </Card.Text>
              <Button variant="info" onClick={() => navigate("/voting-graph")}>View Graph</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
