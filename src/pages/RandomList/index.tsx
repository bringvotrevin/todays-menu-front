import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getRandomListAPI from 'apis/api/getRandomListAPI';
import Loading from 'pages/Loading/Loading';
import MenuCard from 'components/common/MenuCard/MenuCard';
import { useGetRandomList } from 'apis/query/useGetRandomList';
// import AsyncBoundary from 'components/common/AsyncBoundary';

// const RandomListWrapper = () => {
//   return (
//     <AsyncBoundary errorFallback={<>...error</>} suspenseFallback={<>...loading</>}>
// <RandomList />
//     </AsyncBoundary>
//   );
// };

const RandomList = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/random-menu/1');
  };

  // const { data } = useGetRandomList();

  // if (!data) return <></>;

  return (
    <>
      {/* {isLoading && <Loading></Loading>} */}
      {/* {isError && <div>error</div>} */}
      {/* {data?.data[0].restaurantDtoList */}
      {/* .slice(5)
        .map((el: any) => <MenuCard information={{ title: el.title, category: el.category, link: el.link, distance: el.distance }}></MenuCard>)}
      <button onClick={handleSubmit}>투표 리스트 만들기</button> */}
    </>
  );
};

export default RandomList;
