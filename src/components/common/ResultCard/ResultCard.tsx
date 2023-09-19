import React from 'react';
import * as S from './ResultCard.styled';
import toDetail from 'assets/icons/icon-to-detail-black.svg';
import soup from 'assets/icons/icon-soup.svg';
import pizza from 'assets/icons/icon-pizza.svg';
import hamburger from 'assets/icons/icon-hamburger.svg';
import noodle from 'assets/icons/icon-noodle.svg';

type ResultCardProps = {
  key?: number;
  rank?: number;
  name?: string;
  tag?: string;
  distance?: number;
  pollNumber?: number;
  totalPollNumber?: number;
};

const ResultCard = (props: ResultCardProps) => {
  // api 연결시 props를 사용해서 Result.tsx에서 배열로 여러개 받아옴
  // 결과가 하나일경우, 배열[0]만 리턴하고
  // 결과가 여러개일경우, 배열 전체를 리턴해서 Slider가 작동하도록 코드 작성 예정

  // 배열 예시
  // const restaurantDetails = [
  //   <S.RestaurantDetail>
  //     <S.RankingWrapper>
  //       <img src={soup} alt="soup icon" />
  //       <img src={pizza} alt="pizza icon" />
  //       <S.Ranking>1등</S.Ranking>
  //       <img src={hamburger} alt="hamburger icon" />
  //       <img src={noodle} alt="noodle icon" />
  //     </S.RankingWrapper>
  //     <span className="line"></span>
  //     <S.RestaurantName>오제제 강남점</S.RestaurantName>
  //     <S.RestaurantTags>
  //       <S.RestaurantTag># 양식</S.RestaurantTag>
  //       <S.RestaurantTag># 스테이크, 립</S.RestaurantTag>
  //     </S.RestaurantTags>
  //     <S.RestaurantDistance>120m</S.RestaurantDistance>
  //     <S.VoteNumber>
  //       <p>6</p>
  //       /7명
  //     </S.VoteNumber>
  //     <S.toRestaurantDetail>
  //       지도 앱에서 열기
  //       <img src={toDetail} alt="to external link icon" />
  //     </S.toRestaurantDetail>
  //   </S.RestaurantDetail>,
  // ];

  return (
    <S.RestaurantDetail key={props.key}>
      <S.RankingWrapper>
        <img src={soup} alt="soup icon" />
        <img src={pizza} alt="pizza icon" />
        <S.Ranking>{props.rank}등</S.Ranking>
        <img src={hamburger} alt="hamburger icon" />
        <img src={noodle} alt="noodle icon" />
      </S.RankingWrapper>
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
