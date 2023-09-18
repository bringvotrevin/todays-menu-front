import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Vote.styled';
import Button from 'components/common/Button/Button';
import ShareBottomSheet from 'components/common/modal/ShareBottomSheet';
// import MenuCard from 'components/common/MenuCard/MenuCard';

const Vote = () => {
  const [IsModalOn, setIsModalOn] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/random-menu/1/result');
  };

  const handleModalClick = () => {
    setIsModalOn(true);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsModalOn(false);
  };

  return (
    <>
      <S.Layout>
        <button style={{ position: 'absolute' }} onClick={handleSubmit}>
          {' '}
          투표
        </button>
        <S.Wrapper>
          {/* <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard /> */}
          <S.BtnGroup>
            <Button className="renewList" $variant="white">
              초기화
            </Button>
            <Button className="makeNewList" $variant="orange" onClick={handleModalClick}>
              투표 만들기
            </Button>
          </S.BtnGroup>
        </S.Wrapper>
      </S.Layout>
      {/* 모달은 포탈 써서 전역으로 나중에 바꿀게요!! */}
      {IsModalOn && <ShareBottomSheet handleModalClose={handleModalClose} />}
    </>
  );
};

export default Vote;
