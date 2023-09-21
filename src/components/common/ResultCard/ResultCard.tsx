import React from 'react';
import * as S from './ResultCard.styled';
import toDetail from 'assets/icons/icon-to-detail-black.svg';
import soup from 'assets/icons/icon-soup.svg';
import pizza from 'assets/icons/icon-pizza.svg';
import hamburger from 'assets/icons/icon-hamburger.svg';
import noodle from 'assets/icons/icon-noodle.svg';

type ResultCardProps = {
  key: number;
  winnerNum: number;
  rank: number;
  name: string;
  tag: string;
  distance: number;
  pollNumber: number;
  totalPollNumber?: number;
};

const ResultCard = (props: ResultCardProps) => {
  const oneWinner = (
    <S.RankingWrapper>
      <img src={soup} alt="soup icon" />
      <img src={pizza} alt="pizza icon" />
      <S.oneWinnerRanking>{props.rank}등</S.oneWinnerRanking>
      <img src={hamburger} alt="hamburger icon" />
      <img src={noodle} alt="noodle icon" />
    </S.RankingWrapper>
  );

  const multipleWinner = (
    <S.RankingWrapper>
      <img src={pizza} alt="pizza icon" />
      <S.multipleWinnerRanking>공동 {props.rank}등</S.multipleWinnerRanking>
      <img src={hamburger} alt="hamburger icon" />
    </S.RankingWrapper>
  );
  return (
    <S.RestaurantDetail key={props.key}>
      {props.winnerNum === 1 ? oneWinner : multipleWinner}
      <span className="line"></span>
      <S.RestaurantName>
        {props.name}
        <img src={toDetail} alt="to external link icon" />
      </S.RestaurantName>
      <S.RestaurantTags>
        <S.RestaurantTag># {props.tag}</S.RestaurantTag>
        <S.RestaurantTag># {props.tag}</S.RestaurantTag>
      </S.RestaurantTags>
      <S.RestaurantDistance>{props.distance}m</S.RestaurantDistance>
      <S.VoteNumber>
        <span>{props.pollNumber}</span>/15명
      </S.VoteNumber>
      <S.ToOverallRanking to="/random-menu/:id/result/overall-ranking">전체 순위 보기</S.ToOverallRanking>
    </S.RestaurantDetail>
  );
};

export default ResultCard;
