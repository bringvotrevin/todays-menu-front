import React from 'react';
import * as S from './ShareBottomSheet.styled';
import shareViaKakaoImg from 'assets/icons/icon-kakaotalk.svg';
import shareViaLinkImg from 'assets/icons/icon-share-link.svg';

type Props = {
  handleModalClose: React.MouseEventHandler<HTMLDivElement>;
};

export default function ShareBottomSheet(props: Props) {
  return (
    <S.ShareBottomSheet handleModalClose={props.handleModalClose}>
      <ul>
        <li className="shareViaKaKao">
          <img src={shareViaKakaoImg} alt="share via kakaotalk icon" />
          <p>카카오톡으로 공유하기</p>
        </li>
        <span className="line" />
        <li className="shareViaLink">
          <img src={shareViaLinkImg} alt="share via link icon" />
          <p>링크 복사하기</p>
        </li>
      </ul>
    </S.ShareBottomSheet>
  );
}
