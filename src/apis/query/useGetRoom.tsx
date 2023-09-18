import getRandomListApi from 'apis/api/getRandomListApi';
import { QueryKey, useQuery } from 'react-query';

export const useGetRoom = () => {
  const queryKey: QueryKey = ['room'];

  const { data, isLoading, isError } = useQuery({ queryKey, queryFn: () => getRandomListApi() });

  return {
    data,
    isLoading,
    isError,
  };
};
