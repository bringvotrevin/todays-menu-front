import { axiosInstance } from 'apis/base/instance';

interface VoteApiParams {
  roomId: string;
  voteList: number[];
}

const postVoteApi = async ({ roomId, voteList }: VoteApiParams) => {
  const response = await axiosInstance.post(`${roomId}/vote`, { restaurantIdList: voteList });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return response.data;
};

export default postVoteApi;
