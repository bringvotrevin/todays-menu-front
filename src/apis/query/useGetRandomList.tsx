import getRandomListApi from 'apis/api/getRandomListAPI';
import { QueryClient, QueryKey, useQuery } from 'react-query';

export const useGetRandomList = () => {
  const queryKey: QueryKey = ['randomList'];

  const { data, isLoading, isError } = useQuery({ queryKey, queryFn: () => getRandomListApi() });

  return {
    data,
    isLoading,
    isError,
  };
};
