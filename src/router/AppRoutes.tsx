import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Location from 'pages/Location/Location';
import RandomList from 'pages/RandomList/RandomList';
import Result from 'pages/Result/Result';
import Poll from 'pages/Poll/Poll';
import OverallRanking from 'pages/OverallRanking/OverallRanking';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Location />} />
      <Route path="/random-menu" element={<RandomList />} />
      <Route path="/random-menu/:id" element={<Poll />} />
      <Route path="/random-menu/:id/result" element={<Result />} />
      <Route path="/random-menu/:id/result/overall-ranking" element={<OverallRanking />} />
    </Routes>
  );
};

export default AppRoutes;

// 원했던 Routes 구조인데 '/random-menu'에서 axios error가 있어 연결된 하위페이지들이 안열려서 일단 전체 동일선상에서 진행
/* 
<Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/location" element={<Location />} />
  <Route path="/random-menu" element={<RandomList />}>
    <Route path=":id" element={<Vote />}>
      <Route path="result" element={<Result />}>
        <Route path="overall-ranking" element={<OverallRanking />} />
      </Route>
    </Route>
  </Route>
</Routes>; 
*/
