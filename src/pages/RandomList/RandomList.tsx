import React, { useEffect, useState } from 'react';
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
import { useResuggestOneMutation } from 'apis/query/useResuggestOneMutation';
import Error from 'pages/Error/Error';
import BottomSheet from 'components/common/modal/BottomSheet';
import EndOfListAlert from 'components/common/modal/children/EndOfListAlert';
import ReactGA from 'react-ga4';

const RandomListWrapper = () => {
  return (
    <AsyncBoundary errorFallback={<Error />} suspenseFallback={<Loading message={'음식점을 추천 중이에요'} />}>
      <RandomList />
    </AsyncBoundary>
  );
};

const RandomList = () => {
  const navigate = useNavigate();
  const [randomList, setRandomList] = useRecoilState(randomListData);
  const [isAlertModalOn, setIsAlertModalOn] = useState<boolean>(false);

  const roomId = useRecoilValue(roomIdData);
  const { mutate: retryMutate } = useRetryMutation();
  const { mutate: resuggestOneMutate } = useResuggestOneMutation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '음식점 추천 화면',
      title: '음식점_추천_리스트',
    });
  }, []);

  const handleSubmit = () => {
    if (roomId) {
      ReactGA.event({
        category: 'click',
        action: '투표공유하기_버튼',
        label: '음식점 추천 화면',
        value: roomId,
      });
    }
    navigate(`/random-menu/${roomId}`);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsAlertModalOn(false);
  };

  const handleClick = (restaurantId: number, index: number) => {
    ReactGA.event({
      category: 'click',
      action: '마이너스_버튼',
      label: '음식점 추천 화면',
    });
    const resuggestOneOnSuccess = (data: any) => {
      setRandomList((prev) => {
        if (prev) {
          const updatedList = [...prev];
          updatedList.splice(index, 1);
          updatedList.push(data);
          return updatedList;
        }
        return prev;
      });
    };
    if (roomId && restaurantId) {
      resuggestOneMutate({ roomId, restaurantId }, { onSuccess: resuggestOneOnSuccess });
    }
  };

  const retryOnSuccess = (data: any) => {
    setRandomList(data.restaurantResList);
  };

  const handleRetry = () => {
    ReactGA.event({
      category: 'click',
      action: '다시_추천_버튼',
      label: '음식점 추천 화면',
    });
    if (roomId) {
      retryMutate(roomId, { onSuccess: retryOnSuccess });
    }
  };

  return (
    <>
      <S.Layout>
        <S.Title>오늘의 메뉴 후보 </S.Title>
        <S.CardUl>
          {randomList?.map((el: any, i: number) => (
            <MenuCard
              key={el.id}
              information={{ restaurantId: el.id, index: i, title: el.title, category: el.category, link: el.link, distance: el.distance, address: el.address }}
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
      {isAlertModalOn && (
        <BottomSheet handleModalClose={handleModalClose}>
          <EndOfListAlert />
        </BottomSheet>
      )}
    </>
  );
};

export default RandomListWrapper;
