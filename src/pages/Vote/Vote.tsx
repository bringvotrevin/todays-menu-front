import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuCard from '../../components/common/MenuCard/MenuCard';
import Button from '../../components/common/Button/Button';

import * as S from './Vote.styled';
import shareViaLinkImg from 'assets/images/icon-share-link.svg';
import shareViaKakaoImg from 'assets/images/icon-kakaotalk.svg';

type Props = {};

const Vote = (props: Props) => {
  const [modalOn, setModalOn] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/random-menu/1/result');
  };

  const handleShareClick = () => {
    setModalOn(true);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setModalOn(false);
  };

  return (
    <>
      <S.Layout>
        <button style={{ position: 'absolute' }} onClick={handleSubmit}>
          {' '}
          투표
        </button>
        <S.Wrapper>
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <S.BtnGroup>
            <Button className="renewList" variant="white">
              초기화
            </Button>
            <Button className="makeNewList" variant="orange" onClick={handleShareClick}>
              투표 만들기
            </Button>
          </S.BtnGroup>
        </S.Wrapper>
      </S.Layout>
      {/* 모달은 포탈 써서 전역으로 나중에 바꿀게요!! */}
      {modalOn && (
        <S.VoteBottomSheet handleModalClose={handleModalClose}>
          <ul>
            <li className="shareViaKaKao">
              <img src={shareViaKakaoImg} alt="share via kakaotalk icon" />
              <p>카카오톡으로 공유하기</p>
            </li>
            <S.Line />
            <li className="shareViaLink">
              <img src={shareViaLinkImg} alt="share via link icon" />
              <p>링크 복사하기</p>
            </li>
          </ul>
        </S.VoteBottomSheet>
      )}
    </>
  );
};

export default Vote;
