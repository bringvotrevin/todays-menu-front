import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from 'pages/Loading/Loading';
import MenuCard from 'components/common/MenuCard/MenuCard';
import { useGetRandomList } from 'apis/query/useGetRandomList';
import AsyncBoundary from 'components/common/AsyncBoundary';
import * as S from './RandomList.styled';
import Button from 'components/common/Button/Button';

const RandomListWrapper = () => {
  return (
    <AsyncBoundary errorFallback={<>...error</>} suspenseFallback={<Loading />}>
      <RandomList />
    </AsyncBoundary>
  );
};

const RandomList = () => {
  const navigate = useNavigate();
  const { data } = useGetRandomList();

  const handleSubmit = () => {
    navigate(`/random-menu/${data?.data[0].id}`);
  };

  return (
    <S.Layout>
      <S.Title>오늘의 메뉴 후보 </S.Title>
      <S.CardUl>
        {data?.data[0].restaurantDtoList
          .slice(5)
          .map((el: any, i: number) => (
            <MenuCard key={i} information={{ title: el.title, category: el.category, link: el.link, distance: el.distance }}></MenuCard>
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
