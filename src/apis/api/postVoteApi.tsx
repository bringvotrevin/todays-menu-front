import { postInstance } from 'apis/base/postInstance';

interface VoteApiParams {
  roomId: string;
  voteList: number[];
}

const postVoteApi = async ({ roomId, voteList }: VoteApiParams) => {
  const response = await postInstance.post(`${roomId}/vote`, { restaurantIdList: voteList });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return response.data;
};

export default postVoteApi;
