import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Location from '../pages/Location/Location';
import Loading from '../pages/Loading/Loading';
import RandomList from '../pages/RandomList/RandomList';
import Result from '../pages/Result/Result';
import Vote from '../pages/Vote/Vote';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/location" element={<Location />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/random-menu" element={<RandomList />} />
      <Route path="/random-menu/:id" element={<Vote />} />
      <Route path="/random-menu/:id/result" element={<Result />} />
    </Routes>
  );
};

export default AppRoutes;
