import { useMutation } from '@tanstack/react-query';
import postResuggestOneApi from 'apis/api/postResuggestOneApi';

export const useResuggestOneMutation = () => {
  const mutation = useMutation({
    mutationFn: postResuggestOneApi,
  });
  return mutation;
};
