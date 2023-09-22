import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './OverallRanking.styled';
import ShareBottomSheet from 'components/common/modal/ShareBottomSheet';
import Button from 'components/common/Button/Button';
import toDetail from 'assets/icons/btn-link-gray.svg';
import shareResult from 'assets/icons/icon-share-resut.svg';
import winner from 'assets/icons/icon-winner.svg';
import { useGetResult } from 'apis/query/useGetResult';

export default function OverallRanking() {
  const [IsModalOn, setIsModalOn] = useState<boolean>(false);
  const navigate = useNavigate();

  const roomId = '2';

  const resultData = useGetResult(roomId);
  console.log('resultData', resultData);

  const handleModalClick = () => {
    setIsModalOn(true);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsModalOn(false);
  };

  const handleRetry = () => {
    navigate('/random-menu');
  };

  return (
    <>
      <S.Wrapper>
        <S.OverallRankingWrapper>
          <h3 className="page-title">전체 순위</h3>
          <S.RestaurantList>
            {/* {resultData?.slice(0, 5).map((item: any) => (
              <S.RestaurantItem key={item.id}>
                <S.Ranking>
                  {item.rank === 1 ? <img src={winner} alt="winner icon" /> : undefined}
                  <strong className="ranking">{item.rank}등</strong>
                  <p>
                    {item.count}
                    <span className="total-number">/15명</span>
                  </p>
                </S.Ranking>
                <S.RestaurantData>
                  <strong className="name">{item.title}</strong>
                  <p className="distance">{item.distance}m</p>
                  <div className="tags">
                    <p># {item.category}</p>
                    <p># {item.category}</p>
                  </div>
                </S.RestaurantData>
                <img src={toDetail} alt="more detail icon" />
              </S.RestaurantItem>
            ))} */}

            <S.ButtonShare onClick={handleModalClick}>
              <img src={shareResult} alt="share result icon" />
              공유하기
            </S.ButtonShare>
            <Button onClick={handleRetry}>다시하기</Button>
          </S.RestaurantList>
        </S.OverallRankingWrapper>
      </S.Wrapper>
      {/* 모달은 포탈 써서 전역으로 나중에 바꿀게요!! */}
      {IsModalOn && <ShareBottomSheet handleModalClose={handleModalClose} />}
    </>
  );
}
