import { useQuery } from '@tanstack/react-query';
import getRandomListApi from 'apis/api/getRandomListApi';

export const useGetRandomList = () => {
  const { data: randomListData } = useQuery({
    queryKey: ['randomList'],
    queryFn: () => getRandomListApi(),
  });
  return randomListData;
};
