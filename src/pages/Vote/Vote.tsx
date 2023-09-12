import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../../components/common/MenuCard/MenuCard';
import Button from '../../components/common/Button/Button';
import * as S from './Vote.styled';

type Props = {};

const Vote = (props: Props) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/random-menu/1/result');
  };

  // return (
  //   <div>
  //     Vote
  //     <button onClick={handleSubmit}>투표</button>
  //   </div>
  // );

  return (
    <S.Layout>
      <button style={{ position: 'absolute' }} onClick={handleSubmit}>
        {' '}
        투표
      </button>
      <S.Wrapper>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <S.BtnGroup>
          <Button variant="white">다시찾기</Button>
          <Button variant="orange">공유하기</Button>
        </S.BtnGroup>
      </S.Wrapper>
    </S.Layout>
  );
};

export default Vote;
