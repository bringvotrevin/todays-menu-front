import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from 'pages/Loading/Loading';
import MenuCard from 'components/common/MenuCard/MenuCard';
import AsyncBoundary from 'components/common/AsyncBoundary';
import * as S from './RandomList.styled';
import Button from 'components/common/Button/Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { randomListData } from 'recoil/randomListData';
import { roomIdData } from 'recoil/roomIdData';
import { useRetryMutation } from 'apis/query/useRetryMutation';

const RandomListWrapper = () => {
  return (
    <AsyncBoundary errorFallback={<>...error</>} suspenseFallback={<Loading message={'음식점을 추천 중이에요'} />}>
      <RandomList />
    </AsyncBoundary>
  );
};

const RandomList = () => {
  const navigate = useNavigate();
  const [randomList, setRandomList] = useRecoilState(randomListData);
  const roomId = useRecoilValue(roomIdData);
  const { mutate } = useRetryMutation();

  const handleSubmit = () => {
    navigate(`/random-menu/${roomId}`);
  };

  const handleClick = (roomId: number, index: number) => {
    const newRestaurant = {
      id: 4,
      title: 'Test Food',
      category: 'TestCategory',
      count: 1,
      link: 'www.test.com',
      distance: 1,
      address: 'TestAddress',
      roomId: 1,
      rank: 0,
    };
    setRandomList((prev) => {
      // 바뀐자리에 추가
      // if (prev && prev.length > index) {
      //   const updatedList = [...prev];
      //   updatedList[index] = newRestaurant;
      //   return updatedList;
      // }
      // return prev;

      // 맨마지막에 추가
      if (!prev || prev.length <= index) {
        return prev;
      }
      const updatedList = [...prev];
      updatedList.splice(index, 1);
      updatedList.push(newRestaurant);

      return updatedList;
    });
  };

  const retryOnSuccess = (data: any) => {
    setRandomList(data.restaurantResList);
  };

  const handleRetry = () => {
    if (roomId) {
      mutate(roomId, { onSuccess: retryOnSuccess });
    }
  };

  return (
    <S.Layout>
      <S.Title>오늘의 메뉴 후보 </S.Title>
      <S.CardUl>
        {randomList?.map((el: any, i: number) => (
          <MenuCard
            key={el.id}
            information={{ restaurantId: el.id, index: i, title: el.title, category: el.category, link: el.link, distance: el.distance }}
            handleClick={handleClick}
          ></MenuCard>
        ))}
      </S.CardUl>
      <S.ButtonLayout>
        <Button onClick={handleRetry}>다시 추천</Button>
        <Button $variant={'orange'} onClick={handleSubmit}>
          투표 공유하기
        </Button>
      </S.ButtonLayout>
    </S.Layout>
  );
};

export default RandomListWrapper;
