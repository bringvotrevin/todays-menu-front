import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Vote = (props: Props) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/random-menu/1/result');
  };

  return (
    <div>
      Vote
      <button onClick={handleSubmit}>투표</button>
    </div>
  );
};

export default Vote;
