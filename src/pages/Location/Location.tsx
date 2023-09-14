import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import BottomSheet from '../../components/common/modal/BottomSheet';
import * as S from './Location.styled';

const Location: React.FC = () => {
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const addressInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (addressInput.current) {
      addressInput.current.value = address;
    }
  }, [address]);

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

  const handleSubmit = () => {
    navigate('/loading');

  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setModalOn(false);
  };

  return (
    <>
      <S.Layout>
        <S.GetCurrentLocationButton onClick={getCurrentLocation}>현재 위치로 설정하기</S.GetCurrentLocationButton>
        <S.Title>입력하신 위치 기반으로 오늘의 메뉴를 추천해드려요</S.Title>
        <S.Form>
          <S.AddressInput placeholder="회사명, 근처 역 출구, 상세 주소 검색" readOnly onClick={handlePostcodeModal} ref={addressInput} />
          {/* 아래 버튼은 임시로 넣어놓은거라 공통 컴포넌트로 교체 예정입니다! */}
          <button
            style={{
              height: '70px',
              borderRadius: '20px',
              backgroundColor: 'var(--color-main-orange)',
              color: 'white',
              fontSize: 'var(--lg)',
            }}
            onClick={handleSubmit}
          >
            점심메뉴 같이 고르기
          </button>
        </S.Form>
      </S.Layout>
      {/* 모달은 포탈 써서 전역으로 나중에 바꿀게요!! */}
      {modalOn && (
        <BottomSheet handleModalClose={handleModalClose}>
          <DaumPostcodeEmbed onComplete={handleComplete} autoClose style={{ width: '100%', height: 500 }} />
        </BottomSheet>
      )}
    </>
  );
};

export default Location;
