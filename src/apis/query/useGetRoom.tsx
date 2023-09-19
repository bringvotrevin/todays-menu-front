import getRandomListApi from 'apis/api/getRandomListApi';
import { useQuery } from '@tanstack/react-query';

export const useGetRoom = () => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['room'], queryFn: () => getRandomListApi() });

  return {
    data,
    isLoading,
    isError,
  };
};
