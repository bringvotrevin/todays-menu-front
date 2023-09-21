import { axiosInstance } from 'apis/base/instance';

const getWinnerResult = async () => {
  const response = await axiosInstance.get('/win');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return response;
};

const getResult = async () => {
  const response = await axiosInstance.get('/voteResultRes');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return response;
};

export { getWinnerResult, getResult };
