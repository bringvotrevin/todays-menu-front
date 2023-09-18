import React, { useState } from 'react';
import Slider from 'react-slick';
import * as S from './Result.styled';
import ResultCard from 'components/common/ResultCard/ResultCard';
import Button from 'components/common/Button/Button';
import ShareBottomSheet from 'components/common/modal/ShareBottomSheet';
import shareResult from 'assets/icons/icon-share-result.svg';

type Props = {};

const Result = (props: Props) => {
  const [IsModalOn, setIsModalOn] = useState<boolean>(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleModalClick = () => {
    setIsModalOn(true);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsModalOn(false);
  };

  // api 연결시 1세트당 1개의 ResultCard로하여 배열로 넣기
  const restaurantDetails = [<ResultCard key="ResultCard1"></ResultCard>];

  return (
    <>
      <button style={{ position: 'absolute' }}>Result</button>
      <S.Wrapper>
        <S.ShareResult>
          <p>
            6명이 투표하고 있어요 <br />
            새로고침해서 확인해보세요!
          </p>
        </S.ShareResult>
        {/* <ResultCard></ResultCard> */}
        {restaurantDetails.length > 1 ? <Slider {...settings}>{restaurantDetails}</Slider> : restaurantDetails[0]}
        <S.ButtonShare onClick={handleModalClick}>
          <img src={shareResult} alt="share result icon" />
          공유하기
        </S.ButtonShare>
        <Button>지도 앱에서 열기</Button>
        <Button $variant="retry">처음부터 다시하기</Button>
      </S.Wrapper>
      {/* 모달은 포탈 써서 전역으로 나중에 바꿀게요!!  */}
      {IsModalOn && <ShareBottomSheet handleModalClose={handleModalClose} />}
    </>
  );
};

export default Result;
