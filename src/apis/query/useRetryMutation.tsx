import { useMutation } from '@tanstack/react-query';
import postRetryApi from 'apis/api/postRetryApi';

export const useRetryMutation = () => {
  const mutation = useMutation({
    mutationFn: postRetryApi,
  });
  return mutation;
};
