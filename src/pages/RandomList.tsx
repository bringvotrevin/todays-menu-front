import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const RandomList = (props: Props) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/random-menu/1');
  };

  return (
    <div>
      RandomList
      <div>음식점 후보</div>
      <button onClick={handleSubmit}>투표 리스트 만들기</button>
    </div>
  );
};

export default RandomList;
