import { postInstance } from 'apis/base/postInstance';

const postRetryApi = async (roomId: number) => {
  const response = await postInstance.post(`/retry/${roomId}`);
  return response.data;
};

export default postRetryApi;
