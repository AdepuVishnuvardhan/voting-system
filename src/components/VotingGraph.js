import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS } from 'chart.js';

const VotingGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        const response = await axios.get(`/api/voting-percentage`);
        setData(response.data);
      } catch (err) {
        console.error('Error fetching graph data', err);
      }
    };
    fetchGraphData();
  }, []);

  const chartData = {
    labels: data.map(item => item.area),
    datasets: [
      {
        label: 'Voting Percentage',
        data: data.map(item => item.percentage),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <h2>Voting Percentage by Area</h2>
      <Line data={chartData} />
    </div>
  );
};

export default VotingGraph;
