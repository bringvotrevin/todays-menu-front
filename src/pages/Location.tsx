import React, { useState } from 'react';
import axios from 'axios';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import styled from 'styled-components';

const Location: React.FC = () => {
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const handlePostcodeModal = () => {
    setModalOn(true);
  };

  const handleComplete = (data: Address) => {
    const fullAddress = data.address;
    setAddress(fullAddress);
    setModalOn(false);
  };

  // 현재 위치 정보 가져오기
  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        // 카카오 역 지오코딩 요청 보내기
        try {
          const response = await axios.get(
            `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${position.coords.longitude}&y=${position.coords.latitude}`,
            {
              headers: {
                Authorization: 'KakaoAK d03f46a44fe547b3fefe9bd42fc2310a', // 여기에 카카오 앱 키를 입력하세요.
              },
            },
          );

          if (response.data.documents.length > 0) {
            const formattedAddress = response.data.documents[0].address.address_name;
            setAddress(formattedAddress);
          }
        } catch (error) {
          console.error('Error fetching address:', error);
        }
      });
    } else {
      alert('Geolocation is not available in this browser.');
    }
  };

  return (
    <div>
      <Header>
        입력하신 위치 기반으로
        <br /> 오늘의 메뉴를 추천해드려요
      </Header>
      <AddressInput placeholder="회사명, 근처 역 출구, 상세 주소 검색" readOnly />
      <div>현재 주소: {address}</div>
      <button onClick={handlePostcodeModal}>주소 검색</button>
      <button onClick={getCurrentLocation}>현재 위치 조회</button>
      {modalOn && (
        <PostcodeModal>
          <DaumPostcodeEmbed onComplete={handleComplete} autoClose />
        </PostcodeModal>
      )}
    </div>
  );
};

export default Location;

const PostcodeModal = styled.div`
  width: 500px;
  height: 800px;
`;

const Header = styled.h1`
  font-size: 25px;
  margin: 107px 0 0 18px;
  line-height: 40px;
`;

const AddressInput = styled.input`
  width: 90%;
  margin: 67px auto;
  padding: 21px 0 22px 25px;
  border-radius: 5px;
  display: block;

  &::placeholder {
    color: var(--light-gray);
  }
`;
