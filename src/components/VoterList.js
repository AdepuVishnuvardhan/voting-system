import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VoterList = () => {
  const [voterList, setVoterList] = useState([]);

  useEffect(() => {
    const fetchVoterList = async () => {
      try {
        const response = await axios.get(`/api/voters`);
        setVoterList(response.data);
      } catch (err) {
        console.error('Error fetching voter list', err);
      }
    };
    fetchVoterList();
  }, []);

  return (
    <div>
      <h2>Voter List</h2>
      <ul>
        {voterList.map((voter) => (
          <li key={voter.id}>{voter.name} - {voter.voterId}</li>
        ))}
      </ul>
    </div>
  );
};

export default VoterList;
