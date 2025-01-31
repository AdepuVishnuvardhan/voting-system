import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`/api/results`);
        setResults(response.data);
      } catch (err) {
        console.error('Error fetching results', err);
      }
    };
    fetchResults();
  }, []);

  return (
    <div>
      <h2>Voting Results</h2>
      <ul>
        {results.map((result) => (
          <li key={result.candidate}>{result.candidate}: {result.votes} votes</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
