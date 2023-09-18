import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AsyncBoundary from 'components/common/AsyncBoundary';

import MenuCard from 'components/common/MenuCard/MenuCard';
import Button from 'components/common/Button/Button';

import * as S from './Vote.styled';
import shareViaLinkImg from 'assets/icons/icon-share-link.svg';
import shareViaKakaoImg from 'assets/icons/icon-kakaotalk.svg';
import icon_share from 'assets/icons/icon-share.svg';
import Loading from 'pages/Loading/Loading';
import { useGetRoom } from 'apis/query/useGetRoom';

const VoteWrapper = () => {
  return (
    <AsyncBoundary errorFallback={<>...error</>} suspenseFallback={<Loading />}>
      <Vote />
    </AsyncBoundary>
  );
};

const Vote = () => {
  const [modalOn, setModalOn] = useState<boolean>(false);
  const navigate = useNavigate();
  const { data } = useGetRoom();

  const handleSubmit = () => {
    navigate(`/random-menu/${data?.data[0].id}/result`);
  };

  const handleShareClick = () => {
    setModalOn(true);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setModalOn(false);
  };

  return (
    <>
      <S.Layout>
        <S.Title>오늘의 메뉴에 투표해보세요 </S.Title>
        <S.CardUl>
          {data?.data[0].restaurantDtoList
            .slice(5)
            .map((el: any, i: number) => (
              <MenuCard key={i} information={{ title: el.title, category: el.category, link: el.link, distance: el.distance }} isPoll={true}></MenuCard>
            ))}
        </S.CardUl>
        <S.ButtonLayout>
          <Button onClick={handleShareClick} $style={{ width: '25%' }}>
            <S.ShareImg src={icon_share} alt="공유하기 버튼" />
          </Button>
          <Button $variant={'orange'} onClick={handleSubmit}>
            투표 공유하기
          </Button>
        </S.ButtonLayout>
      </S.Layout>
      {/* 모달은 포탈 써서 전역으로 나중에 바꿀게요!! */}
      {modalOn && (
        <S.VoteBottomSheet handleModalClose={handleModalClose}>
          <ul>
            <li className="shareViaKaKao">
              <img src={shareViaKakaoImg} alt="share via kakaotalk icon" />
              <p>카카오톡으로 공유하기</p>
            </li>
            <S.Line />
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

export default VoteWrapper;
