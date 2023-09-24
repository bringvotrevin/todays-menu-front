import axios from 'axios';

const getAddressApi = async (location: { longitude: number; latitude: number }) => {
  const longitude = location.longitude;
  const latitude = location.latitude;
  const response = await axios.get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`, {
    headers: {
      Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
    },
  });
  if (response?.data.documents.length > 0) {
    return response;
  } else {
    throw new Error('주소를 찾을 수 없습니다.');
  }
};

export default getAddressApi;
