import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import * as S from './Result.styled';
import ResultCard from 'components/common/ResultCard/ResultCard';
import Button from 'components/common/Button/Button';
import ShareBottomSheet from 'components/common/modal/ShareBottomSheet';
import shareResult from 'assets/icons/icon-share-result.svg';
import retry from 'assets/icons/icon-retry-orange.svg';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Result: React.FC = (props: Props) => {
  const [IsModalOn, setIsModalOn] = useState<boolean>(false);
  const [text, setText] = useState('1등 음식점을 확인해보세요 👀');
  const navigate = useNavigate();

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setText('새로고침하면\n최신 투표 결과를 볼 수 있어요');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClickFromScratch = () => {
    navigate('/random-menu');
  };

  // api 연결시 1세트당 1개의 ResultCard로하여 배열로 넣기
  const restaurantDetails = [<ResultCard key="ResultCard1"></ResultCard>];

  return (
    <>
      <button style={{ position: 'absolute' }}>Result</button>
      <S.Wrapper>
        <S.ShareResult $isFirstText={text === '1등 음식점을 확인해보세요 👀'}>{text}</S.ShareResult>
        {/* <ResultCard></ResultCard> */}
        {restaurantDetails.length > 1 ? <Slider {...settings}>{restaurantDetails}</Slider> : restaurantDetails[0]}
        <S.ButtonShare onClick={handleModalClick}>
          <img src={shareResult} alt="share result icon" />
          공유하기
        </S.ButtonShare>
        <S.ReloadButton>
          N명째 투표중
          <img src={retry} alt="retry icon" />
        </S.ReloadButton>
        <Button $variant="retry" onClick={handleClickFromScratch}>
          처음부터 다시하기
        </Button>
      </S.Wrapper>
      {/* 모달은 포탈 써서 전역으로 나중에 바꿀게요!!  */}
      {IsModalOn && <ShareBottomSheet handleModalClose={handleModalClose} />}
    </>
  );
};

export default Result;
