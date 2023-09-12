import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../../components/common/MenuCard/MenuCard';
import { Layout, Wrapper } from './Landing.styled';

const Landing = () => {
  const navigate = useNavigate();

  const handleStartButton = () => {
    navigate('/location');
  };

  return (
    <Layout>
      <button onClick={handleStartButton}> 시작</button>
      <Wrapper>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </Wrapper>
    </Layout>
  );
};

export default Landing;
