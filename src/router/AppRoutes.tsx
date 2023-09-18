import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from 'pages/Landing/Landing';
import Location from 'pages/Location/Location';
import RandomList from 'pages/RandomList/RandomList';
import Result from 'pages/Result/Result';
import Poll from 'pages/Poll/Poll';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/location" element={<Location />} />
      <Route path="/random-menu" element={<RandomList />} />
      <Route path="/random-menu/:id" element={<Poll />} />
      <Route path="/random-menu/:id/result" element={<Result />} />
    </Routes>
  );
};

export default AppRoutes;
