import axios from 'axios';

const getRandomListApi = async () => {
  const response = await axios.get('http://localhost:8080/create');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return response;
};

export default getRandomListApi;
// 에러페이지 센트리 추가 (공부하기)
