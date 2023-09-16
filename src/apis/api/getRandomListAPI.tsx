import axios from 'axios';
import React from 'react';

const getRandomListApi = async () => {
  const address = sessionStorage.getItem('address');

  const response = await axios.get('http://localhost:8080/create');
  console.log(response);
  if (response.status === 200) {
    await setTimeout(() => {}, 1000);
    return response;
  } else {
    throw new Error('랜덤 음식점 추천을 받아오는데 오류가 있습니다.');
  }
};

export default getRandomListApi;
