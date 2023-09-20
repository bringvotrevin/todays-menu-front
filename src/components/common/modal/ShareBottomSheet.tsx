import React, { useState } from 'react';
import * as S from './ShareBottomSheet.styled';
import shareViaKakaoImg from 'assets/icons/icon-kakaotalk.svg';
import shareViaLinkImg from 'assets/icons/icon-share-link.svg';

type Props = {
  handleModalClose: React.MouseEventHandler<HTMLDivElement>;
};

export default function ShareBottomSheet(props: Props) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyClick = async (): Promise<void> => {
    try {
      const urlToCopy: string = window.location.href;

      await navigator.clipboard.writeText(urlToCopy);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <S.ShareBottomSheet handleModalClose={props.handleModalClose}>
      <ul>
        <li className="shareViaKaKao">
          <button type="button">
            <img src={shareViaKakaoImg} alt="share via kakaotalk icon" />
            <p>카카오톡으로 공유하기</p>
          </button>
        </li>
        <span className="line" />
        <li className="shareViaLink">
          <button type="button" onClick={handleCopyClick}>
            <img src={shareViaLinkImg} alt="share via link icon" />
            <p>링크 복사하기</p>
          </button>
        </li>
        {isCopied && <S.CopiedModal>링크가 복사되었습니다!</S.CopiedModal>}
      </ul>
    </S.ShareBottomSheet>
  );
}
