import { useMutation } from '@tanstack/react-query';
import postRandomListApi from 'apis/api/postRandomListApi';

export const useRandomListMutation = () => {
  const mutation = useMutation({
    mutationFn: postRandomListApi,
  });
  return mutation;
};
