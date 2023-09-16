import React from 'react';
import * as S from './Result.styled';
import shareResult from 'assets/images/icon-share-result.svg';
import toDetail from 'assets/images/icon-to-detail.svg';
import soup from 'assets/images/icon-soup.svg';
import pizza from 'assets/images/icon-pizza.svg';
import hamburger from 'assets/images/icon-hamburger.svg';
import noodle from 'assets/images/icon-noodle.svg';

type Props = {};

const Result = (props: Props) => {
  return (
    <>
      <button style={{ position: 'absolute' }}>Result</button>
      <S.Wrapper>
        <S.ShareResult>n명이 투표했습니다!</S.ShareResult>
        <S.RestaurantDetail>
          <S.RankingWrapper>
            <img src={soup} alt="soup icon" />
            <img src={pizza} alt="pizza icon" />
            <S.Ranking>1등</S.Ranking>
            <img src={hamburger} alt="hamburger icon" />
            <img src={noodle} alt="noodle icon" />
          </S.RankingWrapper>
          <span className="line"></span>
          <S.RestaurantName>오제제 강남점</S.RestaurantName>
          <S.RestaurantTags>
            <S.RestaurantTag># 양식</S.RestaurantTag>
            <S.RestaurantTag># 스테이크, 립</S.RestaurantTag>
          </S.RestaurantTags>
          <S.RestaurantDistance>120m</S.RestaurantDistance>
          <S.VoteNumber>
            <p>6</p>
            /7명
          </S.VoteNumber>
          <S.toRestaurantDetail>
            지도 앱에서 열기
            <img src={toDetail} alt="to external link icon" />
          </S.toRestaurantDetail>
        </S.RestaurantDetail>
        <S.ButtonShare>
          <img src={shareResult} alt="share result icon" />
          공유하기
        </S.ButtonShare>
        <S.ResultButton>지도 앱에서 열기</S.ResultButton>
        <S.ResultButton variant="retry">처음부터 다시하기</S.ResultButton>
      </S.Wrapper>
    </>
  );
};

export default Result;
