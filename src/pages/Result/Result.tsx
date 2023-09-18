import React, { useState } from 'react';
import Slider from 'react-slick';
import * as S from './Result.styled';
import shareResult from 'assets/icons/icon-share-result.svg';
import ResultCard from 'components/common/ResultCard/ResultCard';
import Button from 'components/common/Button/Button';
import shareViaKakaoImg from 'assets/icons/icon-kakaotalk.svg';
import shareViaLinkImg from 'assets/icons/icon-share-link.svg';

type Props = {};

const Result = (props: Props) => {
  const [modalOn, setModalOn] = useState<boolean>(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleShareClick = () => {
    setModalOn(true);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setModalOn(false);
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
        <S.ButtonShare onClick={handleShareClick}>
          <img src={shareResult} alt="share result icon" />
          공유하기
        </S.ButtonShare>
        <Button>지도 앱에서 열기</Button>
        <Button $variant="retry">처음부터 다시하기</Button>
      </S.Wrapper>
      {/* 모달은 포탈 써서 전역으로 나중에 바꿀게요!! */}
      {modalOn && (
        <S.VoteBottomSheet handleModalClose={handleModalClose}>
          <ul>
            <li className="shareViaKaKao">
              <img src={shareViaKakaoImg} alt="share via kakaotalk icon" />
              <p>카카오톡으로 공유하기</p>
            </li>
            <span className="line" />
            <li className="shareViaLink">
              <img src={shareViaLinkImg} alt="share via link icon" />
              <p>링크 복사하기</p>
            </li>
          </ul>
        </S.VoteBottomSheet>
      )}
    </>
  );
};

export default Result;
