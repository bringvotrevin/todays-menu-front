import { postInstance } from 'apis/base/postInstance';
interface RandomListApiParams {
  longitude: string;
  latitude: string;
}

const postRandomListApi = async ({ longitude, latitude }: RandomListApiParams) => {
  const response = await postInstance.post('/create', {
    longitude,
    latitude,
  });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return response;
};

export default postRandomListApi;
