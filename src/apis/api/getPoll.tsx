// import { axiosInstance } from 'apis/base/instance';

// import { axiosInstance } from 'apis/base/instance';
import { postInstance } from 'apis/base/postInstance';

const getPoll = async () => {
  // const response = await postInstance.post('/create', {
  //   longitude: '127.190607',
  //   latitude: '37.230840',
  // });
  // const response = await axiosInstance.get('/create');
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('getPoll');
  const mock = [
    {
      id: 1,
      title: 'test',
      category: 'testCat',
      count: 0,
      link: 'www.test.com',
      distance: 1,
      address: 'testAddress',
      roomId: 1,
      rank: 0,
    },
    {
      id: 2,
      title: 'test',
      category: 'testCat',
      count: 0,
      link: 'www.test.com',
      distance: 1,
      address: 'testAddress',
      roomId: 1,
      rank: 0,
    },
    {
      id: 3,
      title: 'test',
      category: 'testCat',
      count: 0,
      link: 'www.test.com',
      distance: 1,
      address: 'testAddress',
      roomId: 1,
      rank: 0,
    },
    {
      id: 4,
      title: 'test',
      category: 'testCat',
      count: 0,
      link: 'www.test.com',
      distance: 1,
      address: 'testAddress',
      roomId: 1,
      rank: 0,
    },
    {
      id: 5,
      title: 'test',
      category: 'testCat',
      count: 0,
      link: 'www.test.com',
      distance: 1,
      address: 'testAddress',
      roomId: 1,
      rank: 0,
    },
  ];
  return mock;
};

export default getPoll;
// 에러페이지 센트리 추가 (공부하기)
