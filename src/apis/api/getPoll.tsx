// import { axiosInstance } from 'apis/base/instance';

import { axiosInstance } from 'apis/base/instance';

const getPoll = async (roomId: string | undefined) => {
  const response = await axiosInstance.get(`/${roomId}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('axios return@@@@ : ', response);
  return response;
  // console.log('getPoll');
  // const mock = [
  //   {
  //     id: 1,
  //     title: 'test',
  //     category: 'testCat',
  //     count: 0,
  //     link: 'www.test.com',
  //     distance: 1,
  //     address: 'testAddress',
  //     roomId: 1,
  //     rank: 0,
  //   },
  //   {
  //     id: 2,
  //     title: 'test',
  //     category: 'testCat',
  //     count: 0,
  //     link: 'www.test.com',
  //     distance: 1,
  //     address: 'testAddress',
  //     roomId: 1,
  //     rank: 0,
  //   },
  //   {
  //     id: 3,
  //     title: 'test',
  //     category: 'testCat',
  //     count: 0,
  //     link: 'www.test.com',
  //     distance: 1,
  //     address: 'testAddress',
  //     roomId: 1,
  //     rank: 0,
  //   },
  //   {
  //     id: 4,
  //     title: 'test',
  //     category: 'testCat',
  //     count: 0,
  //     link: 'www.test.com',
  //     distance: 1,
  //     address: 'testAddress',
  //     roomId: 1,
  //     rank: 0,
  //   },
  //   {
  //     id: 5,
  //     title: 'test',
  //     category: 'testCat',
  //     count: 0,
  //     link: 'www.test.com',
  //     distance: 1,
  //     address: 'testAddress',
  //     roomId: 1,
  //     rank: 0,
  //   },
  // ];
  // return mock;
};

export default getPoll;
// 에러페이지 센트리 추가 (공부하기)
