import { useMutation } from '@tanstack/react-query';
import postVoteApi from 'apis/api/postVoteApi';

export const useVoteMutation = () => {
  const mutation = useMutation({
    mutationFn: postVoteApi,
  });
  return mutation;
};
