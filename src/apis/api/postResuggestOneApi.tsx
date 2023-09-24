import { axiosInstance } from 'apis/base/instance';

interface ResuggestProps {
  roomId: number;
  restaurantId: number;
}

const postResuggestOneApi = async ({ roomId, restaurantId }: ResuggestProps) => {
  const response = await axiosInstance.post(`/${roomId}/resuggest/${restaurantId}`);
  return response.data;
};

export default postResuggestOneApi;
