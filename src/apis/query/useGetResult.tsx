import { useQuery } from '@tanstack/react-query';
import { getResult, getWinnerResult } from 'apis/api/getResult';
import { useEffect } from 'react';

type ResultItem = {
  // address: string;
  // category: string;
  // count: number;
  // distance: number;
  // id: number;
  // link: string;
  // rank: number;
  // roomId: string | number;
  // title: string;
};

const useGetWinnerResult = () => {
  const { data: voteWinnerResultData, refetch } = useQuery({
    queryKey: ['voteWinnerResult'],
    queryFn: () => getWinnerResult(),
  });
  return { voteWinnerResultData, refetch };
};

const useGetResult = () => {
  const { data: voteOverallResultData } = useQuery({
    queryKey: ['voteOverallResult'],
    queryFn: async () => {
      const winnerResultResponse = await getWinnerResult();
      const restResultResponse = await getResult();

      const winnerResult: ResultItem[] = winnerResultResponse.data;
      const restResult: ResultItem[] = restResultResponse.data;

      return [...winnerResult, ...restResult];
    },
  });
  return voteOverallResultData;
};

export { useGetWinnerResult, useGetResult };
