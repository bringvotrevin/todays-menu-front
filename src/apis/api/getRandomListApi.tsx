// import { axiosInstance } from 'apis/base/instance';

// import { axiosInstance } from 'apis/base/instance';
import { postInstance } from 'apis/base/postInstance';

const getRandomListApi = async () => {
  const latitude = sessionStorage.getItem('latitude');
  const longitude = sessionStorage.getItem('longitude');
  const response = await postInstance.post('/create', {
    longitude,
    latitude,
  });
  // const response = await axiosInstance.get('/create');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return response;
};

export default getRandomListApi;
// 에러페이지 센트리 추가 (공부하기)
