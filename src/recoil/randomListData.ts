import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'restaurantResList',
  storage: sessionStorage,
});

export interface RestaurantData {
  id: number;
  title: string;
  category: string;
  count: number;
  link: string;
  distance: number;
  address: string;
  roomId: number;
  rank: number;
}

export type DataList = RestaurantData[];

export const randomListData = atom<DataList | null>({
  key: 'randomListData',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
