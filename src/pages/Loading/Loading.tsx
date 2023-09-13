import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Loading.styled';
import graydots from 'assets/images/gray-dot.svg';
import noodle from 'assets/images/icon-noodle.svg';
import hamburger from 'assets/images/icon-hamburger.svg';
import sushi from 'assets/images/icon-sushi.svg';
import soup from 'assets/images/icon-soup.svg';
import sandwich from 'assets/images/icon-sandwich.svg';

const Loading = () => {
  const navigate = useNavigate();

  const handleStartButton = () => {
    navigate('/random-menu');
  };

  return (
    <S.Wrapper>
      <button style={{ position: 'absolute', top: '10px', left: '10px' }} onClick={handleStartButton}>
        {' '}
        로딩중
      </button>
      <S.ContentsWrapper>
        <S.LoadingH2>로딩중</S.LoadingH2>
        <S.ImgWrapper>
          <S.DotsIcons src={graydots} left="0px" delay="0s" />
          <S.DotsIcons src={graydots} left="50px" delay="0.5s" />
          <S.DotsIcons src={graydots} left="95px" delay="1s" />
          <S.DotsIcons src={graydots} left="145px" delay="1.5s" />
          <S.DotsIcons src={graydots} left="195px" delay="2s" />
          <S.FoodsIcons src={noodle} alt="loading image noodle" left="-5px" delay="0s" />
          <S.FoodsIcons src={hamburger} alt="loading image hamburger" left="45px" delay="0.5s" />
          <S.FoodsIcons src={sushi} alt="loading image sushi" left="90px" delay="1s" />
          <S.FoodsIcons src={soup} alt="loading image soup" left="140px" delay="1.5s" />
          <S.FoodsIcons src={sandwich} alt="loading image sandwich" left="190px" delay="2s" />
        </S.ImgWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
};

export default Loading;
