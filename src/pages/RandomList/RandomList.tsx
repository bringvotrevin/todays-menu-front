import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from 'pages/Loading/Loading';
import MenuCard from 'components/common/MenuCard/MenuCard';
// import { useGetRandomList } from 'apis/query/useGetRandomList';
import AsyncBoundary from 'components/common/AsyncBoundary';
import * as S from './RandomList.styled';
import Button from 'components/common/Button/Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { randomListData } from 'recoil/randomListData';
import { roomIdData } from 'recoil/roomIdData';

const RandomListWrapper = () => {
  return (
    <AsyncBoundary errorFallback={<>...error</>} suspenseFallback={<Loading message={'음식점을 추천 중이에요'} />}>
      <RandomList />
    </AsyncBoundary>
  );
};

const RandomList = () => {
  const navigate = useNavigate();
  // const data = useGetRandomList();
  const [randomList, setRandomList] = useRecoilState(randomListData);
  console.log(randomList);
  const roomId = useRecoilValue(roomIdData);

  const handleSubmit = () => {
    navigate(`/random-menu/${roomId}`);
  };

  const handleClick = (roomId: number, index: number) => {};

  return (
    <S.Layout>
      <S.Title>오늘의 메뉴 후보 </S.Title>
      <S.CardUl>
        {randomList &&
          randomList.slice(0, 5).map((el: any, i: number) => (
            <MenuCard
              key={el.id}
              information={{ restaurantId: el.id, index: i, title: el.title, category: el.category, link: el.link, distance: el.distance }}
              handleClick={(num: number) => {
                console.log(num);
              }}
            ></MenuCard>
          ))}
      </S.CardUl>
      <S.ButtonLayout>
        <Button>다시 추천</Button>
        <Button $variant={'orange'} onClick={handleSubmit}>
          투표 공유하기
        </Button>
      </S.ButtonLayout>
    </S.Layout>
  );
};

export default RandomListWrapper;
