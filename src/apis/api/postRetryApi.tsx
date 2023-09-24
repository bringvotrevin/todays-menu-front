import { axiosInstance } from 'apis/base/instance';

const postRetryApi = async (roomId: number) => {
  const response = await axiosInstance.post(`/retry/${roomId}`);
  return response.data;
};

export default postRetryApi;
