import { styled } from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleStartButton = () => {
    navigate('/location');
  };

  return (
    <Layout>
      <button onClick={handleStartButton}> 시작</button>
    </Layout>
  );
};

export default Landing;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--main-orange);
`;
