import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import BottomSheet from 'components/common/modal/BottomSheet';
import * as S from './Location.styled';
import getAddressAPI from 'apis/api/getAddressApi';
// import { useQuery } from 'react-query';

const Location: React.FC = () => {
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
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

  const handleError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case 1:
        alert('위치 정보 엑세스가 거부되어 있습니다. 설정에서 위치정보 사용을 허용해주세요.');
        break;
      case 2:
        alert('장치에서 위치 정보를 제공할 수 없습니다.');
        break;
      case 3:
        alert('위치 정보를 가져오는 데 시간 초과가 발생했습니다.');
        break;
      default:
        alert('알 수 없는 오류가 발생했습니다.');
        break;
    }
  };

  // const { data, isLoading, isError } = useQuery('address', () => getAddressAPI({ longitude, latitude }));

  // 현재 위치 정보 가져오기
  const getCurrentLocation = async () => {
    console.log('in progress');
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
        try {
          const response = await getAddressAPI({ longitude, latitude });
          const formattedAddress = response.data.documents[0].address.address_name;
          setAddress(formattedAddress);
        } catch (error) {
          console.error('Error fetching address:', error);
        }
      }, handleError);
    } else {
      alert('Geolocation is not available in this browser.');
    }
  };

  const handleSubmit = () => {
    sessionStorage.setItem('address', address);
    navigate('/random-menu');
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
