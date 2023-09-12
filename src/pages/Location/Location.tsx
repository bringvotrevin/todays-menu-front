import React from 'react';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/random-menu');
  };

  return (
    <div>
      Location
      <div>위치정보활용동의 어쩌구</div>
      <button onClick={handleSubmit}>동의</button>
    </div>
  );
};

export default Location;
