import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'roomIdData',
  storage: sessionStorage,
});

export const roomIdData = atom<number | null>({
  key: 'roomIdData',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
