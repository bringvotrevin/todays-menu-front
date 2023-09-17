import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from 'pages/Loading/Loading';
import MenuCard from 'components/common/MenuCard/MenuCard';
import { useGetRandomList } from 'apis/query/useGetRandomList';
import AsyncBoundary from 'components/common/AsyncBoundary';

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
    <>
      {data?.data[0].restaurantDtoList
        .slice(5)
        .map((el: any, i: number) => (
          <MenuCard key={i} information={{ title: el.title, category: el.category, link: el.link, distance: el.distance }}></MenuCard>
        ))}
      <button onClick={handleSubmit}>투표 리스트 만들기</button>
    </>
  );
};

export default RandomListWrapper;
