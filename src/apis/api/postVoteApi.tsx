import { postInstance } from 'apis/base/postInstance';

interface VoteApiParams {
  roomId: string;
  voteList: number[];
}

const postVoteApi = async ({ roomId, voteList }: VoteApiParams) => {
  console.log(roomId, voteList);
  const response = await postInstance.post(`${roomId}/vote`, { restaurantIdList: voteList });
  return response.data;
};

export default postVoteApi;
