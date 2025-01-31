import React from 'react';

const VoteConfirmation = ({ voteCast }) => {
  return (
    <div>
      {voteCast ? (
        <p>Thank you! Your vote has been successfully cast.</p>
      ) : (
        <p>Failed to cast the vote. Please try again.</p>
      )}
    </div>
  );
};

export default VoteConfirmation;
