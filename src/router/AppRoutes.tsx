import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Location from '../pages/Location';
import RandomList from '../pages/RandomList';
import Result from '../pages/Result';
import Vote from '../pages/Vote';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/location' element={<Location />} />
      <Route path='/random-menu' element={<RandomList />} />
      <Route path='/random-menu/:id' element={<Vote />} />
      <Route path='/random-menu/:id/result' element={<Result />} />
    </Routes>
  );
};

export default AppRoutes;
