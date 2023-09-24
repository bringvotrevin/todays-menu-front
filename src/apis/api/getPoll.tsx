import { axiosInstance } from 'apis/base/instance';

const getPoll = async (roomId: string | undefined) => {
  const response = await axiosInstance.get(`/${roomId}`);
  return response;
};

export default getPoll;
// 에러페이지 센트리 추가 (공부하기)
