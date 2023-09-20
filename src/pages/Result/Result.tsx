import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import * as S from './Result.styled';
import ResultCard from 'components/common/ResultCard/ResultCard';
import Button from 'components/common/Button/Button';
import ShareBottomSheet from 'components/common/modal/ShareBottomSheet';
import shareResult from 'assets/icons/icon-share-result.svg';
import retry from 'assets/icons/icon-retry-orange.svg';
import { useNavigate } from 'react-router-dom';
import { useGetWinnerResult } from 'apis/query/useGetResult';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Result = () => {
  const [IsModalOn, setIsModalOn] = useState<boolean>(false);
  const [text, setText] = useState('1등 음식점을 확인해보세요 👀');
  const [opacity, setOpacity] = useState(1);
  const navigate = useNavigate();

  const { voteWinnerResultData, refetch } = useGetWinnerResult();

  const winnerData = voteWinnerResultData?.data;
  const winnerDataLength = winnerData.length;

  const handleModalClick = () => {
    setIsModalOn(true);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsModalOn(false);
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0);
    }, 3000);

    const changeTextTimer = setTimeout(() => {
      setText('새로고침하면\n최신 투표 결과를 볼 수 있어요');
      setOpacity(1);
    }, 3200);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(changeTextTimer);
    };
  }, []);

  const handleClickFromScratch = () => {
    navigate('/random-menu');
  };

  return (
    <>
      <button style={{ position: 'absolute' }}>Result</button>
      <S.Wrapper>
        <S.ShareResult $isFirstText={text === '1등 음식점을 확인해보세요 👀'} $opacity={opacity}>
          {text}
        </S.ShareResult>
        {winnerDataLength === 1 ? (
          winnerData.map((item: any, i: number) => (
            <ResultCard
              key={i}
              rank={item.rank}
              name={item.title}
              distance={item.distance}
              pollNumber={item.count}
              tag={item.category}
              winnerNum={winnerDataLength}
            />
          ))
        ) : (
          <Slider {...settings}>
            {winnerData.map((item: any, i: number) => (
              <ResultCard
                key={i}
                rank={item.rank}
                name={item.title}
                distance={item.distance}
                pollNumber={item.count}
                tag={item.category}
                winnerNum={winnerDataLength}
              />
            ))}
          </Slider>
        )}
        <S.ButtonShare onClick={handleModalClick}>
          <img src={shareResult} alt="share result icon" />
          공유하기
        </S.ButtonShare>
        <S.ReloadButton onClick={() => refetch()}>
          15명째 투표중
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
