import React from 'react';
import Slider from 'react-slick';
import * as S from './Result.styled';
import shareResult from 'assets/images/icon-share-result.svg';
import ResultCard from 'components/common/ResultCard/ResultCard';

type Props = {};

const Result = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // api 연결시 1세트당 1개의 ResultCard로하여 배열로 넣기
  const restaurantDetails = [<ResultCard key="ResultCard1"></ResultCard>];

  return (
    <>
      <button style={{ position: 'absolute' }}>Result</button>
      <S.Wrapper>
        <S.ShareResult>n명이 투표했습니다!</S.ShareResult>
        {/* <ResultCard></ResultCard> */}
        {restaurantDetails.length > 1 ? <Slider {...settings}>{restaurantDetails}</Slider> : restaurantDetails[0]}
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
