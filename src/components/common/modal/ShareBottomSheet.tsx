import React, { useState } from 'react';
import * as S from './ShareBottomSheet.styled';
import shareViaKakaoImg from 'assets/icons/icon-kakaotalk.svg';
import shareViaLinkImg from 'assets/icons/icon-share-link.svg';

declare global {
  interface Window {
    Kakao: any;
  }
}

type Props = {
  handleModalClose: React.MouseEventHandler<HTMLDivElement>;
};

export default function ShareBottomSheet(props: Props) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const urlToCopy: string = window.location.href;

  const handleCopyClick = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(urlToCopy);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 메뉴',
        description: '메뉴 추천받고 오늘 당기는 음식을 골라봐요',
        imageUrl: 'https://raw.githubusercontent.com/cho7778/1234/main/OGimage-kakao.png?token=GHSAT0AAAAAACG44GTYYHFVMIKZ7HSXSEQKZIOSPIA',
        link: {
          mobileWebUrl: `${urlToCopy}`,
          webUrl: `${urlToCopy}`,
        },
      },
      buttons: [
        {
          title: '오늘의 메뉴 확인하러 가기',
          link: {
            mobileWebUrl: `${urlToCopy}`,
            webUrl: `${urlToCopy}`,
          },
        },
      ],
    });
  };

  return (
    <S.ShareBottomSheet handleModalClose={props.handleModalClose}>
      <ul>
        <li className="shareViaKaKao">
          <button type="button" onClick={shareKakao}>
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
