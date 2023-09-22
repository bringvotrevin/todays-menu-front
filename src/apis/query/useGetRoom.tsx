import { useQuery } from '@tanstack/react-query';
import getPoll from 'apis/api/getPoll';

export const useGetRoom = () => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['room'], queryFn: () => getPoll() });

  return {
    data,
    isLoading,
    isError,
  };
};
