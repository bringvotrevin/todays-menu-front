import { postInstance } from 'apis/base/postInstance';

interface ResuggestProps {
  roomId: number;
  restaurantId: number;
}

const postResuggestOneApi = async ({ roomId, restaurantId }: ResuggestProps) => {
  const response = await postInstance.post(`/${roomId}/resuggest/${restaurantId}`);
  console.log(response);
  return response.data;
};

export default postResuggestOneApi;
