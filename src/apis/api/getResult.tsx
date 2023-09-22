import { axiosInstance } from 'apis/base/instance';

const getResult = async (roomId: string | any) => {
  const response = await axiosInstance.get(`/${roomId}/result`);
  return response;
};

export { getResult };
